import { MapPin, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { motion, useScroll, useTransform } from "framer-motion";

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Formulario enviado');
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="contacto" className="relative py-10 bg-gray-100 text-[#2F4F4F] overflow-hidden">

      <motion.div
        style={{
          scaleX,
          transformOrigin: "right",
        }}
        className="absolute mt-5 inset-0 h-36 lg:h-64 bg-[#F5E427] opacity-70 rounded-l-full pointer-events-none"
      />

      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#2F4F4F] mb-8">CONTACTO</h2>

        <Card className="max-w-4xl mx-auto mb-10 shadow-lg border-2 border-[#2F4F4F] relative z-10">
          <CardHeader>
            <CardTitle className="text-xl text-[#2F4F4F]">Nuestra Información</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <p className="flex items-center justify-center space-x-2">
              <MapPin className="w-5 h-5 text-[#2F4F4F]" />
              <a
                href="https://www.google.com/maps/place/C.E.N.T+18/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2F4F4F] transition-colors"
              >
                J5402AJS, Gral. José María Paz Oeste 993-999, San Juan
              </a>
            </p>
            <p className="flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5 text-[#2F4F4F]" />
              <span className="text-[#2F4F4F]">(0264) 430-7532</span>
            </p>
            <p className="flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5 text-[#2F4F4F]" />
              <span className="text-[#2F4F4F]">cent18@educacion.sanjuan.edu.ar</span>
            </p>
          </CardContent>
        </Card>

        <Card className="max-w-md mx-auto border-2 border-[#2F4F4F] shadow-xl relative z-10">
          <CardHeader>
            <CardTitle className="text-2xl text-[#2F4F4F]">Envíanos un Mensaje</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <Label htmlFor="nombre">Nombre</Label>
                <Input id="nombre" type="text" placeholder="Ingrese su nombre" required />
              </div>
              <div>
                <Label htmlFor="correo">Correo</Label>
                <Input id="correo" type="email" placeholder="Ingrese su correo" required />
              </div>
              <div>
                <Label htmlFor="mensaje">Mensaje</Label>
                <Textarea id="mensaje" placeholder="Escriba su mensaje" rows={4} required />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#2F4F4F] hover:bg-[#2F4F4F] cursor-pointer hover:scale-103 transition"
              >
                Enviar
              </Button>
            </form>
          </CardContent>
        </Card>

      </div>
    </section>
  );
};

export default Contact;
