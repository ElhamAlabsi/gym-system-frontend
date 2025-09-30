import React from "react";

interface Service {
    title: string;
    description: string;
    image: string;
}

const Services: React.FC = () => {
    const services: Service[] = [
        { title: "Strength Training", description: "Build power and muscle with guided weightlifting programs.", image: "/icone1.png" },
        { title: "Group Classes", description: "Fun, motivating classes that keep you moving together.", image: "/icone2.png" },
        { title: "Personal Coaching", description: "One-on-one training tailored to your goals and lifestyle.", image: "/icone3.png" },
        { title: "Cardio & Endurance", description: "Boost stamina and burn calories with high-energy sessions.", image: "/icone4.png" },
    ];

    return (
        <div className="min-h-screen w-full bg-[#222323] px-4 sm:px-8 lg:px-10 py-10">
            {/* Title Section */}
            <div className="text-center mb-16">
                <h1 className="mb-4 text-4xl md:text-6xl font-bold text-white">Our Services</h1>
                <div className="w-24 h-1 bg-[#E07721] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <div key={index} className="flex items-center p-8 bg-[#2a2a2a] hover:bg-[#E07721] rounded-lg shadow-xl transition-all duration-300 hover:transform hover:scale-105 group min-h-[150px]">
                        {/* Icon Container */}
                        <div className="flex-shrink-0 mr-6">
                            <img src={service.image} alt={service.title} className="w-16 h-16 md:w-20 md:h-20 object-containtransition-transform duration-300 group-hover:scale-110" />
                        </div>

                        <div className="flex-1">
                            <h2 className="text-white font-bold text-xl md:text-2xl mb-3">{service.title}</h2>
                            <p className="text-gray-300 group-hover:text-white text-sm md:text-base leading-relaxed">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;