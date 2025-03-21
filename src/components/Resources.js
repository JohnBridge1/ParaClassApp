// import React from 'react';
// import { educationalResources } from '../data/resourcesData';

// export default function Resources() {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <h2 className="text-3xl font-bold text-gray-900 mb-8">
//         Educational Resources
//       </h2>
      
//       {/* Official Links */}
//       <div className="mb-8">
//         <h3 className="text-2xl font-semibold mb-4">Official Resources</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {educationalResources.officialLinks.map((link, index) => (
//             <a
//               key={index}
//               href={link.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-4 border rounded-lg hover:bg-gray-50"
//             >
//               <h4 className="font-medium">{link.title}</h4>
//               <p className="text-gray-600">{link.description}</p>
//             </a>
//           ))}
//         </div>
//       </div>

//       {/* Articles and Videos */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <h3 className="text-2xl font-semibold mb-4">Articles</h3>
//           <div className="space-y-4">
//             {educationalResources.articles.map((article, index) => (
//               <div key={index} className="p-4 border rounded-lg">
//                 <h4 className="font-medium">{article.title}</h4>
//                 <p className="text-gray-600">Reading time: {article.readingTime}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div>
//           <h3 className="text-2xl font-semibold mb-4">Videos</h3>
//           <div className="space-y-4">
//             {educationalResources.videos.map((video, index) => (
//               <div key={index} className="p-4 border rounded-lg">
//                 <h4 className="font-medium">{video.title}</h4>
//                 <p className="text-gray-600">Duration: {video.duration}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// } 