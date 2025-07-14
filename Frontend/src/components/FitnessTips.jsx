import React, { useState } from "react";
import { FaDumbbell, FaAppleAlt, FaBed, FaWater } from "react-icons/fa";

const tipCategories = {
  Workout: [
    { level: "Beginner", tip: "Start with bodyweight exercises." },
    { level: "Intermediate", tip: "Incorporate compound movements." },
    { level: "Advanced", tip: "Use supersets for intensity." },
  ],
  Nutrition: [
    { level: "Beginner", tip: "Eat protein in every meal." },
    { level: "Intermediate", tip: "Track your macros." },
    { level: "Advanced", tip: "Use carb cycles if bulking." },
  ],
  Recovery: [
    { level: "Beginner", tip: "Stretch after workouts." },
    { level: "Intermediate", tip: "Add foam rolling daily." },
    { level: "Advanced", tip: "Use contrast therapy (warm/cold)." },
  ],
  Lifestyle: [
    { level: "Beginner", tip: "Aim for 7-8 hours sleep." },
    { level: "Intermediate", tip: "Limit alcohol & sugar." },
    { level: "Advanced", tip: "Practice mindfulness or meditation." },
  ],
};

const icons = {
  Workout: <FaDumbbell className="text-blue-500 text-2xl" />,
  Nutrition: <FaAppleAlt className="text-green-500 text-2xl" />,
  Recovery: <FaBed className="text-purple-500 text-2xl" />,
  Lifestyle: <FaWater className="text-teal-500 text-2xl" />,
};

const FitnessTips = () => {
  const [activeCat, setActiveCat] = useState("Workout");

  return (
    <section id="tips" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black text-white scroll-mt-24">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-center">Fitness Tips</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          {Object.keys(tipCategories).map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-4 py-2 rounded ${activeCat === cat ? "bg-blue-600" : "bg-gray-800"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4 mt-6">
          {tipCategories[activeCat].map(({ level, tip }, i) => (
            <div key={i} className="bg-gray-800 rounded-md p-4 flex items-start gap-4">
              <div>{icons[activeCat]}</div>
              <div>
                <p className="text-sm text-green-300 font-semibold">{level}</p>
                <p>{tip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FitnessTips;
