import React, { useState } from "react";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");
  const [bmiMessage, setBmiMessage] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      setBmi("");
      setBmiMessage("Please enter valid height, weight, and gender.");
      return;
    }

    const h = height / 100;
    const value = (weight / (h * h)).toFixed(2);
    setBmi(value);

    let message = "";
    if (value < 18.5) message = "You are underweight.";
    else if (value < 24.9) message = "You have a healthy weight!";
    else if (value < 29.9) message = "You are overweight.";
    else message = "You are in the obese range.";

    setBmiMessage(message);
  };

  return (
    <section
      id="bmi"
      className="bg-gradient-to-r from-blue-950 to-slate-500 py-20 px-6 text-white scroll-mt-24"
    >
      <h1 className="text-3xl font-bold text-center mb-10 uppercase">
        BMI Calculator
      </h1>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <form
          onSubmit={calculateBMI}
          className="flex-1 flex flex-col gap-6 bg-white/10 p-8 rounded-md shadow-md"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="height" className="text-lg">Height (cm)</label>
            <input
              id="height"
              name="height"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="px-3 py-2 rounded-md text-black"
              required
              autoComplete="on"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="weight" className="text-lg">Weight (kg)</label>
            <input
              id="weight"
              name="weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="px-3 py-2 rounded-md text-black"
              required
              autoComplete="on"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="gender" className="text-lg">Gender</label>
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="px-3 py-2 rounded-md text-black"
              required
              autoComplete="on"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-4 bg-white text-[#0095ff] px-6 py-2 rounded-md font-semibold"
          >
            Calculate BMI
          </button>

          {bmi && (
            <div className="mt-4 text-lg font-semibold text-white space-y-2">
              <p>Your BMI: <span className="text-yellow-300">{bmi}</span></p>
              <p className="text-white">{bmiMessage}</p>
            </div>
          )}

          {!bmi && bmiMessage && (
            <p className="text-red-300 font-medium mt-2">{bmiMessage}</p>
          )}
        </form>

        <div className="flex-1">
          <img
            src="/bmi.jpg"
            alt="BMI Illustration"
            className="rounded-lg shadow-md w-full max-h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
