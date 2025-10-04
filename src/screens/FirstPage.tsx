import React from "react";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Trainers from "./Trainers";
import DedliftScroll from "./DedliftScroll";
import MemberPlans from "./MemberPlans";
import Services from "./Services";
import Footer from "../Componentes/Footer";
import Contact from "../Componentes/Contact";
import WhyPulseGym from "./WhyPulseGym";


const FirstPage: React.FC = () => {
    return (
        <div className="w-full overflow-x-hidden ">
            <Hero />
            <DedliftScroll />
            <WhyPulseGym/>
            <Services />
            <Trainers />
            <MemberPlans />
            <Footer />
            <Contact />
        </div>
    );
};

export default FirstPage;


