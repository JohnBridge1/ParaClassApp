// e.g., track-field, swimming, wheelchair-sports 

import { useRouter } from 'next/router';
import { useState } from 'react';

const sportData = {
  'track-field': {
    title: 'Track & Field Classifications',
    description: 'Understanding athletics classifications in Paralympic sports',
    categories: [
      {
        name: 'T11-13',
        title: 'Visual Impairment Classes',
        description: 'Athletes with varying degrees of visual impairment',
        details: [
          {
            class: 'T11',
            description: 'No light perception in either eye up to light perception',
            requirements: 'Must wear approved eyeshades and run with a guide'
          },
          {
            class: 'T12',
            description: 'Ability to recognize shapes up to visual acuity of 2/60',
            requirements: 'May choose to run with or without a guide'
          },
          {
            class: 'T13',
            description: 'Visual acuity ranging from 2/60 to 6/60',
            requirements: 'Compete without a guide'
          }
        ]
      },
      {
        name: 'T51-54',
        title: 'Wheelchair Racing Classes',
        description: 'Athletes competing in wheelchairs with different levels of trunk and arm function',
        details: [
          {
            class: 'T51',
            description: 'Limited shoulder, elbow, and wrist function',
            requirements: 'Typically due to C5-C6 spinal cord injury'
          },
          {
            class: 'T52',
            description: 'Good shoulder and elbow function, limited wrist function',
            requirements: 'Typically due to C7-C8 spinal cord injury'
          }
        ]
      }
    ]
  },
  'swimming': {
    title: 'Swimming Classifications',
    description: 'Understanding swimming classifications in Paralympic sports',
    categories: [
      {
        name: 'S1-S10',
        title: 'Physical Impairment Classes',
        description: 'Athletes with physical impairments',
        details: [
          {
            class: 'S1',
            description: 'Severe coordination problems or loss of muscle control',
            requirements: 'Most severe physical impairment level'
          },
          {
            class: 'S10',
            description: 'Minimal physical impairment',
            requirements: 'Least severe physical impairment level'
          }
        ]
      }
    ]
  }
};

export default function SportClassifications() {
  const router = useRouter();
  const { sport } = router.query;
  const [activeCategory, setActiveCategory] = useState(null);

  if (!sport || !sportData[sport]) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Sport not found</h1>
      </div>
    );
  }

  const data = sportData[sport];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{data.title}</h1>
      <p className="text-gray-700 mb-8">{data.description}</p>

      <div className="space-y-6">
        {data.categories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              onClick={() => setActiveCategory(activeCategory === index ? null : index)}
              className="w-full text-left p-6 focus:outline-none"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold">{category.name}</h2>
                  <p className="text-gray-600">{category.title}</p>
                </div>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    activeCategory === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>

            {activeCategory === index && (
              <div className="px-6 pb-6">
                <p className="text-gray-700 mb-4">{category.description}</p>
                <div className="space-y-4">
                  {category.details.map((detail, i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">{detail.class}</h3>
                      <p className="text-gray-700 mb-2">{detail.description}</p>
                      <p className="text-gray-600 text-sm">{detail.requirements}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 