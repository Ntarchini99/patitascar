import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("xnnvkozl");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado!',
        text: 'Pronto nos comunicaremos con usted.',
        confirmButtonText: 'OK',
        confirmButtonColor: '#5BB897'
      }).then(() => {
        const form = document.getElementById('contact-form');
        if (form && form instanceof HTMLFormElement) {
          form.reset();
        }
      });
    }
  }, [state.succeeded]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
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
      className={`w-full bg-[#f0bebe] py-16 px-4 transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`} 
      id="contacto"
    >
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div 
          className={`space-y-6 transition-all duration-1000 ease-out delay-200 ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-8'
          }`}
        >
          <h2 className="text-3xl font-bold">Contáctenos</h2>
          <p>Comuníquese con nosotros para programar un traslado o realizar consultas.</p>
          <img
            src="https://i.postimg.cc/zXYyPKv7/undraw-mention-6k5d.png"
            alt="Imagen contacto"
            className="w-full max-w-sm rounded-lg mt-4 hidden lg:block"
          />
        </div>

        <Card 
          className={`bg-white p-6 border-4 border-[#091133] transition-all duration-1000 ease-out delay-400 ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-8'
          }`}
        >
          <form id="contact-form" className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm mb-1">Nombre y apellido</label>
              <Input
                id="name"
                type="text"
                name="name"
                className="border border-gray-700 shadow-sm bg-white focus:ring-2 focus:ring-[#5bb897]"
                required
              />
              <ValidationError prefix="Nombre" field="name" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm mb-1">Teléfono</label>
              <Input
                id="phone"
                type="tel"
                name="phone"
                className="border border-gray-700 shadow-sm bg-white focus:ring-2 focus:ring-[#5bb897]"
                required
              />
              <ValidationError prefix="Teléfono" field="phone" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-1">Email</label>
              <Input
                id="email"
                type="email"
                name="email"
                className="border border-gray-700 shadow-sm bg-white focus:ring-2 focus:ring-[#5bb897]"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm mb-1">Mensaje</label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                className="border border-gray-700 shadow-sm bg-white focus:ring-2 focus:ring-[#5bb897]"
                required
              />
              <ValidationError prefix="Mensaje" field="message" errors={state.errors} />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="bg-[#5BB897] text-white px-6 py-2 rounded hover:bg-[#05081a] transition disabled:opacity-50"
            >
              Enviar
            </button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;