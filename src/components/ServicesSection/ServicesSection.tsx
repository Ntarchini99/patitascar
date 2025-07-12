import { useState, useEffect, useRef } from 'react';

const serviceFeatures = [
    {
        title: "Transporte local y larga distancia",
        description:
            "Realizamos traslados a veterinarias, exposiciones, mudanzas, aeropuertos.",
        iconSrc: "https://i.postimg.cc/WzP9ghd6/location-1.png",
        iconAlt: "Location",
    },
    {
        title: "Traslado puerta a puerta",
        description: "Peluqueria, traslados desde criaderos, viajes a refugios.",
        iconSrc: "https://i.postimg.cc/m2NqhmZK/patitas-semana-1002-1.png",
        iconAlt: "Patitas semana",
    },
    {
        title: "Seguimiento personalizado",
        description:
            "Te mantendremos informado en todo momento sobre el estado y la ubicación de tu mascota durante el viaje.",
        iconSrc: "https://i.postimg.cc/66ZFx9kW/cbi-camera-pet.png",
        iconAlt: "GPS",
    },
    {
        title: "Vehículos adaptados",
        description:
            "Contamos con vehículos acondicionados para garantizar la comodidad y seguridad de las mascotas durante el viaje.",
        iconSrc: "https://i.postimg.cc/d3Gf2B2k/truck-1.png",
        iconAlt: "Truck",
    },
];

const ServicesSection = () => {
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
            className="w-full bg-[#f0bebe] py-16 px-4 lg:px-32"
            id="servicios"
        >
            <h2 className={`[font-family:'Schoolbell',Helvetica] text-3xl text-center lg:text-left text-[#091133] mb-12 transition-all duration-1000 ease-out ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                }`}>
                Nuestros servicios
            </h2>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="lg:w-1/2 space-y-6">
                    <p className={`text-base text-[#050007] transition-all duration-1000 ease-out delay-200 ${isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                        }`}>
                        Ofrecemos distintas modalidades según tus necesidades, todas con atención personalizada, comunicación constante y estrictos estándares de bienestar animal. Vos solo tenés que decirnos cuándo y dónde, nosotros nos ocupamos del resto con cariño, compromiso y puntualidad.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {serviceFeatures.map((feature, i) => (
                            <div
                                key={i}
                                className={`transition-all duration-1000 ease-out ${isVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8'
                                    }`}
                                style={{
                                    transitionDelay: `${400 + (i * 150)}ms`
                                }}
                            >
                                <img
                                    src={feature.iconSrc}
                                    alt={feature.iconAlt}
                                    className="w-10 h-10 mb-2"
                                />
                                <h3 className="font-medium text-[#091133]">{feature.title}</h3>
                                <p className="text-sm text-[#5d6970]">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    className={`lg:w-1/2 flex justify-center transition-all duration-[1200ms] ease-out delay-300 ${isVisible
                            ? 'opacity-100 translate-x-0 translate-y-[-40px] scale-100'
                            : 'opacity-0 translate-x-8 translate-y-[-40px] scale-95'
                        }`}
                >
                    <img
                        src="https://i.postimg.cc/WbqGT2ts/Screenshot-2-removebg-preview.png"
                        alt="Camioneta"
                        className="w-full max-w-[520px] rounded-lg"
                    />
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;