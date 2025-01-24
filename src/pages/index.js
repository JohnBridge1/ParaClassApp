import { useEffect } from "react";
import { liteClient as algoliasearch } from "algoliasearch/lite";
import instantsearch from "instantsearch.js";
import { searchBox, hits, configure, poweredBy } from "instantsearch.js/es/widgets";
import "instantsearch.css/themes/reset.css";

export default function Home() {
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
        placeholder: "Search Paralympic classifications...",
      }),
      configure({
        hitsPerPage: 5,
      }),
      poweredBy({
        container: "#algolia-footer",
      }),
      hits({
        container: "#hits",
        templates: {
          item: (hit, { html, components }) => html`
            <div class="hit-item">
              <p class="hit-title">
                ${components.Highlight({ hit, attribute: "class_code" })}
              </p>
              <p class="hit-description">
                ${components.Highlight({ hit, attribute: "event_name" })}
              </p>
            </div>
          `,
        },
      }),
    ]);

    search.start();

    return () => search.dispose();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white shadow-lg">
        <div className="container mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold">Paralympic Classifications</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Search Classifications</h2>
          <p className="text-lg text-gray-600 mb-8">
            Find detailed information about Paralympic sport classifications
          </p>
        </div>

        <div className="ais-InstantSearch max-w-2xl mx-auto">
          <div id="searchbox" className="mb-6"></div>
          <div id="hits" className="hide-content"></div>
          <div id="algolia-footer" className="hide-content mt-4 text-center"></div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Paralympic Classifications. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
