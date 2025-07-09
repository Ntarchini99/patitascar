import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect } from "react";
import Swal from "sweetalert2";

const ContactSection = () => {
  // Poner tu ID de Formspree aquí:
  const [state, handleSubmit] = useForm("xnnvkozl");

  useEffect(() => {
    if (state.succeeded) {
      // Mostrar SweetAlert
      Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado!',
        text: 'Pronto nos comunicaremos con usted.',
        confirmButtonText: 'OK',
        confirmButtonColor: '#5BB897'
      }).then(() => {
        // Reset del formulario después de cerrar el alert
        const form = document.getElementById('contact-form');
        if (form && form instanceof HTMLFormElement) {
          form.reset();
        }
      });
    }
  }, [state.succeeded]);

  return (
    <section className="w-full bg-[#f0bebe] py-16 px-4" id="contacto">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Contáctenos</h2>
          <p>Comuníquese con nosotros para programar un traslado o realizar consultas.</p>
          <img
            src="https://i.postimg.cc/zXYyPKv7/undraw-mention-6k5d.png"
            alt="Imagen contacto"
            className="w-full max-w-sm rounded-lg mt-4 hidden lg:block"
          />
        </div>

        <Card className="bg-white p-6 border-4 border-[#091133]">
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