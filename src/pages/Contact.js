function Contact() {
    return (
        <>
            <div class="2xl:mx-auto 2xl:container mx-4 py-16">
                <div class="w-full relative flex items-center justify-center">
                    <img src="https://i.ibb.co/4sYZ8gC/img-2.png" alt="dining" class="w-full h-full absolute z-0 hidden xl:block" />
                    <img src="https://i.ibb.co/bbS3J9C/pexels-max-vakhtbovych-6301182-1.png" alt="dining" class="w-full h-full absolute z-0 hidden sm:block xl:hidden" />
                    <img src="https://i.ibb.co/JKkzGDs/pexels-max-vakhtbovych-6301182-1.png" alt="dining" class="w-full h-full absolute z-0 sm:hidden" />
                    <div class="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
                        <h1 class="text-4xl font-semibold leading-9 text-white text-center">¡No te lo pierdas!</h1>
                        <p class="text-base leading-normal text-center text-white mt-6">
                            Suscríbase a su boletín para mantenerse informado. Nuestro boletín se envía una vez en<br />
                            una semana todos los viernes, así que suscríbase para recibir las últimas noticias y actualizaciones.
                        </p>
                        <div class="sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
                            <input class="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white" placeholder="E-mail" />
                            <button class="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75">Suscribirse</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;