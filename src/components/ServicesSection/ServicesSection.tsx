const serviceFeatures = [
    {
        title: "Transporte local y larga distancia",
        description:
            "Realizamos traslados a veterinarias, exposiciones, mudanzas, aeropuertos.",
        iconSrc: "https://i.postimg.cc/GmLfDvHt/location-1.png",
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
    return (
        <section className="w-full bg-[#f0bebe] py-16 px-4 lg:px-32" id="servicios">
            <h2 className="[font-family:'Schoolbell',Helvetica] text-3xl text-center lg:text-left text-[#091133] mb-12">
                Nuestros servicios
            </h2>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="lg:w-1/2 space-y-6">
                    <p className="text-base text-[#050007]">
                        En Patitas Car, nos ocupamos de tu mascota con la dedicación y el cariño que se merece. Por eso, ofrecemos una variedad de servicios diseñados para garantizar su seguridad, comodidad y bienestar en cada viaje.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {serviceFeatures.map((feature, i) => (
                            <div key={i}>
                                <img src={feature.iconSrc} alt={feature.iconAlt} className="w-10 h-10 mb-2" />
                                <h3 className="font-medium text-[#091133]">{feature.title}</h3>
                                <p className="text-sm text-[#5d6970]">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:w-1/2 flex justify-center">
                    <img
                        src="https://i.postimg.cc/52sRSjC3/Camioneta.png"
                        alt="Camioneta"
                        className="w-full max-w-[500px] rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
