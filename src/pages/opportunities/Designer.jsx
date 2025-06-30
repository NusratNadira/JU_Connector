 import React from "react";

const designers = [
  {
    id: 1,
    name: "Ayesha Rahman",
    skill: "Mehedi Artist",
    image: "/src/assets/designer.png",
    rate: "৳250/hour",
    location: "Jahangirnagar University",
    year: "3rd Year",
    department: "Botany",
    hall:" Fazilatunnesa Hall",
    fb: "facebook.com/ayesha.rahman",
  },
  {
    id: 2,
    name: "Sumaiya Haque",
    skill: "Shari Draping & Makeup",
    image: "/src/assets/shar.png",
    rate: "৳300/hour",
    location: "JU Campus",
    year: "2nd Year",
    department: "Marketing",
    hall: "Jahanara Imam Hall",
    fb: "facebook.com/sumaiya.makeup",
  },
  {
    id: 3,
    name: "Tania Akter",
    skill: "Event Decoration",
    image: "/src/assets/designer.png",
    rate: "৳500/hour",
    location: "JU Cultural Centre",
    year: "4th Year",
    department: "Fine Arts",
    hall: "Pritilata Hall",
    fb: "facebook.com/tania.decor",
  },
];

const Designer = () => {
  return (
    <div className="bg-[#f9f9f6] min-h-screen px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
        Event Stylist
      </h1>

      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10 text-lg">
        Book amazing student designers from Jahangirnagar University for Mehedi, Makeup, Saree Draping, Event Decoration and more!
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {designers.map((d) => (
          <div
  key={d.id}
  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
>
  <div className="w-full aspect-[3/2] overflow-hidden">
    <img
      src={d.image}
      alt={d.name}
      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
    />
  </div>
  <div className="p-4 space-y-1">
    <h2 className="text-xl font-semibold text-green-700">{d.name}</h2>
    <p><strong>Skill:</strong> {d.skill}</p>
    <p><strong>Rate:</strong> {d.rate}</p>
    <p><strong>Location:</strong> {d.location}</p>
    <p><strong>Department:</strong> {d.department}</p>
    <p><strong>Year:</strong> {d.year}</p>
    <p><strong>Hall:</strong> {d.hall}</p>
    <p>
      <strong>Facebook:</strong>{" "}
      <a
        href={`https://${d.fb}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        {d.fb}
      </a>
    </p>
    <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
      Book Now
    </button>
  </div>
</div>

        ))}
      </div>
    </div>
  );
};

export default Designer;
