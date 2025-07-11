import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-auto pt-[64px] md:pt-0 bg-[#f0bebe]" id="inicio">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[634px]">
        <img
          className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
            isLoaded 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-110'
          }`}
          alt="Rectangle"
          src="https://i.postimg.cc/gk6tBJt3/tadeusz-lakota-Trl-HGv-VLtb-A-unsplash.jpg"
        />
        <h1 
          className={`absolute top-12 sm:top-16 md:top-20 lg:top-[98px] left-1/2 transform -translate-x-1/2 whitespace-nowrap [font-family:'Schoolbell',Helvetica] font-normal text-[#5bb897] text-3xl sm:text-4xl md:text-6xl lg:text-8xl tracking-[2px] sm:tracking-[3px] md:tracking-[4px] lg:tracking-[5px] leading-tight lg:leading-[110px] text-center transition-all duration-1200 ease-out delay-300 ${
            isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          SOBRE RUEDAS Y CON AMOR
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;