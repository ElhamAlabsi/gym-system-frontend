
export interface LoginDto {
    email: string;
    password: string;
}


export interface AuthResponceDto {
    token: string;
    name: string;
    email: string;
    expiresAt: string;
}


export interface RegisterDto{
    name:string ;
    email :string;
    password :string;
    confirmpassword:string;

}



