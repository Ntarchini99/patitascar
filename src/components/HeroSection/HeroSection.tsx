const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen pt-16 md:pt-[61px] bg-[#f0bebe]">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[634px]">
        <img
          className="w-full h-full object-cover"
          alt="Rectangle"
          src="https://i.postimg.cc/7PznZbPR/perritofondo.png"
        />
        <h1 className="absolute inset-x-4 top-8 sm:top-12 md:top-16 lg:top-[98px] lg:left-[162px] lg:w-[1150px] [font-family:'Schoolbell',Helvetica] font-normal text-[#5bb897] text-3xl sm:text-4xl md:text-6xl lg:text-8xl tracking-[2px] sm:tracking-[3px] md:tracking-[4px] lg:tracking-[5px] leading-tight lg:leading-[110px] text-center lg:text-left">
          SOBRE RUEDAS Y CON AMOR
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
