import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion, useScroll, useTransform } from "framer-motion";
import imgAbout from "@/assets/aboutus.avif"

export default function AboutUs() {
  const { scrollYProgress } = useScroll();

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);


  return (
    <section className="relative w-full py-16 bg-muted/30 overflow-hidden">

       <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
        }}
        className="absolute mt-5 inset-0 h-36 lg:h-64 bg-[#F5E427] opacity-70 rounded-r-full pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-80 md:h-[420px] rounded-xl overflow-hidden shadow-lg">
            <img
              src={imgAbout}
              alt="CENT N°18 San Juan"
              className="w-full h-full object-cover"
            />
          </div>

          <Card className="shadow-md border-2 border-[#2F4F4F] relative">
            <CardContent className="p-4 md:p-6 relative z-10">
              <h2 className="text-2xl md:text-3xl text-[#2F4F4F] font-bold tracking-tight mb-4">
                SOBRE NOSOTROS
              </h2>

              <Separator className="mb-4" />

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                El{" "}
                <strong>
                  CENT N°18 (Centro de Educación de Nivel Terciario N°18)
                </strong>
                {" "}es una institución educativa pública de la Provincia de San
                Juan, dedicada a la formación de profesionales con una sólida
                base técnica y humana. Nuestro compromiso es brindar carreras
                innovadoras que respondan a las demandas actuales del mundo
                laboral.
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                Nos destacamos por ofrecer un enfoque formativo orientado a la
                práctica, el desarrollo de competencias profesionales, la
                resolución de problemas reales y la integración de tecnologías
                modernas aplicadas a cada disciplina.
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                El CENT N°18 continúa creciendo gracias al esfuerzo de su
                comunidad, docentes especializados y estudiantes comprometidos,
                consolidándose como una referencia educativa en la provincia y
                la región.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
