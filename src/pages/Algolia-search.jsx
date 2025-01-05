import React from "react";
import algoliasearch from "algoliasearch/lite";

import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
} from "react-instantsearch-hooks-web";

// Initialize client with a Search-Only API key (safe for client-side)
const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY
);

// A simple component to render each search result
function Hit({ hit }) {
  return (
    <article style={{ marginBottom: "1rem" }}>
      <h2>
        <Highlight attribute="name" hit={hit} />
      </h2>
      <p>
        <Highlight attribute="description" hit={hit} />
      </p>
      {hit.imageUrl && (
        <img
          src={hit.imageUrl}
          alt={hit.name}
          style={{ maxWidth: "300px", marginTop: "0.5rem" }}
        />
      )}
    </article>
  );
}

export default function SearchPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Search Paralympic Classifications</h1>
      <InstantSearch
        indexName="paralympic_classifications"
        searchClient={searchClient}
      >
        <SearchBox placeholder="Type to search..." />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </div>
  );
}
