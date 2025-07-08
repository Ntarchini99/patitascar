const FeaturesSection = () => {
    return (
        <section className="w-full bg-[#f0bebe] py-16 px-4 sm:px-6 md:px-8 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Imagen teléfono */}
                <div className="flex justify-center">
                    <div className="w-full max-w-[300px] sm:max-w-[350px] lg:w-[386px]">
                        <div className="relative aspect-[386/735] w-full">
                            <div className="absolute inset-0">
                                <div className="absolute inset-1 bg-[#020000] rounded-[50px] border-2 border-[#e7e7e7] shadow-lg" />
                            </div>
                            <img
                                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-[45px]"
                                alt="Screen"
                                src="https://i.postimg.cc/pLjmD54N/replace-this.png"
                            />
                        </div>
                    </div>
                </div>

                {/* Texto + beneficios */}
                <div className="space-y-12">
                    {/* Título + descripción */}
                    <div>
                        <h2 className="text-[#091133] text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-center lg:text-left">
                            ¿Cansado de que tu mascota viaje incómoda y estresada?
                        </h2>
                        <p className="text-[#091133] text-base sm:text-lg lg:text-xl text-center lg:text-left">
                            En Patitas Car, sentimos placer en brindar viajes seguros y felices para tu mejor amigo. Somos expertos en transporte de mascotas y ofrecemos un servicio personalizado y de calidad.
                        </p>
                    </div>

                    {/* Beneficios */}
                    <div className="space-y-8">
                        {/* Beneficio 1 */}
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-9 h-9 bg-[url('https://i.postimg.cc/wxbMZkd8/Icon.png')] bg-cover" />
                                <h3 className="text-xl font-semibold text-colourmainblue-900">
                                    Puntualidad y seriedad
                                </h3>
                            </div>
                            <p className="text-sm text-colourmaingrey-600 pl-12 lg:pl-0">
                                Llegamos a tiempo a cada llamado y te mantenemos informado durante todo el trayecto.
                            </p>
                        </div>

                        {/* Beneficio 2 */}
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-9 h-9 bg-[url('https://i.postimg.cc/tJ7T7sWM/Icon.png')] bg-cover" />
                                <h3 className="text-xl font-semibold text-[#091133]">
                                    Precios competitivos
                                </h3>
                            </div>
                            <p className="text-sm text-colourmaingrey-600 pl-12 lg:pl-0">
                                Porque el bienestar de tu mascota no tiene por qué ser caro.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
