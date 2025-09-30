import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <nav className="fixed  top-0 left-0 right-0 z-50 h-14 lg:h-16  w-full shadow-md flex item-center  ">
            <div className="flex items-center  w-full px-4 justify-between">
                <div >
                    <img className="h-10 lg:h-12 w-auto" src="Logo.png"></img>
                </div>

                <div className="hidden md:flex font-bold font-FrancoisOne text-[#FFFFFF]/100 space-x-10 px-4">
                    <Link to="/" >Home</Link>
                    <Link to="/AboutUs">About Us</Link>
                    <Link to="/MemberPlans">Members Plan</Link>
                    <Link to="/Programes" >Programes</Link>
                    <Link to="/Trainers">Trainers</Link>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {isOpen && (
                    <div className="md:hidden absolute top-14 left-0 w-full bg-black/95 text-white font-bold font-FrancoisOne flex flex-col space-y-4 py-6 px-6">
                        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link to="/AboutUs" onClick={() => setIsOpen(false)}>About Us</Link>
                        <Link to="/MemberPlan" onClick={() => setIsOpen(false)}>Members Plan</Link>
                        <Link to="/WhyPulseGym" onClick={() => setIsOpen(false)}>Programes</Link>
                        <Link to="/Trainers" onClick={() => setIsOpen(false)}>Trainers</Link>
                    </div>
                )}


            </div>
        </nav>
    );


}




