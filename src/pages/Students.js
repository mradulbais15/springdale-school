import React from 'react';

const studentLife = {
  extracurricularActivities: [
    'Music',
    'Dance',
    'Drama',
    'Art',
    'Sports',
    'Robotics',
    'Debate Club',
    'Science Club'
  ],
  clubsAndSocieties: [
    'Literary Society',
    'Environmental Club',
    'Astronomy Club',
    'Coding Club'
  ],
  achievements: [
    {
      name: 'John Smith',
      award: 'National Level Math Olympiad Winner'
    },
    {
      name: 'Sarah Lee',
      award: 'Gold Medalist in State Swimming Championship'
    },
    {
      name: 'Tech Innovators Club',
      award: 'Winners of Inter-School Robotics Competition'
    }
  ],
  studentCouncil: {
    president: 'Amy Parker (Grade 12)',
    vicePresident: 'Rajiv Mehta (Grade 11)',
    secretary: 'Lisa Wong (Grade 10)'
  }
};

const Students = () => {
  return (

    <div className="p-8 myclass">
        
      <h2 className="text-2xl mb-4">Student Life</h2>
      
      <section className="mb-8">
        <h3 className="text-xl mb-2">Extracurricular Activities</h3>
        <ul className="list-disc list-inside pl-5">
          {studentLife.extracurricularActivities.map((activity, index) => (
            <li key={index} className="mb-1">{activity}</li>
          ))}
        </ul>
      </section>
      
      <section className="mb-8">
        <h3 className="text-xl mb-2">Clubs and Societies</h3>
        <ul className="list-disc list-inside pl-5">
          {studentLife.clubsAndSocieties.map((club, index) => (
            <li key={index} className="mb-1">{club}</li>
          ))}
        </ul>
      </section>
      
      <section className="mb-8">
        <h3 className="text-xl mb-2">Achievements and Accolades</h3>
        <ul className="list-disc list-inside pl-5">
          {studentLife.achievements.map((achievement, index) => (
            <li key={index} className="mb-1">
              <strong>{achievement.name}</strong>: {achievement.award}
            </li>
          ))}
        </ul>
      </section>
      
      <section>
        <h3 className="text-xl mb-2">Student Council</h3>
        <ul className="list-disc list-inside pl-5">
          <li><strong>President:</strong> {studentLife.studentCouncil.president}</li>
          <li><strong>Vice President:</strong> {studentLife.studentCouncil.vicePresident}</li>
          <li><strong>Secretary:</strong> {studentLife.studentCouncil.secretary}</li>
        </ul>
      </section>
    </div>
  );
};

export default Students;
