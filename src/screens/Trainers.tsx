import React from "react";

interface trainer {
  name: string;
  title: string;
  img: string;

}

const Trainers: React.FC = () => {

  const trainers: trainer[] = [
    { name: "Alex Johnson", title: "Certified Personal Trainer", img: "/man2.png" },
    { name: "Maya Roberts", title: "Strength Conditioning Coach", img: "/woman1.png" },
    { name: "David Smith", title: "Group Fitness Instructor", img: "/man1.png" },
    { name: "Sophia Lee", title: "Cardio Endurance Specialist", img: "/women2.png" },
  ];

  return (
    <div className="bg-[#222323] min-h-screen w-full px-12 py-30">
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
          Our Expert Coaches
        </h1>
        <div className="w-24 h-1 bg-[#E07721] mx-auto"></div>
      </div>


      <div className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10 ">
        {trainers.map((trainer, index) => (

          <div key={index} className="relative flex items-center bg-[#282828] hover:bg-[#E07721] shadow-2xl rounded-xl p-26 ">
            <img className="absolute bottom-0 left-0 h-60" src={trainer.img} alt={trainer.name} />
            <div className="absolute ml-2 left-40 top-20 text-white " >
              <h2 className="text-white  font-bold text-xl">{trainer.name}</h2>
              <p className="text-gray-300 text-md">{trainer.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Trainers;
