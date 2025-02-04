// import React, { useEffect } from "react";
// import { liteClient as algoliasearch } from "algoliasearch/lite";
// import instantsearch from "instantsearch.js";
// import { history } from 'instantsearch.js/es/lib/routers';
// import { simple } from 'instantsearch.js/es/lib/stateMappings';
// import {
//   searchBox,
//   hits,
//   configure,
//   poweredBy,
//   refinementList,
//   sortBy,
//   pagination,
// } from "instantsearch.js/es/widgets";
// import "instantsearch.css/themes/reset.css";

// export default function Search() {
//   useEffect(() => {
//     const searchClient = algoliasearch(
//       process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
//       process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY
//     );

//     const search = instantsearch({
//       indexName: "results_index",
//       searchClient,
//       routing: {
//         router: history(),
//         stateMapping: simple(),
//       },
//     });

//     search.addWidgets([
//       searchBox({
//         container: "#searchbox",
//         placeholder: "Search classifications (e.g., T11, T20, T54)...",
//         cssClasses: {
//           input: 'w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500',
//         }
//       }),

//       // Add refinement filters for categories
//       refinementList({
//         container: '#class-categories',
//         attribute: 'class_code',
//         searchable: true,
//         searchablePlaceholder: 'Search classifications...',
//         cssClasses: {
//           list: 'space-y-2',
//           label: 'flex items-center space-x-2',
//           checkbox: 'form-checkbox text-blue-600',
//           count: 'text-sm text-gray-500',
//         }
//       }),

//       // Add event name filter
//       refinementList({
//         container: '#event-names',
//         attribute: 'event_name',
//         searchable: true,
//         searchablePlaceholder: 'Search events...',
//         cssClasses: {
//           list: 'space-y-2',
//           label: 'flex items-center space-x-2',
//           checkbox: 'form-checkbox text-blue-600',
//           count: 'text-sm text-gray-500',
//         }
//       }),

//       // Add sorting options
//       sortBy({
//         container: '#sort-by',
//         items: [
//           { label: 'Default', value: 'results_index' },
//           { label: 'Class Code (A-Z)', value: 'results_index_class_code_asc' },
//           { label: 'Date (Newest)', value: 'results_index_date_desc' },
//           { label: 'Date (Oldest)', value: 'results_index_date_asc' },
//         ],
//         cssClasses: {
//           select: 'w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500',
//         }
//       }),

//       configure({
//         hitsPerPage: 20,
//         distinct: true,
//         distinctAttribute: "class_code",
//         searchableAttributes: [
//           'class_code',
//           'event_name',
//           'event_code'
//         ],
//       }),

//       hits({
//         container: "#hits",
//         templates: {
//           item: (hit, { html, components }) => html`
//             <div class="bg-white p-6 rounded-lg shadow-md mb-4 hover:shadow-lg transition-shadow">
//               <div class="flex flex-col md:flex-row md:justify-between">
//                 <div class="mb-4 md:mb-0">
//                   <p class="text-xl font-semibold mb-2 text-blue-600">
//                     ${components.Highlight({ hit, attribute: "class_code" })}
//                   </p>
//                   <p class="text-lg text-gray-700 mb-2">
//                     ${components.Highlight({ hit, attribute: "event_name" })}
//                   </p>
//                   <p class="text-sm text-gray-500">
//                     Event Code: ${hit.event_code || 'N/A'}
//                   </p>
//                 </div>
//                 <div class="text-right">
//                   <p class="text-sm text-gray-600 mb-1">Date: ${hit.date || 'N/A'}</p>
//                   <p class="text-sm text-gray-600 mb-1">Result: ${hit.result || 'N/A'}</p>
//                   <p class="text-sm text-gray-600">NPC: ${hit.npc || 'N/A'}</p>
//                 </div>
//               </div>
//             </div>
//           `,
//           empty: (results) => html`
//             <div class="text-center py-8 text-gray-500">
//               <p class="text-lg mb-2">No results found for "${results.query}"</p>
//               <p class="text-sm">Try adjusting your search terms or filters</p>
//             </div>
//           `