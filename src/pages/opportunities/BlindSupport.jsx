 import React from "react";

const blindSupportData = [
  {
    id: 1,
    subject: "Political Science 101",
    examType: "Final",
    dateTime: "July 15, 2025 | 10:00 AM - 1:00 PM",
    department: "Political Science",
    year: "2nd Year",
    duration: "3 hours",
  },
  {
    id: 2,
    subject: "Mathematics (Linear Algebra)",
    examType: "Midterm",
    dateTime: "July 20, 2025 | 2:00 PM - 4:00 PM",
    department: "Mathematics",
    year: "1st Year",
    duration: "2 hours",
  },
  {
    id: 3,
    subject: "English Literature",
    examType: "Final",
    dateTime: "July 22, 2025 | 11:00 AM - 1:00 PM",
    department: "English",
    year: "3rd Year",
    duration: "2 hours",
  },
  {
    id: 4,
    subject: "Development Studies",
    examType: "Supplementary",
    dateTime: "July 24, 2025 | 9:00 AM - 12:00 PM",
    department: "Development Studies",
    year: "4th Year",
    duration: "3 hours",
  },
];

const BlindSupport = () => {
  return (
    <div className="bg-[#f9f9f6] min-h-screen px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-5">
        Blind Student Support Opportunities
      </h1>

      <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg mb-10">
        Volunteer to assist blind or visually impaired students during exams. 
        Your small act of kindness can make a big difference in their academic journey at Jahangirnagar University.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blindSupportData.map((support) => (
          <div
            key={support.id}
            className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              {support.subject}
            </h2>
            <p><strong>Exam Type:</strong> {support.examType}</p>
            <p><strong>Date & Time:</strong> {support.dateTime}</p>
            <p><strong>Department:</strong> {support.department}</p>
            <p><strong>Year:</strong> {support.year}</p>
            <p><strong>Assistance Duration:</strong> {support.duration}</p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
              Assist Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlindSupport;
