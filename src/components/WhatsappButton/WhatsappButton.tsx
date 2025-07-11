import { useState } from 'react';

const WhatsAppFloatingButton: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleWhatsAppClick = (): void => {
        const message = "¡Hola! Me interesa conocer más sobre los servicios de Patitas Car 🐾";
        const whatsappUrl = `https://wa.me/${5491123218193}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="fixed bottom-6 right-4 sm:right-10 z-50">
            <button
                onClick={handleWhatsAppClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative group bg-transparent border-none outline-none"
            >
                <img
                    src="https://i.postimg.cc/63jg6q9q/wsp.png"
                    alt="WhatsApp"
                    className="w-16 h-16 transition-transform duration-500 ease-in-out cursor-pointer hover:scale-110"
                    style={{
                        filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))',
                        animation: isHovered ? 'none' : 'float 3s ease-in-out infinite',
                        animationPlayState: isHovered ? 'paused' : 'running',
                    }}
                />
                <div
                    className={`
            absolute right-full mr-3 top-1/2 transform -translate-y-1/2
            bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg
            transition-all duration-300
            ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}
            pointer-events-none
            max-w-xs sm:max-w-sm
            whitespace-normal sm:whitespace-nowrap
          `}
                    style={{ whiteSpace: 'normal' }}
                >
                    ¡Contáctanos por WhatsApp!
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
                </div>
            </button>

            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
        </div>
    );
};

export default WhatsAppFloatingButton;
