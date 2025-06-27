 import React from "react";

const projectData = [
  {
    id: 1,
    image: "https://via.placeholder.com/400x200?text=Web+Dev+Project",
    title: "Web Development Assignment",
    deadline: "July 30, 2025",
    amount: "৳1200",
    department: "Computer Science & Engineering",
    year: "3rd Year",
    location: "Jahangirnagar University",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/400x200?text=Marketing+Survey",
    title: "Marketing Survey Project",
    deadline: "August 5, 2025",
    amount: "৳1000",
    department: "Marketing",
    year: "2nd Year",
    location: "JU Business Faculty",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/400x200?text=Research+Analysis",
    title: "Social Research Report",
    deadline: "July 28, 2025",
    amount: "৳1500",
    department: "Sociology",
    year: "4th Year",
    location: "Arts Building, JU",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/400x200?text=Presentation+Help",
    title: "Presentation Design Assistance",
    deadline: "August 2, 2025",
    amount: "৳800",
    department: "Environmental Science",
    year: "1st Year",
    location: "New Science Building",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/400x200?text=Presentation+Help",
    title: "Presentation Design Assistance",
    deadline: "August 2, 2025",
    amount: "৳800",
    department: "Environmental Science",
    year: "1st Year",
    location: "New Science Building",
  },
  {
    id: 6,
    image: "https://via.placeholder.com/400x200?text=Presentation+Help",
    title: "Presentation Design Assistance",
    deadline: "August 2, 2025",
    amount: "৳800",
    department: "Environmental Science",
    year: "1st Year",
    location: "New Science Building",
  },
];

const ProjectHelp = () => {
  return (
    <div className="bg-[#f9f9f6] min-h-screen px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-5">
        Project & Assignment Assistant
      </h1>

      <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg mb-10">
        Help your fellow JU students complete their assignments, research, or design projects.
        Contribute with your skills and earn while collaborating academically.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-green-700 mb-2">{project.title}</h2>
              <p><strong>Deadline:</strong> {project.deadline}</p>
              <p><strong>Payment:</strong> {project.amount}</p>
              <p><strong>Department:</strong> {project.department}</p>
              <p><strong>Year:</strong> {project.year}</p>
              <p><strong>Location:</strong> {project.location}</p>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                Assist Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectHelp;
