import React from "react";

interface InputProps {
    type?: string;
    name: string;
    value?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

const Input: React.FC<InputProps> = ({ type = "text", name, value, placeholder, onChange, required = false, }) => {
    return (
        <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} required={required}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#E07721] focus:outline-none"
        />
    );
};

export default Input;
