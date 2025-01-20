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

        if (!uiState["results_index"]?.query) {
          hitsContainer.classList.add("hide-content");
          footerContainer?.classList.add("hide-content");
          return;
        }

        hitsContainer.classList.remove("hide-content");
        footerContainer?.classList.remove("hide-content");
      },
    });

    search.addWidgets([
      searchBox({
        container: "#searchbox",
        placeholder: "Search your data here",
      }),
      configure({
        hitsPerPage: 3,
      }),
      poweredBy({
        container: "#algolia-footer",
      }),
      hits({
        container: "#hits",
        templates: {
          item: (hit, { html, components }) => html`
            <div>
              <p class="primary-text">
                ${components.Highlight({ hit, attribute: "class_code" })}
              </p>
              <p class="secondary-text">
                ${components.Highlight({ hit, attribute: "event_name" })}
              </p>
            </div>
          `,
        },
      }),
    ]);

    search.start();

    return () => {
      search.dispose(); // Clean up the search instance to avoid duplicate renders
    };
  }, []);

  return (
    <div className="ais-InstantSearch">
      <div id="searchbox"></div>
      <div id="hits" className="hide-content"></div>
      <div id="algolia-footer" className="hide-content"></div>
    </div>
  );
}
