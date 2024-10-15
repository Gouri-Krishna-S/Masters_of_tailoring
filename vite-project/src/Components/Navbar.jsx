
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../firebase";
import { auth } from "../firebase";
import { signOut } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';

function Navbar({ isClicked, isLogged }) 
{

    const navigate = useNavigate();

    const handleLogOut = async(e) =>{
        e.preventDefault();
        
        await signOut(auth);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
        
    }
    const navItems = "capitalize text-[1.25rem] md:text-lg text-stone-100 shadow-text-light hover:text-[#F28928] leading-10";
    const btnStyles = "text-[#F28928] text-[1rem] text-left font-semibold"

    
    function handleDelete()
    {
        const user = auth.currentUser;
        if(user){
            deleteUser(user)
            .then(()=>{
                navigate("/login");
            })
            .catch((e)=>{
                console.log(e);
            })
        }
    }

    function handleRegister()
    {
        navigate('/register')
    }

    function handleLogin()
    {
        navigate('/login')
    }

    return (
        <div className={`p-1rem fixed top-full right-0 w-3/4 h-[calc(100svh-5rem)] bg-[#131313b5] backdrop-blur-[4px] md:hidden ${isClicked ? 'flex animated' : 'hidden'} flex-col items-start pl-[0.5rem] gap-[1rem] rounded-bl-[1.5rem]`}>
            <div className="text-stone-100 flex flex-col gap-1 pl-[1rem] lg:pl-[2rem] pt-[1rem]">
                {!isLogged ? (
                    <>
                        <button 
                            className={btnStyles} 
                            onClick={ handleRegister }
                        >
                            Sign up
                        </button>
                        <p className="text-[.75rem]">Already have an account? 
                        <button 
                            className={btnStyles} 
                            onClick={ handleLogin }
                        >
                            Login
                        </button>
                        </p>
                    </>
                ) : (
                    <div className="h-[3rem] pt-4 flex flex-row gap-2 items-center">
                        <div className="bg-amber-700 rounded-full w-[3rem] h-[3rem] flex flex-row items-center justify-center">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div className="flex flex-col gap-0">
                            <h1 className="text-[1rem]">{isLogged.email}</h1>
                            <p className="text-[0.75rem]">Account No</p>
                        </div>
                        
                    </div>
                )}
            </div>
            <dl className="flex flex-col gap-2 p-4 text-left">
                {
                    isLogged ? 
                    <>
                        <dd>
                            <a className={navItems} href="/cart">
                                My Cart
                            </a>
                        </dd>
                        <dd>
                            <a className={navItems}>
                                My Wishlist
                            </a>
                        </dd>
                    </>
                    : ''
                }
                <dd>
                    <a href="#about" className={navItems}>
                        About
                    </a>
                </dd>
                <dd>
                    <a href="#products" className={navItems}>
                        Products
                    </a>
                </dd>
                <dd>
                    <a href="#collections" className={navItems}>
                        Collections
                    </a>
                </dd>
                <dd>
                    <a href="#contact" className={navItems}>
                        Contact
                    </a>
                </dd>

                {
                    isLogged ? 
                    <>

                        <dd>
                        <button 
                            className={navItems} 
                            onClick={ handleLogOut }
                        >
                            Log Out
                        </button>
                        </dd>

                        <dd>
                        <button 
                            className={navItems} 
                            onClick={ handleDelete }
                        >
                            Delete Account
                        </button>
                        </dd>

                    </>
                    : ''
                }
            </dl>
        </div>
    )
}

export default Navbar;