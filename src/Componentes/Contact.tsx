import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaStar } from "react-icons/fa";

const Contact: React.FC = () => {
    const phone = "+628450250022";
    const stars = Array(5).fill(null);

    return (
        <div className="bg-[#222323] min-h-screen w-full px-12 py-30">
            {/* Footer Info Section */}
            <div className="border-t border-gray-700 pt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold italic text-lg mb-2">
                            Contact
                        </h3>
                        <a href={`tel:${phone}`} className="text-[#E07721] font-bold text-xl hover:text-[#d16a1a] transition-colors">
                            {phone}
                        </a>
                    </div>

                    {/* Review Stars */}
                    <div>
                        <h3 className="text-white font-semibold italic text-lg mb-2">
                            Review
                        </h3>
                        <div className="flex justify-center space-x-1">
                            {stars.map((_, i) => (
                                <FaStar key={i} className="text-[#E07721] w-6 h-6" />
                            ))}
                        </div>
                    </div>

                    {/* Social Media */}
                    
                    <div className="flex justify-center space-x-6 text-[#E07721] text-3xl">
                  
                        <a href={`https://wa.me/${phone}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#d16a1a] transition-colors">
                            <FaWhatsapp />
                        </a>
                        <a href="https://www.facebook.com/PageName" target="_blank" rel="noopener noreferrer" className="hover:text-[#d16a1a] transition-colors">
                            <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com/PageName" target="_blank" rel="noopener noreferrer" className="hover:text-[#d16a1a] transition-colors">
                            <FaInstagram />
                        </a>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Contact;
