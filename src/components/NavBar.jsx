import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";

function NavBar() {
    return (
        <header>
            <div className="flex flex-wrap place-items-center h-screen">
                <section className="relative mx-auto">
                    <nav className="flex justify-between bg-gray-900 text-white w-screen">
                        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
                            <Link to="/" ><a className="text-3xl font-bold font-heading">
                                <img className="h-9" src="../enduro-logo.png"></img>
                            </a></Link>
                            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                                <Link to="/"><li><a className="hover:text-gray-200" >Bicicletas</a></li></Link>
                                <Link to="/category/1"><li><a className="hover:text-gray-200" >Specialized</a></li></Link>
                                <Link to="/category/2"><li><a className="hover:text-gray-200" >Canyon</a></li></Link>
                                <Link to="/contact"><li><a className="hover:text-gray-200" >Contacto</a></li></Link>
                            </ul>
                            <div className="hidden xl:flex items-center space-x-5 items-center">
                                <CartWidget />
                            </div>
                        </div>
                        <a className="xl:hidden flex mr-6 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="flex absolute -mt-5 ml-4">
                                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                                </span>
                            </span>
                        </a>
                    </nav>
                </section>
            </div>
        </header>
    );
}

export default NavBar;
