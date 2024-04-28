

const AboutUsSection = () => {
  return (
    <section className="about-us-section bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">About Us</h2>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2 md:pr-8">
            <img className="rounded-lg mb-6" src="https://i.ibb.co/wJ81XCd/mountains-6544522-1280.jpg" alt="About Us" />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed mb-6 mt-6">Welcome to Wonder Tour, your ultimate destination for exploring the worlds wonders! Our mission is to provide you with unforgettable travel experiences that leave you in awe of the beauty and diversity of our planet.</p>
            <p className="text-lg leading-relaxed mb-6">At Wonder Tour, we are passionate about travel and dedicated to ensuring that every journey you embark on with us is safe, enjoyable, and enriching. Whether you are seeking adventure, relaxation, or cultural immersion, we have the perfect itinerary for you.</p>
            <p className="text-lg leading-relaxed mb-6">Join us on a journey of discovery and let Wonder Tour be your guide to the wonders of the world.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
