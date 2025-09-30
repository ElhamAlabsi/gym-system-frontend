import React from "react";


const AboutUs: React.FC = () => {
    return (
        <div className="relative bg-[url('/training.png')] px-12 py-30 bg-center h-screen w-screen bg-cover bg-no-repeat">
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative text-center mb-16 z-20">
                <h1 className="text-4xl md:text-6xl text-white font-bold mb-4 drop-shadow-lg">
                    About Pulse Gym
                </h1>
                <div className="w-24 h-1 bg-[#E07721] mx-auto"></div>
            </div>

            <div className="relative text-center font-bold p-6 text-white z-20 max-w-2xl mx-auto">
                <p className="mb-2 text-lg">
                    At Pulse Gym, we believe fitness is more than just exercise — it’s a
                </p>
                <p className="mb-2 text-lg">
                    lifestyle. Our mission is to help you push beyond your limits, build
                </p>
                <p className="text-lg">
                    strength inside and out, and stay positive 
                </p>
                 <p className="mb-2 text-lg">
                 every step of the way.
                </p>
            </div>
        </div>

    );
}

export default AboutUs;


