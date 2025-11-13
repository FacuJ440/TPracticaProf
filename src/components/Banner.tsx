import React from "react";
import mobileVideo from "@/assets/img_banner.avif";
import desktopVideo from "@/assets/img_banner.avif";
import { useIsMobile } from "@/hooks/isMobile";
import { motion } from "framer-motion";

const titleLine1 = "CENTRO DE EDUCACION";
const titleLine2 = "DE NIVEL TERCIARIO N° 18";

const Banner: React.FC = () => {
  const isMobile = useIsMobile();

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const titleContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const totalWords =
    titleLine1.split(" ").length + titleLine2.split(" ").length;
  const paragraphDelay = totalWords * 0.15 + 0.2;

  return (
    <div className="relative left-0 top-0 h-full w-full">
      <img
        src={isMobile ? mobileVideo : desktopVideo}
        className="h-[350px] w-full object-cover md:h-96 xl:h-160"
      />
      <motion.div
        className="absolute inset-0 mt-20 xl:mt-32 flex flex-col items-center justify-center px-4 text-center"
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="mb-4 text-2xl font-bold text-white lg:text-4xl xl:text-6xl"
          variants={titleContainer}
        >
          {titleLine1.split(" ").map((word, i) => (
            <motion.span
              key={word + i}
              variants={wordVariants}
              style={{ display: "inline-block", marginRight: 6 }}
            >
              {word}
            </motion.span>
          ))}
          <br />
          {titleLine2.split(" ").map((word, i) => (
            <motion.span
              key={word + i + "2"}
              variants={wordVariants}
              style={{ display: "inline-block", marginRight: 6 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className="mb-6 max-w-2xl px-8 text-base text-white lg:text-lg xl:px-0 xl:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: paragraphDelay, duration: 0.6 }}
        >
          Formando profesionales con vocación y compromiso con la comunidad.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Banner;
