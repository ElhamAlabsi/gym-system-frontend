import React, { useState } from "react";
import Button from "../Componentes/Button";
import { login } from "../api/auth";
import type { LoginDto } from "../types/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";


const Login: React.FC = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState<LoginDto>({ email: "", password: "" });
    const [error, setError] = useState<string | null>(null);
    const { setToken } = useAuth();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const user = await login(form);
            console.log("User:", user);
            setToken(user.token);    
            navigate("/Home");
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen bg-[#2a2a2a] flex items-center justify-center px-4">
            <form onSubmit={handleSubmit} className="items-center p-8 rounded-xl border border-[#E07721] shadow-2xl w-full max-w-md space-y-9">
                <h2 className="text-3xl font-bold text-center text-[#E07721]">Log In</h2>
                <input type="text" name="email" onChange={handleChange} placeholder="your Email" className="w-full rounded border border-[#E07721] p-2" />
                <input type="password" name="password" onChange={handleChange} placeholder="your Password" className="w-full rounded border border-[#E07721] p-2" />
                <Button type="submit" className="w-full bg-[#EF7A1E]/80 text-white font-bold text-lg px-6 py-2 rounded">
                    Log In
                </Button>
            </form>
            {error && <p className="text-red-500 text-center">{error}</p>}
        </div>
    );
};

export default Login;
