import React from "react";

const WorkoutSessions = () => {
  return (
    <section id="workout" className="py-20 max-w-7xl mx-auto px-6 space-y-20">
      {/* Workout Overview Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Power Through Our Top Workout Sessions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Our full-body workout programs are carefully curated by professionals to help you burn fat, build strength, and improve flexibility. Suitable for all fitness levels.
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Cardio & HIIT Programs</li>
            <li>Strength & Endurance Circuits</li>
            <li>Stretching and Flexibility Routines</li>
            <li>Custom Plans for Beginners & Pros</li>
          </ul>
        </div>

        <div>
          <img
            src="/img5.jpg"
            alt="Workout"
            className="rounded-lg shadow-xl w-full max-h-[350px] object-cover"
          />
        </div>
      </div>

      {/* Bootcamp Cards Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Bootcamps</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          High-intensity bootcamps crafted for real transformation. Whether you're pushing limits or just starting, there's a camp for you.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Strength Builder",
              desc: "Progressive overload training to build lean muscle mass and stamina.",
            },
            {
              title: "Fat Burn Express",
              desc: "HIIT-based circuits optimized for rapid fat loss and core strength.",
            },
            {
              title: "Flex & Flow",
              desc: "Focus on mobility, flexibility, and recovery with expert yoga techniques.",
            },
            {
              title: "Athlete Mode",
              desc: "Advanced routines to improve agility, power, and sports performance.",
            },
          ].map((bootcamp, i) => (
            <div
              key={i}
              className="p-6 border border-gray-300 rounded-md shadow-sm hover:bg-gray-900 hover:text-white transition duration-300"
            >
              <h4 className="text-xl font-semibold text-[#0095ff] mb-2">{bootcamp.title}</h4>
              <p className="text-sm">{bootcamp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
