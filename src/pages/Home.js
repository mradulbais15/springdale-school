import React from 'react';
import { Carousel } from 'react-responsive-carousel'; // Assuming you're using this library for the carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import logo from '../assets/logo.png';
// import culture from '../assets/cultural-banner.jpg'; // Adjust the path if needed
// import science from '../assets/science.jpg';

const Home = () => {
  const highlights = [
    "Annual Sports Day - Celebrating Excellence in Sports",
    // <img src={culture} alt="School Logo" className="mx-auto mb-4 w-32" />,
    // <img src={science} alt="School Logo" className="mx-auto mb-4 w-32" />,
    "Science Exhibition - Showcasing Student Innovations",
    "Cultural Fest - Embracing Diversity and Creativity"
  ];

  return (
    <div className="p-4 myclass">
      <header className="text-center mb-8">
        <img src={logo} alt="School Logo" className="mx-auto mb-4 w-32" />
        <h1 className="text-3xl font-bold mb-2">Springdale Public School</h1>
        <p className="text-lg">Welcome to Springdale Public School, where we nurture young minds for a brighter future.</p>
      </header>
      
      <section className="mb-8">
        <Carousel
          infiniteLoop
          autoPlay
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          transitionTime={1000}
          interval={5000}
        >
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-gray-200 p-12  mycruseritems">
              <h2 className="text-xl font-semibold mycruserfont">{highlight}</h2>
            </div>
          ))}
        </Carousel>
      </section>
      
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/about" className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700">About Us</a>
          <a href="/academics" className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700">Academics</a>
          <a href="/admissions" className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700">Admissions</a>
          <a href="/faculty" className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700">Faculty</a>
          <a href="/students" className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700">Students</a>
          <a href="/gallery" className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700">Gallery</a>
          <a href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700">Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
