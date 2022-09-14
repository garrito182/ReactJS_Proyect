import "../App.css";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";

function NavBar() {
    return (
        <header>
            <div class="flex flex-wrap place-items-center h-screen">
                <section class="relative mx-auto">
                    <nav class="flex justify-between bg-gray-900 text-white w-screen">
                        <div class="px-5 xl:px-12 py-6 flex w-full items-center">
                            <Link to="/" ><a class="text-3xl font-bold font-heading">
                                <img class="h-9" src="./enduro-logo.png"></img>
                            </a></Link>
                            <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                                <Link to="/"><li><a class="hover:text-gray-200" >Bicicletas</a></li></Link>
                                <Link to="/category/1"><li><a class="hover:text-gray-200" >Specialized</a></li></Link>
                                <Link to="/category/2"><li><a class="hover:text-gray-200" >Canyon</a></li></Link>
                                <Link to="/contact"><li><a class="hover:text-gray-200" >Contacto</a></li></Link>
                            </ul>
                            <div class="hidden xl:flex items-center space-x-5 items-center">
                                <CartWidget />
                            </div>
                        </div>
                        <a class="xl:hidden flex mr-6 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span class="flex absolute -mt-5 ml-4">
                                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                                </span>
                            </span>
                        </a>
                        <a class="navbar-burger self-center mr-12 xl:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </a>
                    </nav>
                </section>
            </div>
        </header>
    );
}

export default NavBar;
