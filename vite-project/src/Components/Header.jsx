import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Website-logo.png';
import styles from './Header.module.css'
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import firebase from "firebase/compat/app";
import 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../firebase";
import { auth } from "../firebase";
import { signOut } from 'firebase/auth';



function Header({ isLogged })

{
    const navigate = useNavigate();

    const handleLogOut = async(e) =>{
        e.preventDefault();
        
        await signOut(auth);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
        
    }
    const [ isHamClicked, setIsHamClicked ] = useState(false);
    const [ showUserMenu, setShowUserMenu ] = useState(false);
    const menuRef = useRef(null);
    const btnRef = useRef(null);
   
    const btnStyles = "capitalize rounded-[0.5rem] w-[5rem] py-2 blur-background-max hover:text-[#F28928] shadow-text-light";
    const navItems = "capitalize text-[1rem] md:text-lg text-stone-100 shadow-text-light hover:text-[#F28928]";

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && !btnRef.current.contains(event.target)) {
                setShowUserMenu(false);
            }
        };

        if (showUserMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Remove event listener when the component is unmounted or menu is hidden
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showUserMenu]);
    

    function handleClickShow()
    {
        setIsHamClicked(prevState => !prevState);
    }

    function handleUserMenu()
    {
        setShowUserMenu(prevState => !prevState);
    }

    function handleRegister()
    {
        navigate('/register')
    }

    function handleLogin()
    {
        navigate('/login')
    }

    function handleLogout()
    {
        // Logout
        navigate('/login')
    }

    return (
        <header className={`${isHamClicked ? 'bg-[#131313b5] animated' : 'bg-[#13131344]'} w-full h-[5rem] absolute top-0 left-0 flex flex-row  backdrop-blur-[4px] border-b-[2px] border-stone-100 items-center justify-between p-[1rem] z-50`}>
            <div className="flex flex-row items-center justify-center gap-2">
                <div className="h-16 w-16">
                    <img src={ Logo } alt="Company's logo" />
                </div>
                
                <h1 className='hidden md:block text-2xl font-semibold text-stone-100'><span className='text-stone-700'>Mas</span>tros</h1>
            </div>
            <div>
                <button className={`md:hidden ${styles.menuButton} ${isHamClicked ? styles.active : ''}`} onClick={handleClickShow}>
                    <div className={`${styles.menuIcon}`}></div>
                </button>
                <Navbar isClicked={isHamClicked} isLogged={isLogged} />
            </div>
            
            

            <div className={`hidden md:flex flex-row `}>
                <dl className="flex flex-row items-center justify-center gap-[1.25rem] lg:gap-[2rem]">
                    <dd>
                        <a href="#about" className={ navItems }>
                            About
                        </a>
                    </dd>
                    <dd>
                        <a href="#products" className={ navItems }>
                            Products
                        </a>
                    </dd>
                    <dd>
                        <a href="#collections" className={ navItems }>
                            Collections
                        </a>
                    </dd>
                    <dd>
                        <a href="#contact" className={ navItems }>
                            Contact
                        </a>
                    </dd>
                </dl>
                <div className="text-stone-100 flex flex-row gap-2 pl-[1rem] lg:pl-[2rem] ">
                    { !isLogged ? <>
                        <button 
                            className={btnStyles}
                            onClick={ handleLogin }
                        >
                            Login
                        </button>
                        <button 
                            className={btnStyles}
                            onClick={ handleRegister }    
                        >
                            Sign Up
                        </button>
                        </>
                        :
                        <div className="w-[4rem] h-[3rem] rounded-lg bg-[#13131334] relative px-2">
                            <div className='flex flex-row items-center'>
                                <span className='w-[3rem] h-[3rem] rounded-full text-center flex items-center justify-center'><FontAwesomeIcon icon={faUser} className="text-stone-100 text-lg" /></span>
                                <button 
                                    className="w-[3rem] h-[3rem]" 
                                    onClick={ handleUserMenu }
                                    ref={btnRef}    
                                >
                                    <FontAwesomeIcon icon={faChevronDown} className="text-[#F28928] text-lg" />
                                </button>
                            </div>
                            { showUserMenu ? 
                                    <div className='flex flex-col gap-2 w-[15rem] absolute -left-[275%] bg-[#131313c7] p-4 rounded-[10px]' ref={menuRef}>
                                        <div className="h-[3rem] py-8 flex flex-row gap-2 items-center">
                                        <div className="bg-amber-700 rounded-full w-[3rem] h-[3rem] flex flex-row items-center justify-center">
                                            <FontAwesomeIcon icon={faUser} />
                                        </div>
                                            <div className="flex flex-col gap-0 cursor-default">
                                                <h1 className="text-[1rem]">Name</h1>
                                                <p className="text-[0.75rem]">Account No</p>
                                            </div>
                                        </div>

                                        <dl className="flex flex-col gap-2 py-4 text-left border-t-2 border-[#F28928] cursor-pointer">
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
                                            <dd>

                                                <button 
                                                    className={navItems} 
                                                    onClick={ handleLogout }
                                                >
                                                    Log Out

                                                </button>
                                            </dd>
                                        </dl>
                                    </div>
                                :
                                <></>
                            }
                        </div>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;