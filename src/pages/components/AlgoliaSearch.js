// import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
// import algoliasearch from "algoliasearch";

// const client = algoliasearch(
//   process.env.ALGOLIA_APP_ID,
//   process.env.ALGOLIA_ADMIN_API_KEY
// );

// const Hit = ({ hit }) => (
//   <div>
//     <h2>{hit.title}</h2>
//     <p>{hit.description}</p>
//   </div>
// );

// const AlgoliaSearch = () => {
//   return (
//     <InstantSearch indexName="results_index" client={client}>
//       <SearchBox />
//       <Hits hitComponent={Hit} />
//     </InstantSearch>
//   );
// };

// export default AlgoliaSearch;

// import { algoliasearch } from "algoliasearch";

// const client = algoliasearch(
//   process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
//   process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY
// );

// // Fetch and index objects in Algolia
// const processRecords = async () => {
//   const datasetRequest = await fetch("");
//   const results = await datasetRequest.json();
//   return await client.saveObjects({
//     indexName: "results_index",
//     objects: results,
//   });
// };

// processRecords()
//   .then(() => console.log("Successfully indexed objects!"))
//   .catch((err) => console.error(err));

// File: helloAlgolia.mjs

// File: helloAlgolia.mjs
