import React from 'react';
import dummy from '../assets/dummy.jpeg';
// import janeSmith from '../images/jane_smith.jpg';
// import emilyJohnson from '../images/emily_johnson.jpg';
// import michaelBrown from '../images/michael_brown.jpg';
// import sophiaDavis from '../images/sophia_davis.jpg';
// import davidWilson from '../images/david_wilson.jpg';

const facultyMembers = [
  {
    name: 'John Doe',
    position: 'Principal',
    qualification: 'M.Ed',
    experience: '20 years of experience in educational administration',
    image: dummy,
  },
  {
    name: 'Jane Smith',
    position: 'Vice Principal',
    qualification: 'M.Sc. in Physics',
    experience: '15 years of teaching experience',
    image: dummy,
  },
  {
    name: 'Emily Johnson',
    position: 'English Teacher',
    qualification: 'M.A. in English',
    experience: '10 years of teaching experience',
    image: dummy,
  },
  {
    name: 'Michael Brown',
    position: 'Mathematics Teacher',
    qualification: 'M.Sc. in Mathematics',
    experience: '8 years of teaching experience',
    image: dummy,
  },
  {
    name: 'Sophia Davis',
    position: 'Science Teacher',
    qualification: 'M.Sc. in Chemistry',
    experience: '12 years of teaching experience',
    image: dummy,
  },
  {
    name: 'David Wilson',
    position: 'Computer Science Teacher',
    qualification: 'B.Tech in Computer Science',
    experience: '5 years of teaching experience',
    image: dummy,
  },
];

const Faculty = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 myclass">Faculty</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {facultyMembers.map((member, index) => (
          <div key={index} className="shadow-lg p-4 rounded-lg">
            <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{member.name}</h2>
              <p className="text-gray-600">{member.position}</p>
              <p className="text-gray-600">{member.qualification}</p>
              <p className="text-gray-600">{member.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
