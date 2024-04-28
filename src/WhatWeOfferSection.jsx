import React from 'react';

const WhatWeOfferSection = () => {
  return (
    <section className="what-we-offer-section bg-gradient-to-r from-blue-950 to-purple-900 text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card">
            <div className="card-body">
              <h3 className="text-xl font-semibold mb-4">Adventure Tours</h3>
              <p className="text-lg mb-4">Experience thrilling adventures in some of the most breathtaking destinations on Earth.</p>
              <a href="#" className="btn btn-white">Explore</a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="text-xl font-semibold mb-4">Cultural Experiences</h3>
              <p className="text-lg mb-4">Immerse yourself in the rich cultural heritage of diverse communities around the globe.</p>
              <a href="#" className="btn btn-white">Discover</a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="text-xl font-semibold mb-4">Luxury Retreats</h3>
              <p className="text-lg mb-4">Indulge in opulent accommodations and pampering services in exclusive luxury resorts.</p>
              <a href="#" className="btn btn-white">Indulge</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
