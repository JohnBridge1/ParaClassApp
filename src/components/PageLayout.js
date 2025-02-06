import React from 'react';

export default function PageLayout({ children, title, description }) {
  return (
    <div className="page-container pb-20"> {/* Added padding for navigation */}
      <div className="container mx-auto px-4 py-8">
        {title && <h1 className="text-3xl font-bold mb-2">{title}</h1>}
        {description && <p className="text-lg mb-6 text-gray-600">{description}</p>}
        {children}
      </div>
    </div>
  );
} 