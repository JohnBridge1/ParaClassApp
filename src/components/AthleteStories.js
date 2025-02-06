import React from 'react';
import { athleteStories } from '../data/athleteStories';

export default function AthleteStories() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Paralympic Athlete Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {athleteStories.featured.map((athlete, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={athlete.image}
              alt={athlete.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{athlete.name}</h3>
              <p className="text-gray-600 mb-2">Classification: {athlete.classification}</p>
              <div className="mb-4">
                <h4 className="font-medium mb-1">Achievements:</h4>
                <ul className="list-disc list-inside">
                  {athlete.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-600">{achievement}</li>
                  ))}
                </ul>
              </div>
              <p className="text-gray-700">{athlete.story}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 