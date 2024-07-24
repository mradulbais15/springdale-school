import React from 'react';

const aboutUsData = {
  history: "Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.",
  vision: "To create a learning environment that fosters academic excellence, critical thinking, and ethical values.",
  mission: "To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.",
  principalMessage: "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.",
  infrastructure: [
    "State-of-the-art science and computer labs",
    "Spacious and well-equipped classrooms",
    "Library with a vast collection of books and digital resources",
    "Sports facilities including a playground, gymnasium, and swimming pool"
  ]
};

const AboutUs = () => {
  return (
    <div className="p-8 myclass">
      <h2 className="text-2xl mb-4">About Us</h2>

      <section className="mb-8">
        <h3 className="text-xl mb-2">History</h3>
        <p className="text-gray-700">{aboutUsData.history}</p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl mb-2">Vision</h3>
        <p className="text-gray-700">{aboutUsData.vision}</p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl mb-2">Mission</h3>
        <p className="text-gray-700">{aboutUsData.mission}</p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl mb-2">Message from the Principal</h3>
        <p className="text-gray-700">{aboutUsData.principalMessage}</p>
      </section>

      <section>
        <h3 className="text-xl mb-2">Infrastructure and Facilities</h3>
        <ul className="list-disc list-inside pl-5">
          {aboutUsData.infrastructure.map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
