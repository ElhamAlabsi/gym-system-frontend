import React from "react";

interface WhyGymItem {
  title: string;
  description: string;
  image: string;
}

const WhyPulseGym: React.FC = () => {
  const whyItems: WhyGymItem[] = [
    { title: "Professional Trainers", description: "Certified coaches ready to guide you", image: "/why1.png" },
    { title: "Diverse Programs", description: "From strength training to yoga — we've got it all", image: "/why2.png" },
    { title: "Community Vibes", description: "Workout in a supportive and motivating environment", image: "/why3.png" }
  ];

  return (
    <div className="bg-[#222323] min-h-screen w-full px-4 sm:px-8 lg:px-12 py-20 relative overflow-hidden">
      {/* Decorative Orange Line */}
      <div className="absolute top-0 right-0 w-20 h-64 bg-gradient-to-b from-[#E07721] to-transparent transform rotate-12"></div>

      {/* Title Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
          Why Pulse Gym
        </h1>
        <div className="w-24 h-1 bg-[#E07721] mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto ">
        {whyItems.map((whyItem, index) => (
          <div className="p-6 items-center rounded-4xl border border-[#E07721]/20">
            <div><img src={whyItem.image} ></img></div>

            <div className=" text-center ">
              <h1 className="text-[#EF7A1E] font-bold  md:text-2xl mb-3">{whyItem.title}</h1>
              <h3 className="text-white text-sm sm:text-base md:text-lg font-bold">{whyItem.description}</h3>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyPulseGym;