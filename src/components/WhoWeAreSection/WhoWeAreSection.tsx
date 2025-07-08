import { Button } from "../ui/button";

const WhoWeAreSection = () => {
  return (
    <section className="w-full bg-[#f0bebe] py-16 px-4 sm:px-6 md:px-8 lg:px-32">
      {/* Contenido */}
      <div className="flex flex-col lg:flex-row gap-8 items-center">

        {/* Texto */}
        <div className="lg:w-2/3 space-y-4">
          <div className="mb-12">
            <h2 className="[font-family:'Schoolbell',Helvetica] font-normal text-[#091133] text-3xl sm:text-4xl md:text-5xl lg:text-[50px] tracking-wide ">
              Quiénes somos
            </h2>
          </div>
          <p className="[font-family:'Roboto',Helvetica] text-[#050007] text-base sm:text-lg lg:text-xl leading-relaxed">
            Nuestros amados gatitos África, Roberto y Vitto nos regalan ese cariño incondicional latiendo en cada ronroneo y en cada gesto, llenandonos el alma de amor y ternura.
          </p>
          <p className="[font-family:'Roboto',Helvetica] text-[#050007] text-base sm:text-lg lg:text-xl leading-relaxed">
            De ese grandioso sentimiento y el disfrutar de nuestros viajes nació Patitas Car, el transporte de mascotas pensado por y para ellos.
          </p>
          <p className="[font-family:'Roboto',Helvetica] text-[#050007] text-base sm:text-lg lg:text-xl leading-relaxed">
            Porque son parte de tu familia, dales lo que realmente se merecen.
          </p>

          {/* Botón */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start ">
            <Button className="w-full sm:w-auto lg:w-[175px] h-12 lg:h-[53px] bg-[#5bb897] rounded-sm hover:bg-[#4a9d7e] transition-colors">
              <span className="[font-family:'Roboto',Helvetica] font-medium text-[#050007] text-base lg:text-[17px] text-center tracking-[0] leading-[26px]">
                Contactanos hoy
              </span>
            </Button>
          </div>
        </div>

        {/* Imagen */}
        <div className="lg:w-1/3 flex justify-center">
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
