import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutSessions from "./components/WorkoutSessions";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import BMICalculator from "./components/BMICalculator";
import Footer from "./components/Footer";
import Join from "./components/Join"
import DietChart from "./components/DietChart";
import FitnessTips from "./components/FitnessTips";

const App = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <WorkoutSessions />
              <Gallery />
              <Pricing />
              <BMICalculator />
              <DietChart />        {/* ✅ Add this */}
              <FitnessTips />
              <Contact />
            </>
          }
        />
        <Route path="/join" element={<Join />} />
      </Routes>
      <Footer />
      <ToastContainer theme="dark" position="top-center" />
    </BrowserRouter>
  );
};

export default App;
