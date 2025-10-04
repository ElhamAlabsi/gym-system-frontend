import type { LoginDto, Login, AuthResponceDto, RegisterDto, AllUsersDto } from "../types/auth";

const url = "http://localhost:5107/api";


export async function login(data: LoginDto): Promise<AuthResponceDto> {
    const res = await fetch(`${url}/Auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("login failed!");

    return res.json();
}



export async function register(data: RegisterDto): Promise<AuthResponceDto> {

    const res = await fetch(`${url}/Auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("registraion filed !!")

    return res.json();

}



export async function getAllUsers(page: number = 1, pageSize: number = 10): Promise<AllUsersDto[]> {

    const token = localStorage.getItem("token");
    console.log("Token :", token);

    const res = await fetch(`${url}/Profile/AllUsers`, {
        method: "GET",
        headers: {
            "Content-Type": "application/Json",
            "Authorization": `Bearer ${token}`,
        },

    });

    if (!res.ok) throw Error("Cant get all Users !!!")

    return res.json();
}






