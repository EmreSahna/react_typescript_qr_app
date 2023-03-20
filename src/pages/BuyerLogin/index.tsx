import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SignInState, SignUpState } from "./types";
import { useForm } from "react-hook-form";
import BuyerService from "./service";
import useUserStore from "../../store";

const BuyerLogin = () => {
    const store = useUserStore((state) => state);

    const { register: signinregister, handleSubmit: handleSignIn } = useForm<SignInState>();
    const { register: signupregister, handleSubmit: handleSignUp } = useForm<SignUpState>();
    const [formType, setFormType] = useState("signin");

    const signin = (data: SignInState) => {
        BuyerService.loginBuyer(data).then((res) => {
            store.setUserDetails(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    const signup = (data: SignUpState) => {
        BuyerService.registerBuyer(data).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }   

    useEffect(() => {
        if(formType === "signin"){
            document.getElementById("signin")?.classList.add("bg-100-main");
            document.getElementById("signup")?.classList.remove("bg-100-main");
        }
        if(formType === "signup"){
            document.getElementById("signup")?.classList.add("bg-100-main");
            document.getElementById("signin")?.classList.remove("bg-100-main");
        }
    }, [formType])
    
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-green-700 to-blue-500">
            <div className="w-[30%] h-full flex-col flex justify-center items-center bg-200-main">
                <h1 className="text-[42px] text-100-main font-staatliches text-center">QuickPayr</h1>
                <h2 className="text-[24px] text-100-main font-domine text-center font-semibold">-Buyer-</h2>
                <div className="inline-flex mt-[20px] rounded-lg bg-gray-400">
                    <div id="signin" onClick={() => setFormType("signin")} className="p-[10px] cursor-pointer rounded-md">
                        <div className="text-[24px] text-200-main font-domine font-semibold text-center">
                            Sign In
                        </div>
                    </div>
                    <div id="signup" onClick={() => setFormType("signup")} className="p-[10px] cursor-pointer rounded-md">
                        <div className="text-[24px] text-200-main font-domine font-semibold text-center">
                            Sign Up
                        </div>
                    </div>
                </div>
                {formType === "signin" ? (   
                    <form onSubmit={handleSignIn(signin)} className="w-[80%]">
                        <div className="flex flex-col mt-[20px]">
                            <label className="text-100-main text-[18px] font-semibold">Email</label>
                            <input {...signinregister("email")} className="outline-none placeholder:font-domine bg-transparent border-b-2 border-100-main p-[10px] mt-[10px]" placeholder="Type your email" type="email" />
                        </div>
                        <div className="flex flex-col mt-[20px]">
                            <label className="text-100-main text-[18px] font-semibold">Password</label>
                            <input {...signinregister("password")} name="password" className="outline-none placeholder:font-domine bg-transparent border-b-2 border-100-main p-[10px] mt-[10px]" placeholder="Type your password" type="password" />
                        </div>
                        <button className="flex mx-auto">
                            <div className="flex flex-row items-center justify-center mt-[20px] text-200-main bg-100-main py-2 px-4 rounded-md gap-[4px]">
                                <span className="text-[18px] font-semibold">Login</span>
                            </div>
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleSignUp(signup)} className="w-[80%]">
                        <div className="flex flex-col mt-[20px]">
                            <label className="text-100-main text-[18px] font-semibold">Email</label>
                            <input {...signupregister("email")} className="outline-none placeholder:font-domine bg-transparent border-b-2 border-100-main p-[10px] mt-[10px]" placeholder="Type your email" type="email" />
                        </div>
                        <div className="flex flex-col mt-[20px]">
                            <label className="text-100-main text-[18px] font-semibold">Password</label>
                            <input {...signupregister("password")} className="outline-none placeholder:font-domine bg-transparent border-b-2 border-100-main p-[10px] mt-[10px]" placeholder="Type your password" type="password" />
                        </div>
                        <div className="flex flex-col mt-[20px]">
                            <label className="text-100-main text-[18px] font-semibold">Name</label>
                            <input {...signupregister("customer_name")} className="outline-none placeholder:font-domine bg-transparent border-b-2 border-100-main p-[10px] mt-[10px]" placeholder="Type your name" type="text" />
                        </div>
                        <div className="flex flex-col mt-[20px]">
                            <label className="text-100-main text-[18px] font-semibold">Phone</label>
                            <input {...signupregister("phone")} className="outline-none placeholder:font-domine bg-transparent border-b-2 border-100-main p-[10px] mt-[10px]" placeholder="Type your phone" type="text" />
                        </div>
                        <div className="flex flex-col mt-[20px]">
                            <label className="text-100-main text-[18px] font-semibold">Bank Details</label>
                            <input {...signupregister("bank_details")} className="outline-none placeholder:font-domine bg-transparent border-b-2 border-100-main p-[10px] mt-[10px]" placeholder="Type your bank detail" type="text" />
                        </div>
                        <button className="flex mx-auto">
                            <div className="flex flex-row items-center justify-center mt-[20px] text-200-main bg-100-main py-2 px-4 rounded-md gap-[4px]">
                                <span className="text-[18px] font-semibold">Register</span>
                                </div>
                        </button>
                    </form>
                )}
                <h3 className="text-center text-gray-500 mt-[20px]">Are you a <Link to="/seller/login" className="border-b border-gray-500">Seller?</Link></h3>
            </div>
        </div>
    );
};

export default BuyerLogin;