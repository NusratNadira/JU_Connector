 import React from "react";

const tuitionData = [
  {
    id: 1,
    location: "Savar, Dhaka",
    class: "Class 8",
    salary: "4,000 BDT/month",
    days: "3 days/week",
    department: "Science",
  },
  {
    id: 2,
    location: "Nobinogor, Dhaka",
    class: "Class 10",
    salary: "6,000 BDT/month",
    days: "2 days/week",
    department: "Math",
  },
  {
    id: 3,
    location: "Ashulia, Dhaka",
    class: "Class 6",
    salary: "3,500 BDT/month",
    days: "3 days/week",
    department: "English",
  },
  {
    id: 4,
    location: "JU Campus",
    class: "HSC 2nd Year",
    salary: "7,000 BDT/month",
    days: "4 days/week",
    department: "Biology",
  },
   {
    id: 4,
    location: "JU Campus",
    class: "Admission Student",
    salary: "7,000 BDT/month",
    days: "4 days/week",
    department: "Biology",
  },
   {
    id: 4,
    location: "JU Campus",
    class: "Class 9",
    salary: "7,000 BDT/month",
    days: "4 days/week",
    department: "Biology",
  },
];

const TuitionOffers = () => {
  return (
    <div className="min-h-screen bg-[#f8f9f4] px-4 md:px-8 py-10">
      <h1 className="text-center text-4xl font-bold text-green-700 mb-10">
        Tuition Offers
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tuitionData.map((offer) => (
          <div
            key={offer.id}
            className="hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out bg-white rounded-lg p-6 cursor-pointer"
          >
            <h2 className="text-2xl font-semibold text-green-800 mb-3">
              {offer.class} Tuition
            </h2>
            <ul className="text-gray-700 space-y-1 text-base">
              <li>
                <strong>📍 Location:</strong> {offer.location}
              </li>
              <li>
                <strong>💰 Salary:</strong> {offer.salary}
              </li>
              <li>
                <strong>🗓️ Days/Week:</strong> {offer.days}
              </li>
              <li>
                <strong>🎓 Dept. Needed:</strong> {offer.department}
              </li>
            </ul>
            <button className="mt-5 w-full py-2 bg-[#006d5b] hover:bg-[#005547] text-white font-medium rounded-md transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TuitionOffers;
