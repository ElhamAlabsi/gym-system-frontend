import React from "react";

const DedliftScroll: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center bg-[url('dedlift.png')]  h-screen w-screen bg-no-repeat">
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="absolute top-0 left-0 w-full h-30 bg-[#0D1415]/80 shadow-2xl z-10"></div>

      <div className="flex items-center justify-center h-full relative z-20">
        <div className="text-center text-white font-bold text-2xl sm:text-5xl md:text-6xl">
          <h1>Join us today and start your</h1>
          <h1 className="mt-4">transformation!</h1>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-30 bg-[#0D1415]/80 shadow-2xl"></div>
    </div>
  );
};

export default DedliftScroll;

