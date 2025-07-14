import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    { title: "QUARTERLY", price: 18000, length: 3 },
    { title: "HALF-YEARLY", price: 34000, length: 6 },
    { title: "YEARLY", price: 67000, length: 12 },
  ];

  return (
    <section id="pricing" className="py-20 px-6 bg-white text-center">
      <h1 className="text-3xl font-bold mb-12 text-[#0095ff]">Elite Edge Fitness Plans</h1>
      <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <div key={plan.title} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:scale-[1.02] transition">
            <div className="bg-[url('/pricing.jpg')] bg-cover bg-center h-56 relative">
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center text-white px-6">
                <h2 className="text-2xl font-bold">{plan.title}</h2>
                <h3 className="text-xl">PACKAGE</h3>
                <p className="mt-2">Rs {plan.price} for {plan.length} Months</p>
              </div>
            </div>
            <div className="p-6 space-y-3 text-left text-sm text-gray-700">
              {["Equipment", "All Day Free Training", "Free Restroom", "24/7 Skilled Support", "20 Days Freezing Option"].map((item, i) => (
                <p key={i} className="flex items-center gap-2">
                  <Check className="text-[#0095ff]" size={18} /> {item}
                </p>
              ))}
              <Link
                to="/join"
                state={{ plan: plan.title }}
                className="mt-4 inline-block bg-[#0095ff] text-white px-6 py-2 rounded-md hover:bg-[#0267af] transition"
                >
                Join Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
