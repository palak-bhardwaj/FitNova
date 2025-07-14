import React, { useState } from "react";

const goals = {
  "Weight Loss": {
    beginner: {
      type: "Veg",
      meals: {
        Mon: { b: "Oats + fruits", l: "Dal + roti", d: "Salad + soup" },
        Wed: { b: "Smoothie", l: "Veg stir-fry", d: "Sprouts + yogurt" },
        Fri: { b: "Poha", l: "Rice + sambar", d: "Grilled veggies" },
      },
      cal: 1500,
    },
    intermediate: {
      type: "Non-Veg",
      meals: {
        Tue: { b: "Egg whites + banana", l: "Grilled chicken", d: "Fish + salad" },
        Thu: { b: "Greek yogurt", l: "Chicken + quinoa", d: "Soup + salad" },
        Sat: { b: "Protein shake", l: "Rice + egg curry", d: "Veg bowl" },
      },
      cal: 1700,
    },
    advanced: {
      type: "Non-Veg",
      meals: {
        Sun: { b: "Omelet + toast", l: "Turkey + sweet potato", d: "Steak + veggies" },
      },
      cal: 1900,
    },
  },
  "Muscle Gain": {
    beginner: {
      type: "Non-Veg",
      meals: {
        Mon: { b: "Eggs + oats", l: "Chicken + rice", d: "Paneer + veggies" },
        Wed: { b: "Protein shake", l: "Turkey + quinoa", d: "Fish + salad" },
        Fri: { b: "Greek yogurt", l: "Chicken bowl", d: "Soup + toast" },
      },
      cal: 2200,
    },
    // intermediate/advanced omitted for brevity
  },
  Maintenance: {
    beginner: {
      type: "Veg",
      meals: {
        Tue: { b: "Upma", l: "Dal + roti", d: "Khichdi" },
        Thu: { b: "Poha", l: "Veg curry + rice", d: "Chapati + salad" },
        Sun: { b: "Fruit bowl", l: "Rice + dal", d: "Soup + toast" },
      },
      cal: 1800,
    },
  },
};

const DietChart = () => {
  const [goal, setGoal] = useState("Weight Loss");
  const [level, setLevel] = useState("beginner");
  const [planType, setPlanType] = useState(goals[goal][level].type);

  const selections = goals[goal];
  const plan = selections[level];

  return (
    <section id="diet" className="py-20 px-6 bg-gray-100 dark:bg-gray-900 scroll-mt-24">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-center">Diet Chart</h2>

        <div className="flex justify-center gap-4 flex-wrap">
          {Object.keys(goals).map((g) => (
            <button
              key={g}
              onClick={() => { setGoal(g); setLevel("beginner"); setPlanType(goals[g]["beginner"].type); }}
              className={`px-4 py-2 rounded ${goal === g ? "bg-blue-600 text-white" : "bg-white dark:bg-gray-800"}`}
            >
              {g}
            </button>
          ))}
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          {["beginner", "intermediate", "advanced"].filter(l => selections[l]).map(l => (
            <button
              key={l}
              onClick={() => { setLevel(l); setPlanType(selections[l].type); }}
              className={`px-3 py-1 rounded ${level === l ? "bg-green-600 text-white" : "bg-white dark:bg-gray-800"}`}
            >
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </button>
          ))}
        </div>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400">Plan: {planType}, ≈ {plan.cal} kcal/day</p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg">
            <thead>
              <tr>
                <th className="p-2">Day</th>
                <th className="p-2">Breakfast</th>
                <th className="p-2">Lunch</th>
                <th className="p-2">Dinner</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(plan.meals).map(([day, meals]) => (
                <tr key={day}>
                  <td className="p-2 font-semibold">{day}</td>
                  <td className="p-2">{meals.b}</td>
                  <td className="p-2">{meals.l}</td>
                  <td className="p-2">{meals.d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DietChart;
