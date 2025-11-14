"use client";

import * as React from "react";
import { MenuIcon } from "lucide-react";
import Logo from "@/assets/logo-cent.png";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { animate } from "framer-motion";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  const y = element.getBoundingClientRect().top + window.scrollY;
  animate(window.scrollY, y, {
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1],
    onUpdate: (latest) => window.scrollTo(0, latest),
  });
};

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="absolute z-10 w-full">
      {/* Desktop Menu */}
      <div className="hidden w-full items-center justify-between bg-[#E6E9ED] shadow-2xl lg:flex lg:px-12 lg:py-2 xl:px-32 xl:py-4">
        <img src={Logo} alt="Logo" className="lg:w-24 xl:w-26" />
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-8 text-[#2F4F4F]">
            <NavItem to="cards">CARRERAS Y ACTIVIDADES</NavItem>
            <NavItem to="aboutus">QUIENES SOMOS</NavItem>
            <NavItem to="contact">CONTACTO</NavItem>
            <div className="mt-2 flex justify-center gap-4 lg:mt-0 lg:justify-end">
              <a
                href="https://www.linkedin.com/company/isft-cent-n%C2%B018/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded border-2 border-[#2F4F4F] p-2 transition-colors hover:bg-white"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/centdieciocho/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded border-2 border-[#2F4F4F] p-2 transition-colors hover:bg-white"
              >
                <FaInstagram />
              </a>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu */}
      <div className="z-10 flex items-center justify-between bg-[#E6E9ED] shadow-xl px-4 py-2 md:px-16 md:py-6 lg:hidden">
        <span>
          <img src={Logo} alt="Logo" className="w-15" />
        </span>
        <p className="font-bold text-lg text-[#2F4F4F]">CENT N°18</p>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-6 w-6 text-[#2F4F4F]" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#E6E9ED] text-">
            <SheetHeader>
              <SheetTitle className="flex justify-center items-center gap-3">
                <img src={Logo} alt="Logo" className="w-15" />
                <p className="font-bold text-lg text-[#2F4F4F]">CENT N°18</p>
              </SheetTitle>
            </SheetHeader>
            <nav className="ml-4 mt-4 flex flex-col gap-4 text-[#2F4F4F]">
              <MobileLink to="cards" onClick={handleClose}>
                CARRERAS Y ACTIVIDADES
              </MobileLink>
              <MobileLink to="aboutus" onClick={handleClose}>
                QUIENES SOMOS
              </MobileLink>
              <MobileLink to="contact" onClick={handleClose}>
                CONTACTO
              </MobileLink>
              <div className="mt-2 flex justify-center gap-4 lg:mt-0 lg:justify-end">
                <a
                  href="https://www.linkedin.com/company/isft-cent-n%C2%B018/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded border-2 border-[#2F4F4F] p-2 transition-colors hover:bg-white"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.instagram.com/centdieciocho/?hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded border-2 border-[#2F4F4F] p-2 transition-colors hover:bg-white"
                >
                  <FaInstagram />
                </a>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavigationMenuItem className="transition-all hover:scale-105">
      <NavigationMenuLink asChild>
        <button
          onClick={() => scrollToSection(to)}
          className="bg-transparent cursor-pointer px-2 py-1 font-semibold text-[#2F4F4F]"
        >
          {children}
        </button>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

function MobileLink({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={() => {
        scrollToSection(to);
        onClick?.();
      }}
      className="text-left text-lg font-medium hover:underline"
    >
      {children}
    </button>
  );
}
