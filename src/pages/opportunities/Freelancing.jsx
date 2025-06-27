import React from "react";

const freelanceJobs = [
  {
    id: 1,
    title: "Content Writer",
    client: "Local Blog Site",
    payment: "৳1,200/article",
    time: "Flexible – Deliver in 48hrs",
    requirements: "Excellent writing skills, SEO basics",
    provider: "Tanvir Hossain",
    upworkId: "upwork.com/freelancer/tanvirwrites",
    hireRate: "৳500/hr",
    requiredConnects: 10,
  },
  {
    id: 2,
    title: "Canva Design Creator",
    client: "JU Event Management",
    payment: "৳500/design",
    time: "2-3 hours/design",
    requirements: "Experience in Canva or Figma",
    provider: "Raisa Ahmed",
    upworkId: "upwork.com/freelancer/raisaDesigns",
    hireRate: "৳400/hr",
    requiredConnects: 20,
  },
  {
    id: 3,
    title: "Social Media Manager",
    client: "JU Alumni Page",
    payment: "৳8,000/month",
    time: "1-2 hrs daily",
    requirements: "Facebook, Instagram experience",
    provider: "Hasan Mahmud",
    upworkId: "upwork.com/freelancer/hasansocial",
    hireRate: "৳650/hr",
    requiredConnects: 10,
  },
  {
    id: 4,
    title: "Online Tutor (Math)",
    client: "Grade 9 student",
    payment: "৳2,000/month",
    time: "3 days/week, 1 hr/day",
    requirements: "Clear math concepts, Zoom knowledge",
    provider: "Shanta Roy",
    upworkId: "upwork.com/freelancer/shantatutor",
    hireRate: "৳300/hr",
     requiredConnects: 15,
  },
  {
    id: 5,
    title: "Video Editor",
    client: "JU Science Club",
    payment: "৳1,500/video",
    time: "2 videos/week",
    requirements: "CapCut or Adobe Premiere basics",
    provider: "Rony Akter",
    upworkId: "upwork.com/freelancer/ronyedits",
    hireRate: "৳700/hr",
     requiredConnects: 20,
  },
  {
    id: 6,
    title: "Survey Form Designer",
    client: "Sociology Dept. Project",
    payment: "৳1,000/project",
    time: "One-time",
    requirements: "Google Forms & MS Word skills",
    provider: "Nabila Sumi",
    upworkId: "upwork.com/freelancer/nabilasurveys",
    hireRate: "৳500/hr",
     requiredConnects: 10,
  },
];

const Freelancing = () => {
  return (
    <div className="bg-[#f9f9f6] min-h-screen px-4 py-10">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-center text-green-800 mb-5">
        Freelancing Opportunities for JU Students
      </h1>

      {/* Description */}
      <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg mb-10">
        Use your free time to earn money and gain experience! Browse the top freelancing offers from trusted JU providers and alumni networks.
      </p>

      {/* Job Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {freelanceJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <h2 className="text-xl font-semibold text-green-700 mb-2">{job.title}</h2>
            <p><strong>Client:</strong> {job.client}</p>
            <p><strong>Payment:</strong> {job.payment}</p>
            <p><strong>Time:</strong> {job.time}</p>
            <p><strong>Requirements:</strong> {job.requirements}</p>
            <div className="mt-3">
              <p><strong>Provider:</strong> {job.provider}</p>
              <p>
                <strong>Upwork ID:</strong>{" "}
                <a
                  href={`https://${job.upworkId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {job.upworkId}
                </a>
              </p>
              <p><strong>Hire Rate:</strong> {job.hireRate}</p>
              <p><strong>Required Count:</strong> {job.requiredCount}</p>
            </div>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Freelancing;
