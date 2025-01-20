import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch";

const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_ADMIN_API_KEY
);

const Hit = ({ hit }) => (
  <div>
    <h2>{hit.title}</h2>
    <p>{hit.description}</p>
  </div>
);

const AlgoliaSearch = () => {
  return (
    <InstantSearch indexName="results_index" client={client}>
      <SearchBox />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  );
};

export default AlgoliaSearch;
