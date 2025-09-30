import React from "react";

const Footer: React.FC = () => {
    const galleryImages = [
        "/Group1.png",
        "/Group.png",
        "/Group2.png",
        "/Group3.png",
        "/Group4.png",
        "/Group0.png",
    ];

    return (
        <footer className="bg-[#222323] w-full px-4 sm:px-8 lg:px-12 py-16 ">
            <div className="max-w-7xl mx-auto items-center">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
                        Take a Look Inside
                    </h2>
                    <div className="w-24 h-1 bg-[#E07721] mx-auto"></div>
                </div>


                <div className="grid grid-cols-4 gap-4 max-w-5xl mx-auto items-center">
                    <div className="">
                        <img src={galleryImages[0]} className="w-full h-full object-cover " alt="" />
                    </div>

                    <div className="flex flex-col gap-2 ">
                        <img src={galleryImages[1]} className="w-full h-full object-cover  flex-1" alt="" />
                        <img src={galleryImages[4]} className="w-full h-full object-cover flex-1" alt="" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <img src={galleryImages[2]} className="w-full h-full object-cover  flex-1" alt="" />
                        <img src={galleryImages[5]} className="w-full h-full object-cover  flex-1" alt="" />
                    </div>

                    <div className="">
                        <img src={galleryImages[3]} className="w-full h-full object-cover " alt="" />
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
