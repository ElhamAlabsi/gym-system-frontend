import type { LoginDto, AuthResponceDto, RegisterDto } from "../types/auth";

const url = "http://localhost:5107/api/Auth";

export async function login(data: LoginDto): Promise<AuthResponceDto> {
    const res = await fetch(`${url}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("login failed!");

    return res.json();
}



export async function register(data: RegisterDto): Promise<AuthResponceDto> {

    const res = await fetch(`${url}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("registraion filed !!")

    return res.json();

}