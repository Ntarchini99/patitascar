import { Menu, X } from 'lucide-react';
import { PawPrint } from 'phosphor-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSmoothScroll = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        targetId: string
    ): void => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300
    ${scrolled ? 'bg-gray-400 bg-opacity-90' : 'md:bg-transparent bg-gray-400'}`}
        >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <a
                            href="#inicio"
                            onClick={(e) => handleSmoothScroll(e, 'inicio')}
                            className="flex-shrink-0 flex items-center cursor-pointer"
                        >
                            <PawPrint size={32} color="white" weight="fill" className="mr-2" />
                            <span className="font-bold text-xl text-white [font-family:'Schoolbell',Helvetica]">
                                Patitas Car
                            </span>
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {[
                                { id: 'inicio', label: 'Inicio' },
                                { id: 'nosotros', label: 'Nosotros' },
                                { id: 'servicios', label: 'Servicios' },
                                { id: 'galeria', label: 'Clientes' },
                                { id: 'contacto', label: 'Contacto', highlight: true },
                            ].map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={(e) => handleSmoothScroll(e, item.id)}
                                    className={`${item.highlight
                                        ? 'bg-[#5bb897] text-white px-4 py-2 rounded-md'
                                        : 'text-white hover:text-[#5bb897] px-3 py-2'
                                        } text-sm font-medium transition-colors duration-200 cursor-pointer`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#5bb897]"
                        >
                            {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-400 backdrop-blur-sm border-t border-white/20">
                    {[
                        { id: 'inicio', label: 'Inicio' },
                        { id: 'nosotros', label: 'Nosotros' },
                        { id: 'servicios', label: 'Servicios' },
                        { id: 'galeria', label: 'Clientes' },
                        { id: 'contacto', label: 'Contacto', highlight: true },
                    ].map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => handleSmoothScroll(e, item.id)}
                            className={`${item.highlight
                                ? 'bg-[#5bb897] text-white block px-3 py-2 rounded-md mx-3 my-2'
                                : 'text-white block px-3 py-2'
                                } text-base font-medium transition-colors duration-200 cursor-pointer`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
