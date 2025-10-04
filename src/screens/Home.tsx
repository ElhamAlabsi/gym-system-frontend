import React, { useState } from "react";
import Button from "../Componentes/Button";
import AllUseres from "./AllUseres";
import Trainers from "./Trainers";


const Home: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"Profile" | "AllUsers" | "myCoaches">("Profile");

    return (
        <div className="min-h-screen min-w-screen bg-gray-100 flex flex-col items-center p-24 space-x-8">
            <div className="rounded-xl border border-[#E07721] shadow-2xl w-full p-4">
                <div className="space-x-4 flex items-center justify-center px-8">
                    <Button onClick={() => setActiveTab("Profile")}>Profile</Button>
                    <Button onClick={() => setActiveTab("AllUsers")}>All Useres</Button>
                    <Button onClick={() => setActiveTab("myCoaches")}>myCoaches</Button>
                </div>


                <div className="p-8 bg-white rounded shadow ">
                    {activeTab === "Profile" && <div>Profile Component Content</div>}
                    {activeTab === "AllUsers" && <AllUseres/>}
                    {activeTab === "myCoaches" && <Trainers/>}
                </div>

            </div>



        </div>
    );

};

export default Home;
