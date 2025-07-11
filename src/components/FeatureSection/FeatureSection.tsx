import { useState, useEffect, useRef } from 'react';

const FeaturesSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px 0px -50px 0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-[#f0bebe] py-16 px-4 sm:px-6 md:px-8 lg:px-24"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`flex justify-center transition-all duration-1200 ease-out delay-200 ${isVisible
                        ? 'opacity-100 translate-x-0 scale-100'
                        : 'opacity-0 -translate-x-8 scale-95'
                    }`}>
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
                <div className="space-y-12">
                    <div>
                        <h2 className={`text-[#091133] text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-center lg:text-left transition-all duration-1000 ease-out ${isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                            }`}>
                            Ventajas que marcan la diferencia
                        </h2>
                        <p className={`text-[#091133] text-base sm:text-lg lg:text-xl text-center lg:text-left transition-all duration-1000 ease-out delay-300 ${isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                            }`}>
                            Creemos que cada mascota merece viajar con tranquilidad, comodidad y cariño. Nos mueve el compromiso de hacer que cada trayecto sea una experiencia segura y libre de estrés, tanto para ellos como para vos.
                            <br />
                            <br />
                            Por eso, detrás de cada viaje hay dedicación, atención personalizada y respeto por el vínculo que tenés con tu mejor amigo. No es solo llegar a destino, es hacerlo con empatía, puntualidad y el corazón puesto en cada detalle
                        </p>
                    </div>
                    <div className="space-y-8">
                        <div className={`transition-all duration-1000 ease-out delay-500 ${isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                            }`}>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-9 h-9 bg-[url('https://i.postimg.cc/wxbMZkd8/Icon.png')] bg-cover" />
                                <h3 className="text-xl font-semibold text-colourmainblue-900">
                                    Puntualidad
                                </h3>
                            </div>
                            <p className="text-sm text-colourmaingrey-600 pl-12 lg:pl-0">
                                Cada trayecto comienza a tiempo y se vive con total transparencia. Siempre sabés cómo va tu mascota.
                            </p>
                        </div>
                        <div className={`transition-all duration-1000 ease-out delay-700 ${isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                            }`}>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-9 h-9 bg-[url('https://i.postimg.cc/tJ7T7sWM/Icon.png')] bg-cover" />
                                <h3 className="text-xl font-semibold text-[#091133]">
                                    Precios transparentes
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