import TailorShop from "../assets/Tailor_shop_interior.jpg"
import Logo from '../assets/Website-logo.png';
import Login from "./Login";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import firebase from "firebase/compat/app";
import 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../firebase";
import { auth } from "../firebase";

export default function Register()
{    
    const [ isIncomplete, setIsIncomplete ] = useState(false)
    const [formData, setFormData ] = useState(
        {
            email: '',
            password: ''
        }
    )
    const navigate = useNavigate();

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


    function handleToSite()
    {
        navigate('/')
    }
    
    
    const handleRegister = async(e) => {
        e.preventDefault();
        // Check for a valid email, password length, and if the username is provided
        if (
            !(formData.email.includes('@')) ||
            !(formData.email.includes('.')) ||
            formData.email.length < 8 ||
            formData.password.length < 8 
        )
            setIsIncomplete(true);
        else {
            try{
                const userCredential = await createUserWithEmailAndPassword(auth,formData.email,formData.password);
                const user = userCredential.user;
                const token = await user.getIdToken();
                localStorage.setItem('token',token);
                localStorage.setItem('user',JSON.stringify(user));
                setIsIncomplete(false); 
                navigate('/login');

            }
            catch(e){
                console.log(e);
            }
            /* // Add user data to localStorage
            const user = Math.random();
            localStorage.setItem('user', JSON.stringify(formData));
            */
        }
    }

    return (
        <section className="bg-[#180101] min-h-screen w-full flex flex-row items-center justify-center">
            <div className="bg-stone-100 w-[75vw] md:w-[50vw] lg:w-[75%] h-[80vh] flex flex-row items-center rounded-[10px]">
                <div className="hidden lg:block w-[50%] h-full">
                    <img src={TailorShop} className="w-full h-full rounded-l-[10px]"/>
                </div>
                
                <div className="w-full lg:w-[50%] h-full py-[1rem] px-[1rem]">
                    <div className="w-full flex flex-row justify-center py-4"><img src={Logo} className="w-[6rem] h-[6rem]" /></div>
                    <h1 className="text-3xl text-[#F28928] text-center font-medium pb-[1rem] capitalize">Let us know you!</h1>
                    <form className="text-[#262626]" onSubmit={ handleRegister }>
                        <p className="pb-4 w-full flex flex-col items-center">
                            <label htmlFor="email" className="block pb-1 w-[80%] text-left">
                                Email Id:
                            </label>
                            <input 
                                type="text" 
                                id="email" 
                                name="email"
                                onChange={ handleChange }
                                className="bg-stone-300 w-[80%] h-[2rem] focus:outline-none border-[#180101] rounded-md px-2 focus:border-b-2"
                                autoComplete="username"
                                required
                            />
                        </p>
                        {/* <p className="pb-4 w-full flex flex-col items-center">
                            <label htmlFor="username" className="block pb-1 w-[80%] text-left">
                                Username:
                            </label>
                            <input 
                                type="text" 
                                id="username"
                                name="username"
                                onChange={ handleChange }
                                className="bg-stone-300 w-[80%] h-[2rem] focus:outline-none border-[#180101] rounded-md px-2 focus:border-b-2"
                                autoComplete="username"
                                required
                            />
                        </p> */}

                        <p className="pb-4 w-full flex flex-col items-center">
                            <label htmlFor="password" className="block pb-1 w-[80%] text-left">
                                Password:
                            </label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password"
                                onChange={ handleChange }
                                className="bg-stone-300 w-[80%] h-[2rem] focus:outline-none border-[#180101] rounded-md px-2 focus:border-b-2"
                                autoComplete="current-password"
                                required
                            />
                        </p>

                        <p className="w-[90%] text-right pb-8">
                            <button className="bg-[#262626] text-stone-100 px-4 py-2 rounded-md">
                                Register
                            </button>
                        </p>
                        { isIncomplete && <p className="w-full text-center text-pink-700 font-semibold">!! Use a Stronger password !!</p>}
                        <p className="w-[100%] text-[#F28928] text-center pb-4">
                            <button className="" onClick={handleToSite}>Back to Site</button>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    )
}