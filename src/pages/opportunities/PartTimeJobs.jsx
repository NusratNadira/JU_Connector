 import React from "react";

const partTimeJobs = [
  {
    id: 1,
    image: "/src/assets/lib.png",
    jobPost: "Library Assistant",
    company: "JU Central Library",
    salary: "৳6,000/month",
    dutyHour: "4 hrs/day",
    reference: "Md. Rafsan – Alumni (Library Dept.)",
    requirements: "2nd or 3rd year student, basic computer skills",
  },
  {
    id: 2,
    image: "/src/assets/cafe.png",
    jobPost: "Cafe Helper",
    company: "Campus Cafe - New Market",
    salary: "৳5,000/month",
    dutyHour: "5 hrs/day",
    reference: "Tanisha Rahman – Alumni (Business Admin)",
    requirements: "Punctual, team player, food handling experience",
  },
  {
    id: 3,
    image: "/src/assets/gdesigner.png",
    jobPost: "Graphic Designer (Part-Time)",
    company: "JU Design Club",
    salary: "৳8,000/month",
    dutyHour: "Remote – 3 hrs/day",
    reference: "Farhan Azad – Club President",
    requirements: "Experience in Canva or Adobe Illustrator",
  },
  {
    id: 4,
    image: "/src/assets/webdev.png",
    jobPost: "Junior Web Developer",
    company: "JU Computer Club",
    salary: "৳10,000/month",
    dutyHour: "Remote – 2 hrs/day",
    reference: "Junaid Alam – Alumni (CSE Dept.)",
    requirements: "HTML, CSS, JavaScript basic knowledge",
  },
  {
    id: 5,
    image: "/src/assets/deliveryboy.png",
    jobPost: "Delivery Man",
    company: "লাগবে সার্ভিস",
    salary: "৳7,000/month",
    dutyHour: "Evening – 3hrs/day",
    reference: "Abdullah Al Hossain – Alumni (IIT)",
    requirements: "Strong Communication Skill",
  },
  {
    id: 6,
    image: "/src/assets/photographer.png",
    jobPost: "Event Photographer Assistant",
    company: "JU Photography Club",
    salary: "৳6,500/month",
    dutyHour: "On-demand (weekends)",
    reference: "Tanvir Hasan – Alumni (Fine Arts)",
    requirements: "Basic photography skills, punctual",
  },
];

const PartTimeJobs = () => {
  return (
    <div className="bg-[#f9f9f6] min-h-screen px-4 py-10">
      {/* Heading */}
      <h1 className="text-3xl text-center font-bold text-green-800 mb-4">Part-Time Job Offers for JU Students</h1>

      {/* Description */}
      <p className="text-center max-w-3xl mx-auto text-gray-600 mb-10 text-lg">
        Explore part-time job opportunities inside and around Jahangirnagar University campus. Gain valuable experience, earn extra income, and connect with alumni and community partners offering flexible roles for students.
      </p>

      {/* Job Boxes */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {partTimeJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition duration-300 transform hover:-translate-y-2"
          >
            <img src={job.image} alt={job.jobPost} className="w-full h-52 object-cover" />
            <div className="p-5 space-y-2">
              <h2 className="text-xl font-semibold text-green-700">{job.jobPost}</h2>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Salary:</strong> {job.salary}</p>
              <p><strong>Duty Hour:</strong> {job.dutyHour}</p>
              <p><strong>Reference:</strong> {job.reference}</p>
              <p><strong>Requirements:</strong> {job.requirements}</p>
              <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartTimeJobs;
