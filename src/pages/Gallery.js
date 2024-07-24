import React from 'react';
import dummy from '../assets/sportsday.jpg';
import scienceExhibition from '../assets/scienceExhibition.jpeg';
import culturalFest from '../assets/culturalFest.jpeg';
import classroom from '../assets/classroom.jpg';
// import library from '../images/library.jpg';
import schooltour from '../assets/videos/schooltour.mp4';
import video from '../assets/videos/video.mp4';

const Gallery = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 myclass">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="shadow-lg">
          <img src={dummy} alt="Sports Day" className="w-full h-auto" />
          <p className="text-center mt-2">Students participating in various sports events.</p>
        </div>
        <div className="shadow-lg">
          <img src={scienceExhibition} alt="Science Exhibition" className="w-full h-auto" />
          <p className="text-center mt-2">Students presenting their science projects.</p>
        </div>
        <div className="shadow-lg">
          <img src={culturalFest} alt="Cultural Fest" className="w-full h-auto" />
          <p className="text-center mt-2">Students performing in the cultural fest.</p>
        </div>
        <div className="shadow-lg">
          <img src={classroom} alt="Classroom" className="w-full h-auto" />
          <p className="text-center mt-2">A glimpse of our interactive classrooms.</p>
        </div>
        <div className="shadow-lg">
          <img src={dummy} alt="Library" className="w-full h-auto" />
          <p className="text-center mt-2">Students reading and studying in the school library.</p>
        </div>
      </div>
      <h2 className="text-xl font-bold mt-8 mb-4">Videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="shadow-lg">
          <video controls className="w-full h-auto">
            <source src={schooltour} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-center mt-2">Virtual tour of Springdale Public School.</p>
        </div>
        <div className="shadow-lg">
          <video controls className="w-full h-auto">
            <source src={video} type="video/mp4" />
            
            Your browser does not support the video tag.
          </video>
          <p className="text-center mt-2">Highlights from the Annual Function 2023.</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
