import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SignInState, SignUpState } from "./types";
import { useForm } from "react-hook-form";
import SellerService from "./service";

const SellerLogin = () => {
    const { register: signinregister, handleSubmit: handleSignIn } = useForm<SignInState>();
    const { register: signupregister, handleSubmit: handleSignUp } = useForm<SignUpState>();
    const [formType, setFormType] = useState("signin");

    const signin = (data: SignInState) => {
        SellerService.loginBuyer(data).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }

    const signup = (data: SignUpState) => {
        SellerService.registerBuyer(data).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }   

    useEffect(() => {
        if(formType === "signin"){
            document.getElementById("signin")?.classList.add("bg-main-300");
            document.getElementById("signup")?.classList.remove("bg-main-300");
        }
        if(formType === "signup"){
            document.getElementById("signup")?.classList.add("bg-main-300");
            document.getElementById("signin")?.classList.remove("bg-main-300");
        }
    }, [formType])
    
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-main-100 to-main-600">
            <div className="w-[30%] h-full flex-col flex justify-center items-center bg-white">
                <h1 className="text-[42px] text-main-300 font-staatliches text-center">QuickPayr</h1>
                <h2 className="text-[24px] text-main-200 font-domine text-center font-semibold">-Seller-</h2>
                <div className="inline-flex mt-[20px] rounded-lg">
                    <div id="signin" onClick={() => setFormType("signin")} className="p-[10px] cursor-pointer rounded-md">
                        <div className="text-[24px] text-black font-domine font-semibold text-center">
                            Sign In
                        </div>
                    </div>
                    <div id="signup" onClick={() => setFormType("signup")} className="p-[10px] cursor-pointer rounded-md">
                        <div className="text-[24px] text-black font-domine font-semibold text-center">
                            Sign Up
                        </div>
                    </div>
                </div>
                {formType === "signin" ? (   
                    <form onSubmit={handleSignIn(signin)} className="w-[80%]">
                        <div className="flex flex-col mt-[20px]">
                            <label className="text-black text-[18px] font-semibold">Email</label>
                            <input {...signinregister("email")} className="outline-none placeholder:font-domine bg-transparent border-b-2 border-black p-[10px] mt-[10px]" placeholder="Type your email" type="email" />
                        </div>
                        <div className="flex flex-col mt-[20px]">
                            <label className="text-black text-[18px] font-semibold">Password</label>
                            <input {...signinregister("password")} name="password" className="outline-none placeholder:font-domine bg-transparent border-b-2 border-black p-[10px] mt-[10px]" placeholder="Type your password" type="password" />
                        </div>
                        <button className="flex mx-auto">
                            <div className="flex flex-row items-center justify-center mt-[20px] text-white shadow-md bg-gradient-to-r from-main-100 to-main-300 py-2 px-4 rounded-md gap-[4px]">
                                <span className="text-[18px] font-semibold">Login</span>
                            </div>
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleSignUp(signup)} className="w-[80%]">
                        <div className="flex flex-col mt-[20px]">
                            <label className="text-black text-[18px] font-semibold">Email</label>
                            <input {...signupregister("email")} className="outline-none placeholder:font-domine bg-transparent border-b-2 border-black p-[10px] mt-[10px]" placeholder="Type your email" type="email" />
                        </div>
                        <div className="flex flex-col mt-[20px]">
                            <label className="text-black text-[18px] font-semibold">Password</label>
                            <input {...signupregister("password")} className="outline-none placeholder:font-domine bg-transparent border-b-2 border-black p-[10px] mt-[10px]" placeholder="Type your password" type="password" />
                        </div>
                        <div className="flex flex-col mt-[20px]">
                            <label className="text-black text-[18px] font-semibold">Name</label>
                            <input {...signupregister("customer_name")} className="outline-none placeholder:font-domine bg-transparent border-b-2 border-black p-[10px] mt-[10px]" placeholder="Type your name" type="text" />
                        </div>
                        <div className="flex flex-col mt-[20px]">
                            <label className="text-black text-[18px] font-semibold">Phone</label>
                            <input {...signupregister("phone")} className="outline-none placeholder:font-domine bg-transparent border-b-2 border-black p-[10px] mt-[10px]" placeholder="Type your phone" type="text" />
                        </div>
                        <div className="flex flex-col mt-[20px]">
                            <label className="text-black text-[18px] font-semibold">Bank Details</label>
                            <input {...signupregister("bank_details")} className="outline-none placeholder:font-domine bg-transparent border-b-2 border-black p-[10px] mt-[10px]" placeholder="Type your bank detail" type="text" />
                        </div>
                        <button className="flex mx-auto">
                            <div className="flex flex-row items-center justify-center mt-[20px] text-white shadow-md bg-gradient-to-r from-main-100 to-main-300 py-2 px-4 rounded-md gap-[4px]">
                                <span className="text-[18px] font-semibold">Register</span>
                                </div>
                        </button>
                    </form>
                )}
                <h3 className="text-center text-gray-500 mt-[20px]">Are you a <Link to="/buyer/login" className="border-b border-gray-500">Buyer?</Link></h3>
            </div>
        </div>
    );
};

export default SellerLogin;