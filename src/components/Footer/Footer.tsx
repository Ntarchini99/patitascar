import { Instagram, Facebook, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-gray-700 py-6 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Diseñado por */}
        <div className="text-sm text-center sm:text-left">
          Diseñado por{" "}
          <a
            href="https://www.instagram.com/verttexdigital/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:text-[#4a9a7a] transition-colors"
          >
            Verttex Agencia
          </a>
        </div>

        {/* Redes y Teléfono */}
        <div className="flex flex-row items-center gap-6">
          {/* Redes */}
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/patitas_car/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/PatitasCaroficial"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>

          {/* Teléfono */}
          <a
            href="tel:+5491123218193"
            aria-label="Teléfono"
            className="flex items-center space-x-2 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>011 2321 8193</span>
          </a>
        </div>

        {/* Logo (oculto en móvil) */}
        <div className="hidden sm:flex justify-center sm:justify-end">
          <img
            src="https://i.postimg.cc/d3WbwxPp/Dise-o-sin-t-tulo-removebg-preview.png"
            alt="Logo Patitas Car"
            className="h-12 w-auto"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
