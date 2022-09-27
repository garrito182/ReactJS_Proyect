import "../App.css";
import React from "react"
import { Link } from "react-router-dom";

const Order = () => {

    return (
        <>
            <section class="bg-gray-50">
                <div
                    class="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex"
                >
                    <div class="max-w-xl mx-auto text-center">
                        <h1 class="text-3xl font-extrabold sm:text-5xl">
                            <strong class="font-extrabold text-red-700 sm:block">
                                Felicitaciones!
                            </strong>
                        </h1>
                        <p class="mt-4 sm:leading-relaxed sm:text-xl">
                            Su compra ha sido realizada con exito!
                        </p>
                        <div class="flex flex-wrap justify-center gap-4 mt-8">
                            <Link to="/">
                            <button class="block mt-4 w-full px-12 py-3 text-sm font-medium text-red-600 rounded shadow sm:w-auto hover:text-red-700 active:text-red-500 focus:outline-none focus:ring">
                                Volver al inicio
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Order;