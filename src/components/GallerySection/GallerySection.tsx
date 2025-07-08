import { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "../../components/ui/card";

type Pet = {
    name: string;
    age: string;
    trip: string;
    location: string;
};

type GalleryCard = {
    src: string;
    alt: string;
    pet: Pet;
};

const galleryCards: GalleryCard[] = [
    {
        src: "https://i.postimg.cc/L65bwYWq/Imagen-de-Whats-App-2025-07-07-a-las-20-46-37-012c5f53.jpg",
        alt: "Frame",
        pet: { name: "Luna", age: "3 años", trip: "Paseo al parque", location: "Palermo, Bs As" },
    },
    {
        src: "https://i.postimg.cc/JhMcwShT/Imagen-de-Whats-App-2025-07-07-a-las-20-50-22-2aa18740.jpg",
        alt: "Frame",
        pet: { name: "Max", age: "5 años", trip: "Visita al veterinario", location: "Recoleta, Bs As" },
    },
    {
        src: "https://i.postimg.cc/zfKM7sc0/Imagen-de-Whats-App-2025-07-07-a-las-20-47-11-0cf72945.jpg",
        alt: "Frame",
        pet: { name: "Ragnar", age: "4 años", trip: "Camino a la guardería", location: "Tigre, Bs As" },
    },
    {
        src: "https://i.postimg.cc/W37yLMjZ/IMG-20250620-WA0002.jpg",
        alt: "Frame",
        pet: { name: "Scarlet", age: "1 año", trip: "Mudanza", location: "Garín, Bs As" },
    },
    {
        src: "https://i.postimg.cc/vZpkWY34/IMG-20250620-WA0004.jpg",
        alt: "Frame",
        pet: { name: "Milo", age: "2 años", trip: "Aventura en la playa", location: "Mar del Plata" },
    },
    {
        src: "https://i.postimg.cc/hjnY5CFg/IMG-20250629-WA0002.jpg",
        alt: "Frame",
        pet: { name: "Sasha", age: "3 años", trip: "Excursión al campo", location: "Córdoba" },
    },
    {
        src: "https://i.postimg.cc/yxQrWsDY/IMG-20250707-WA0004.jpg",
        alt: "Frame",
        pet: { name: "Toby", age: "6 años", trip: "Viaje a la montaña", location: "Mendoza" },
    },
    {
        src: "https://i.postimg.cc/brNBzsNB/IMG-20250707-WA0013.jpg",
        alt: "Frame",
        pet: { name: "Nina", age: "2 años", trip: "Día de juegos", location: "La Plata" },
    },
    {
        src: "https://i.postimg.cc/KcJW0r0S/IMG-20250707-WA0014.jpg",
        alt: "Frame",
        pet: { name: "Rocky", age: "4 años", trip: "Paseo en bote", location: "Tandil" },
    },
    {
        src: "https://i.postimg.cc/W3pnZxLD/Imagen-de-Whats-App-2025-07-07-a-las-20-50-43-33a4013e.jpg",
        alt: "Frame",
        pet: { name: "Lola", age: "3 años", trip: "Visita al lago", location: "Bariloche" },
    },
    {
        src: "https://i.postimg.cc/dQxB7WW1/Imagen-de-Whats-App-2025-07-07-a-las-20-50-22-09652e1b.jpg",
        alt: "Frame",
        pet: { name: "Simba", age: "1 año", trip: "Primera aventura", location: "Buenos Aires" },
    },
];

const LeftArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
);

const RightArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);

const GallerySection = () => {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const [visibleCards, setVisibleCards] = useState(6);
    const [cardWidth, setCardWidth] = useState(220);
    const [showArrows, setShowArrows] = useState(true);

    useEffect(() => {
        const updateLayout = () => {
            const screenWidth = window.innerWidth;
            
            if (screenWidth < 640) { // sm
                setVisibleCards(1);
                setCardWidth(280);
                setShowArrows(false);
            } else if (screenWidth < 768) { // md
                setVisibleCards(2);
                setCardWidth(200);
                setShowArrows(true);
            } else if (screenWidth < 1024) { // lg
                setVisibleCards(3);
                setCardWidth(200);
                setShowArrows(true);
            } else if (screenWidth < 1280) { // xl
                setVisibleCards(4);
                setCardWidth(200);
                setShowArrows(true);
            } else { // 2xl
                setVisibleCards(6);
                setCardWidth(220);
                setShowArrows(true);
            }
        };

        updateLayout();
        window.addEventListener('resize', updateLayout);
        return () => window.removeEventListener('resize', updateLayout);
    }, []);

    const GAP = 24;
    const containerWidth = visibleCards * cardWidth + (visibleCards - 1) * GAP;
    const scrollDistance = cardWidth + GAP;

    const scrollLeft = () => {
        if (!carouselRef.current) return;
        carouselRef.current.scrollBy({ left: -scrollDistance, behavior: "smooth" });
    };

    const scrollRight = () => {
        if (!carouselRef.current) return;
        carouselRef.current.scrollBy({ left: scrollDistance, behavior: "smooth" });
    };

    return (
        <section className="w-full bg-[#f0bebe] py-8 md:py-16 px-4 flex flex-col items-center relative">
            <h2 className="[font-family:'Schoolbell',Helvetica] text-2xl md:text-4xl text-center mb-6 md:mb-8">
                Galería de aventuras
            </h2>

            <div className="flex items-center w-full max-w-7xl">
                {/* Flecha izquierda */}
                {showArrows && (
                    <button
                        onClick={scrollLeft}
                        aria-label="Scroll izquierda"
                        className="flex p-2 bg-white rounded-full shadow-md hover:bg-gray-100 mr-2 md:mr-4 flex-shrink-0"
                    >
                        <LeftArrowIcon />
                    </button>
                )}

                {/* Carrusel */}
                <div className="w-full overflow-hidden">
                    <div
                        ref={carouselRef}
                        className="flex overflow-x-auto gap-4 md:gap-6 scroll-smooth scrollbar-hide snap-x snap-mandatory pb-2"
                        style={{ 
                            width: showArrows ? containerWidth : '100%',
                            maxWidth: '100%'
                        }}
                    >
                        {galleryCards.map((card, i) => (
                            <Card
                                key={i}
                                className="flex-shrink-0 snap-start bg-white border-4 border-[#f0bebe] shadow-md overflow-hidden"
                                style={{ 
                                    width: cardWidth, 
                                    height: 'auto',
                                    minWidth: cardWidth
                                }}
                            >
                                <CardContent className="p-0 w-full">
                                    <img
                                        src={card.src}
                                        alt={card.alt}
                                        className="w-full h-64 md:h-80 object-cover"
                                    />
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Flecha derecha */}
                {showArrows && (
                    <button
                        onClick={scrollRight}
                        aria-label="Scroll derecha"
                        className="flex p-2 bg-white rounded-full shadow-md hover:bg-gray-100 ml-2 md:ml-4 flex-shrink-0"
                    >
                        <RightArrowIcon />
                    </button>
                )}
            </div>

            {/* Indicador de scroll en móvil */}
            {!showArrows && (
                <div className="mt-4 text-center text-sm text-gray-600">
                    Desliza para ver más →
                </div>
            )}
        </section>
    );
};

export default GallerySection;