import React from "react";
import Button from "../Componentes/Button";
import { Navigate, useNavigate } from "react-router-dom";

const Hero: React.FC = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-[url('/home.png')] h-screen w-screen bg-center relative">
      <div className="absolute top-1/3 left-12">
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-6xl lg:text-6xl">Push Your Limits.</h1>
        <h1 className="text-[#EF7A1E] font-bold text-3xl sm:text-4xl md:text-5xl mt-4">Transform</h1>
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl  mt-4">Your Body.</h1>
        <h1 className="text-[#EF7A1E] font-bold text-3xl sm:text-4xl md:text-5xl  mt-4">Join the Movement</h1>
      </div>

      <Button onClick={() => navigate("/Signup")} className="absolute bottom-20 left-12 bg-[#EF7A1E]/80 text-white font-bold text-lg px-6 py-2 rounded">
        Join Now
      </Button>

    </div>
  );
};

export default Hero;




