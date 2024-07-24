import React from 'react';

const admissionData = {
  process: "Admission forms are available for download. Submit the completed form along with required documents at the school office.",
  criteria: "Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.",
  importantDates: [
    { event: 'Admission Form Availability', date: 'March 1st' },
    { event: 'Last Date for Submission', date: 'March 31st' },
    { event: 'Entrance Test', date: 'April 15th' },
    { event: 'Announcement of Results', date: 'April 30th' }
  ],
  forms: [
    { name: 'General Admission Form', link: '/assets/forms/general_admission_form.pdf' },
    { name: 'Special Admission Form', link: '/assets/forms/special_admission_form.pdf' }
  ]
};

const Admissions = () => {
  return (
    <div className="p-8 myclass">
      <h2 className="text-2xl mb-4">Admissions</h2>

      <section className="mb-8">
        <h3 className="text-xl mb-2">Admission Process</h3>
        <p className="text-gray-700">{admissionData.process}</p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl mb-2">Admission Criteria</h3>
        <p className="text-gray-700">{admissionData.criteria}</p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl mb-2">Important Dates</h3>
        <ul className="list-disc list-inside pl-5">
          {admissionData.importantDates.map((date, index) => (
            <li key={index} className="mb-1">
              <strong>{date.event}:</strong> {date.date}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-xl mb-2">Downloadable Admission Forms</h3>
        <ul className="list-disc list-inside pl-5">
          {admissionData.forms.map((form, index) => (
            <li key={index} className="mb-1">
              <a href={form.link} download className="text-blue-500 underline">
                {form.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Admissions;
