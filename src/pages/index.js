import { useEffect, useState } from 'react';
import { liteClient as algoliasearch } from "algoliasearch/lite";
import instantsearch from "instantsearch.js";
import { searchBox, hits, configure } from "instantsearch.js/es/widgets";
import "instantsearch.css/themes/reset.css";
import supabase from "../config/supabaseClient";
import Link from 'next/link';

export default function Home() {
  const [isSearching, setIsSearching] = useState(false);
  const [hasQuery, setHasQuery] = useState(false);

  useEffect(() => {
    const searchClient = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
      process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY
    );

    const search = instantsearch({
      indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME,
      searchClient,
      insights: true,
    });

    search.addWidgets([
      searchBox({
        container: "#searchbox",
        placeholder: "Search classifications (e.g., T54, F40, S8, etc.)",
        cssClasses: {
          input: 'w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500',
        },
      }),
      hits({
        container: "#hits",
        templates: {
          item: (hit, { html, components }) => html`
            <Link href="/classifications/${hit.class_code.toLowerCase()}" class="hit-item block">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="hit-title text-xl font-bold">
                    ${components.Highlight({ hit, attribute: 'class_code' })}
                  </h3>
                  <p class="hit-description text-gray-600">
                    ${components.Highlight({ hit, attribute: 'sport_name' })}
                  </p>
                  <p class="text-sm text-gray-500 mt-2">
                    ${hit.brief_description || 'Click to learn more about this classification'}
                  </p>
                </div>
                <span class="text-blue-600 text-sm">Learn More →</span>
              </div>
            </Link>
          `,
          empty: (results) => `
            <div class="p-4 text-center">
              <p class="text-gray-600">No classifications found for "${results.query}"</p>
              <p class="text-sm text-gray-500 mt-2">Try searching for T54, F40, S8, etc.</p>
            </div>
          `,
        },
      }),
      configure({
        hitsPerPage: 4,
        distinct: true,
      }),
    ]);

    // Simple middleware to deduplicate results
    search.use(() => ({
      render({ results }) {
        if (results && results.hits) {
          const uniqueHits = [];
          const seen = new Set();
          
          for (const hit of results.hits) {
            if (!hit.class_code) {
              uniqueHits.push(hit);
              continue;
            }
            
            const code = hit.class_code.toUpperCase().replace(/\s+/g, '');
            if (!seen.has(code)) {
              seen.add(code);
              uniqueHits.push(hit);
            }
          }
          
          results.hits = uniqueHits;
          
          // Sort alphabetically by class code
          results.hits.sort((a, b) => {
            if (!a.class_code) return 1;
            if (!b.class_code) return -1;
            return a.class_code.localeCompare(b.class_code);
          });
        }
      },
      subscribe() { return () => {}; },
      unsubscribe() {},
      onStateChange() {}
    }));

    search.on('render', () => {
      const query = search.helper?.state.query || '';
      setHasQuery(query.length > 0);
      setIsSearching(false);
    });

    search.on('search', () => {
      setIsSearching(true);
    });

    search.start();

    return () => search.dispose();
  }, []);

  return (
    <div className="page home pb-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Paralympic Classifications Guide</h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Understand Paralympic classifications and the athletes who compete in them. 
          Search for a classification to learn about the eligibility criteria, 
          medical conditions, and sport-specific requirements.
        </p>

        <div className="mb-8">
          <div className="relative">
            <div id="searchbox" className="mb-4"></div>
            {isSearching && (
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="animate-spin h-5 w-5 border-2 border-blue-600 rounded-full border-t-transparent"></div>
              </div>
            )}
          </div>
          <div id="hits" className={`mt-4 ${!hasQuery ? 'hidden' : ''}`}></div>
        </div>

        {!hasQuery && (
          <div className="text-center py-8">
            <p className="text-lg text-gray-600 mb-4">
              Search for a Paralympic classification to learn more
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Examples:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="font-semibold">T54</p>
                <p className="text-sm">Wheelchair Racing</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="font-semibold">S8</p>
                <p className="text-sm">Swimming</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="font-semibold">F40</p>
                <p className="text-sm">Field Events</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="font-semibold">BC3</p>
                <p className="text-sm">Boccia</p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Link href="/athletes" 
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">Athletes</h2>
            <p className="text-gray-600">Discover inspiring Paralympic athlete stories and achievements.</p>
          </Link>

          <Link href="/classifications"
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">Classifications</h2>
            <p className="text-gray-600">Learn about different Paralympic sport classifications.</p>
          </Link>

          <Link href="/resources"
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">Resources</h2>
            <p className="text-gray-600">Access educational materials and guides.</p>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              New to Paralympic classifications? Start here:
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4">
              <li>Browse through different sport classifications</li>
              <li>Read about Paralympic athletes</li>
              <li>Test your knowledge with our quiz</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
