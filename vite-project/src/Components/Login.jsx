import TailorShop from "../assets/Tailor_shop_interior.jpg"
import Logo from '../assets/Website-logo.png';
import React, { useState, useRef } from "react"

import { signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";
import 'firebase/auth';
import { auth } from "../firebase";

import { useNavigate } from "react-router-dom";

export default function Login()
{
    const navigate = useNavigate();
    const [formData, setFormData ] = useState(
        {
            email: '',
            password: ''
        }
    )
    

    function handleChange(event)
    {
        
        const { name, value } = event.target;
        setFormData(prevState => (
            {
                ...prevState,
                [name]: value
            }
        ));
        console.log(formData);
    }


    function handleToRegister()
    {
        navigate('/register')
    }

    function handleToSite()
    {
        navigate('/')
    }


    const handleLogin = async(e) =>
    {
        e.preventDefault();
        // if(username)
        //     setIsFound(true)        
        // else {
        //     setIsFound(false);}
        try{
            const userCredential = await signInWithEmailAndPassword(auth,formData.email,formData.password);
            const user = userCredential.user;
            localStorage.setItem('token',user.accesstoken);
            localStorage.setItem('user',JSON.stringify(user));
            navigate('/');

        }
        catch(e){
            console.log(e);

        }
    }

    return (
        <section className="bg-[#180101] min-h-screen min-w-full flex flex-row items-center justify-center font-serif">
            <div className="bg-stone-100 w-[75vw] md:w-[50vw] lg:w-[75%] h-[80vh] flex flex-row items-center rounded-[10px]">
                <div className="hidden lg:block w-[50%] h-full relative">
                    <img src={TailorShop} className="w-full h-full rounded-l-[10px]"/>
                    <h1 className="text-stone-100 shadow-text-light text-center w-full absolute top-[92%] left-[50%] -translate-x-[50%] whitespace-nowrap text-lg py-2 blur-background">Don't have an account, <span className="text-[#F28928] cursor-pointer whitespace-wrap"><a href="/register">Register Now</a></span>.</h1>
                </div>
                
                <div className="w-full lg:w-[50%] h-full py-[1rem] px-[1rem]">
                    <div className="w-full flex flex-row justify-center py-4">
                        <img src={Logo} className="w-[6rem] h-[6rem]" />
                    </div>
                    <h1 className="text-3xl text-[#F28928] text-center font-medium pb-[3rem] capitalize">Welcome Back!</h1>
                    <form className="text-[#262626]" onSubmit={handleLogin}>
                        <p className="pb-4 w-full flex flex-col items-center">
                            <label htmlFor="email" className="block pb-2 w-[80%] text-left">
                                Email:
                            </label>
                            <input 
                                type="text" 
                                id="email"
                                name="email"
                                onChange={handleChange}
                                className="bg-stone-300 w-[80%] h-[2rem] focus:outline-none border-[#180101] rounded-md px-2 focus:border-b-2"

                                autoComplete="username"
                                required

                            />
                        </p>

                        <p className="pb-4 w-full flex flex-col items-center">
                            <label htmlFor="password" className="block pb-2 w-[80%] text-left">
                                Password:
                            </label>
                            <input 
                                type="password" 
                                id="password"
                                name="password"
                                onChange={handleChange}
                                className="bg-stone-300 w-[80%] h-[2rem] focus:outline-none border-[#180101] rounded-md px-2 focus:border-b-2"
                                autoComplete="current-password"
                                required
                            />
                        </p>

                        <p className="w-[90%] text-right pb-4">

                            <button className="bg-[#262626] text-stone-100 px-4 py-2 rounded-md" 
                            type="submit"
                            >
                                Login

                            </button>
                        </p>
                        <p className="lg:hidden text-center">Don't have an account, <span className="text-[#F28928] cursor-pointer"><button onClick={handleToRegister}>Register Now</button></span>.</p>
                        <p className="w-[100%] text-[#F28928] text-center pt-2 pb-2">
                            <button onClick={handleToSite}>Back to Site</button>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    )
}