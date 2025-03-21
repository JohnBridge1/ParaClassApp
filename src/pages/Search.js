import React from "react";
import AlgoliaSearch from "../components/AlgoliaSearch";

export default function Search() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Search Classifications</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Classification</h3>
              <div id="search-page-class-categories"></div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Event</h3>
              <div id="search-page-event-names"></div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Sort by</h3>
              <div id="search-page-sort-by"></div>
            </div>
          </div>
          
          <div id="search-page-powered-by"></div>
        </div>
        
        <div className="lg:col-span-3">
          <div id="search-page-searchbox" className="mb-6"></div>
          <div id="search-page-hits"></div>
          <div id="search-page-pagination" className="mt-8 flex justify-center"></div>
        </div>
      </div>

      {/* Initialize the search component */}
      <AlgoliaSearch 
        containerId="search-page" 
        options={{
          showFilters: true,
          showSorting: true,
          showPagination: true,
          indexName: "results_index",
          hitsPerPage: 20
        }} 
      />
    </div>
  );
}