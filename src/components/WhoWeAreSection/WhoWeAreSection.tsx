import { useState, useEffect, useRef } from 'react';

const WhoWeAreSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
      className="w-full bg-[#f0bebe] py-16 px-4 sm:px-6 md:px-8 lg:px-32"
      id="nosotros"
    >
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="lg:w-2/3 space-y-4">
          <div className="mb-12">
            <h2 className={`[font-family:'Schoolbell',Helvetica] font-normal text-[#091133] text-3xl sm:text-4xl md:text-5xl lg:text-[50px] tracking-wide transition-all duration-1000 ease-out ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
              }`}>
              Quiénes somos
            </h2>
          </div>

          <p className={`[font-family:'Roboto',Helvetica] text-[#050007] text-[18px] sm:text-[20px] lg:text-[24px] leading-relaxed transition-all duration-1000 ease-out delay-200 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }`}>
            Nuestras mascotas África, Roberto y Vitto no son solo nuestros gatitos. Son parte de nuestra familia, nuestros compañeros de vida, y la fuente diaria de un amor que no se explica, se siente. Sus ronroneos, miradas y gestos cargados de ternura nos inspiran a darles siempre lo mejor.
          </p>

          <p className={`[font-family:'Roboto',Helvetica] text-[#050007] text-[18px] sm:text-[20px] lg:text-[24px] leading-relaxed transition-all duration-1000 ease-out delay-400 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }`}>
            De ese amor profundo nació Patitas Car, el servicio de transporte especializado en mascotas, pensado para quienes entienden que cada patita merece respeto, cuidado y confort.
          </p>

          <p className={`[font-family:'Roboto',Helvetica] text-[#050007] text-[18px] sm:text-[20px] lg:text-[24px] leading-relaxed transition-all duration-1000 ease-out delay-600 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }`}>
            En Patitas Car, no solo llevamos animales de un punto a otro. Llevamos historias, afectos, latidos. Porque tu mascota es única, y su viaje también debe serlo.
          </p>

          <div className={`mt-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start transition-all duration-1000 ease-out delay-800 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }`}>
            <a
              href="https://wa.me/5491123218193"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[220px] sm:w-[220px] md:w-[170px] lg:w-[175px] h-12 lg:h-[53px] bg-[#5bb897] rounded-sm hover:bg-[#4a9d7e] transition-colors flex items-center justify-center cursor-pointer"
            >
              <span className="[font-family:'Roboto',Helvetica] font-medium text-[#050007] text-base lg:text-[17px] text-center tracking-[0] leading-[26px]">
                Contactanos hoy
              </span>
            </a>
          </div>
        </div>

        <div className={`lg:w-1/3 flex justify-center transition-all duration-1200 ease-out delay-300 ${isVisible
            ? 'opacity-100 translate-x-0 scale-100'
            : 'opacity-0 translate-x-8 scale-95'
          }`}>
          <img
            className="w-full max-w-[400px] h-auto object-cover rounded-lg"
            alt="Collage"
            src="https://i.postimg.cc/tgz8fDwh/Collage.png"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;