import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../api/auth";



const Signup: React.FC = () => {

    const [form, setForm] = useState({ name: "", email: "", password: "", confirmpassword: "" });
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const newuser = await register(form);
            console.log(" new user :", newuser);
            localStorage.setItem("Token", newuser.token)
        } catch (err: any) {
            setError(err.message);

        }

    };

    return (
        <div className="min-h-screen bg-[#2a2a2a] flex items-center justify-center px-4">
            <form onSubmit={handleSubmit} className="items-center p-8 rounded-xl border border-[#E07721] shadow-2xl w-full max-w-md space-y-6">
                <h2 className="text-3xl font-bold text-center text-[#E07721]">Sign Up</h2>

                <input onChange={handleChange} type="text" name="name" value={form.name} placeholder="Full Name" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#E07721] focus:outline-none" required />
                <input onChange={handleChange} type="email" name="email" value={form.email} placeholder="Email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#E07721] focus:outline-none" required />
                <input onChange={handleChange} type="password" name="password" value={form.password} placeholder="Password" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#E07721] focus:outline-none" required />
                <input onChange={handleChange} type="password" name="confirmpassword" value={form.confirmpassword} placeholder="confirmpassword" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#E07721] focus:outline-none" required />
                <button type="submit" className="w-full bg-[#E07721] text-white py-2 rounded-lg hover:bg-[#d16a1a] transition-colors">
                    Create Account
                </button>

                <p className="text-center text-gray-600"> Already have an account?{" "}
                    <Link to="/Login" className="text-[#E07721] font-semibold">
                        Log in
                    </Link>
                </p>
            </form>
             {error && <p className="text-red-500 text-center">{error}</p>}
        </div>
    );
};

export default Signup;
