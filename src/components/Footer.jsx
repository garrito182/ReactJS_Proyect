import "../App.css";
import React from "react";

function Footer() {
    return (
        <footer className="relative bg-blueGray-200 pt-8 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="mt-6 lg:mb-0 mb-6">
                            <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fab fa-twitter"></i></button><button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fab fa-facebook-square"></i></button><button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fab fa-dribbble"></i></button><button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fab fa-github"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                            Copyright © <span id="get-current-year">2022</span>
                            <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank"> Creado por 
                                <a href="https://www.creative-tim.com?ref=njs-profile" className="text-blueGray-500 hover:text-blueGray-800"> Martin Garro</a>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;