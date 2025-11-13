import React from "react";
import logo from "@/assets/logo-cent.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2F4F4F] px-8 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-4 lg:w-1/2">
          <img src={logo} alt="Logo" className="mb-2 w-20" />
          <div className="text-xs lg:text-sm">
            <p>
              Capital, San Juan
              <br />
              Argentina
            </p>
            <p>+54 9 264 555 5555</p>
          </div>
        </div>

        <div className="mt-2 flex flex-col gap-1 text-xs lg:mt-0 lg:w-1/3 lg:items-start lg:justify-center lg:text-sm">
          <p className="lg:text-lg">Práctica Profesionalizante I</p>
          <br />
          <p>Caballero Dayana</p>
          <p>Ibaceta Agustín</p>
          <p>Jaled Facundo</p>
        </div>

        <div className="mt-2 flex justify-center gap-4 lg:mt-0 lg:w-1/3 lg:justify-end">
          <a
            href="https://www.linkedin.com/company/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded border-2 border-white p-2 transition-colors hover:bg-white hover:text-[#1a285c]"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded border-2 border-white p-2 transition-colors hover:bg-white hover:text-[#1a285c]"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
