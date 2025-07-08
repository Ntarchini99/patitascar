import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";

const ContactSection = () => {
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
                    <form className="space-y-4" onSubmit={(e) => {
                        e.preventDefault();
                        alert("Formulario enviado!");
                    }}>
                        <div>
                            <label className="block text-sm mb-1">Nombre y apellido</label>
                            <Input className="border border-gray-700 shadow-sm bg-white focus:ring-2 focus:ring-[#5bb897]" />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Teléfono</label>
                            <Input className="border border-gray-700 shadow-sm bg-white focus:ring-2 focus:ring-[#5bb897]" />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Email</label>
                            <Input className="border border-gray-700 shadow-sm bg-white focus:ring-2 focus:ring-[#5bb897]" />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Mensaje</label>
                            <Textarea
                              rows={4}
                              className="border border-gray-700 shadow-sm bg-white focus:ring-2 focus:ring-[#5bb897]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-[#5BB897] text-white px-6 py-2 rounded hover:bg-[#05081a] transition"
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
