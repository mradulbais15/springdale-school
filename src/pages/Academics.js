import React from 'react';

const academicsData = {
  curriculum: {
    primary: [
      'English',
      'Mathematics',
      'Science',
      'Social Studies',
      'Art',
      'Physical Education'
    ],
    secondary: [
      'English',
      'Mathematics',
      'Science (Physics, Chemistry, Biology)',
      'Social Studies',
      'Computer Science',
      'Physical Education',
      'Art'
    ],
    seniorSecondary: {
      scienceStream: [
        'Physics',
        'Chemistry',
        'Biology',
        'Mathematics',
        'Computer Science',
        'English'
      ],
      commerceStream: [
        'Accountancy',
        'Business Studies',
        'Economics',
        'Mathematics',
        'English'
      ]
    }
  },
  teachingMethodologies: "We use a blend of traditional and modern teaching techniques to cater to different learning styles.",
  educationalResources: "Digital classrooms, interactive learning modules, and access to online educational platforms."
};

const Academics = () => {
  return (
    <div className="p-8 myclass">
      <h2 className="text-2xl mb-4">Academics</h2>

      <section className="mb-8">
        <h3 className="text-xl mb-2">Curriculum</h3>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Primary (Grades 1-5)</h4>
          <ul className="list-disc list-inside pl-5">
            {academicsData.curriculum.primary.map((subject, index) => (
              <li key={index} className="text-gray-700">{subject}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Secondary (Grades 6-10)</h4>
          <ul className="list-disc list-inside pl-5">
            {academicsData.curriculum.secondary.map((subject, index) => (
              <li key={index} className="text-gray-700">{subject}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Senior Secondary (Grades 11-12)</h4>
          <div className="mb-2">
            <h5 className="font-semibold">Science Stream</h5>
            <ul className="list-disc list-inside pl-5">
              {academicsData.curriculum.seniorSecondary.scienceStream.map((subject, index) => (
                <li key={index} className="text-gray-700">{subject}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Commerce Stream</h5>
            <ul className="list-disc list-inside pl-5">
              {academicsData.curriculum.seniorSecondary.commerceStream.map((subject, index) => (
                <li key={index} className="text-gray-700">{subject}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-xl mb-2">Teaching Methodologies</h3>
        <p className="text-gray-700">{academicsData.teachingMethodologies}</p>
      </section>

      <section>
        <h3 className="text-xl mb-2">Educational Resources</h3>
        <p className="text-gray-700">{academicsData.educationalResources}</p>
      </section>
    </div>
  );
};

export default Academics;
