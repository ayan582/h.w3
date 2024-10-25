import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Portfolio</h2>
        <p className="text-gray-600">
          Here are some of the amazing projects we’ve worked on.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-4 shadow-lg">Project 1</div>
          <div className="bg-white p-4 shadow-lg">Project 2</div>
          <div className="bg-white p-4 shadow-lg">Project 3</div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
