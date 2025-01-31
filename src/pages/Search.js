import React, { useEffect } from "react";
import { liteClient as algoliasearch } from "algoliasearch/lite";
import instantsearch from "instantsearch.js";
import {
  searchBox,
  hits,
  configure,
  poweredBy,
} from "instantsearch.js/es/widgets";
import "instantsearch.css/themes/reset.css";

export default function Search() {
  useEffect(() => {
    const searchClient = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
      process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY
    );

    const search = instantsearch({
      indexName: "results_index",
      searchClient,
      onStateChange({ uiState }) {
        const hitsContainer = document.querySelector("#hits");
        const footerContainer = document.querySelector("#algolia-footer");

        // Hide results when search is empty
        if (!uiState.results_index?.query) {
          hitsContainer.classList.add("hide-content");
          footerContainer?.classList.add("hide-content");
          return;
        }

        // Show results only when there's a search query
        hitsContainer.classList.remove("hide-content");
        footerContainer?.classList.remove("hide-content");
      },
    });

    search.addWidgets([
      searchBox({
        container: "#searchbox",
        placeholder: "Search classifications (e.g., T11, T20)...",
        cssClasses: {
          input: 'w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500',
        }
      }),
      configure({
        hitsPerPage: 50,
        attributesToSnippet: ['class_code:10', 'event_name:10'],
        snippetEllipsisText: '…',
        distinct: true,
      }),
      poweredBy({
        container: "#algolia-footer",
      }),
      hits({
        container: "#hits",
        templates: {
          item: (hit, { html, components }) => html`
            <div class="bg-white p-4 rounded-lg shadow-md mb-4 hover:shadow-lg transition-shadow">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-lg font-semibold mb-2">
                    ${components.Highlight({ hit, attribute: "class_code" })}
                  </p>
                  <p class="text-gray-600">
                    ${components.Highlight({ hit, attribute: "event_name" })}
                  </p>
                  <p class="text-sm text-gray-500 mt-2">
                    ${hit.name || ''}
                  </p>
                </div>
                <div class="text-right">
                  <p class="text-sm text-gray-500">${hit.date || ''}</p>
                  <p class="text-sm text-gray-500">${hit.result || ''}</p>
                </div>
              </div>
            </div>
          `,
          empty: (results) => html`
            <div class="text-center py-8 text-gray-500">
              <p>No results found for "${results.query}"</p>
              <p class="mt-2 text-sm">Try searching for a different classification or event name</p>
            </div>
          `,
        },
      }),
    ]);

    search.start();

    return () => {
      search.dispose();
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Search Classifications</h1>
      <div id="searchbox" className="mb-6"></div>
      <div id="hits" className="hide-content"></div>
      <div id="algolia-footer" className="hide-content text-center mt-4"></div>
    </div>
  );
}
