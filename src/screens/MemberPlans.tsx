import { Plane } from "lucide-react";
import React from "react";
import Button from "../Componentes/Button";

interface Plan {
    price: number;
    title: string;
    features: string[];

}

const MemberPlans: React.FC = () => {
    
    const plans: Plan[] = [
        { price: 30, title: "Per Month", features: ["Free locker usage", "Unlimited gym access", "Perfect for beginners", "Access to basic equipment"] },
        { price: 50, title: "Per Month", features: ["All Basic Plan features", "Access to group classes", "Cardio & endurance training", "One personal training session"] },
        { price: 80, title: "Per Month", features: ["All Standard Plan features", "Unlimited personal training", "Customized diet & workout plan", "Access to VIP lounge", "Advanced equipment"] }
    ];


    return (
        <div className="bg-[#222323] relative  min-h-screen w-full px-4 sm:px-8 lg:px-20 py-20">

            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
                    Choose Your Plan
                </h1>
                <div className="w-24 h-1 bg-[#E07721] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-12 gap-100  max-w-4xl ">



                {plans.map((plan, index) => (
                    <div key={index} className="relative bg-[#2a2a2a] transition-all shadow-2xl relative p-40 pb-56  shadow-2xl">
                        <div className="absolute bg-[#E07721] h-28 w-20 top-0 left-3"></div>
                        <div className="absolute top-16 left-3  w-0 h-0 border-l-[40px] border-r-[40px] border-b-[50px] border-l-transparent border-r-transparent border-b-[#2a2a2a]" />


                        <div className="absolute top-4 left-8 text-white font-bold">${plan.price}</div>
                        <div className="absolute top-9 left-9 text-white font-bold">{plan.title}</div>

                        <div className="absolute left-12 top-34 space-y-2">
                            {plan.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center">
                                    <div className="w-2 h-2 bg-white rounded-full mr-4 flex-shrink-0"></div>
                                    <div className="text-gray-300 text-base">{feature}</div>
                                </div>
                            ))}
                        </div>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                            <Button className="shadow-2xl bg-[#E07721] px-6 py-2 font-bold">
                                Choose Plan
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default MemberPlans;




