"use client"

import * as React from "react"
import { ChevronRight, MenuIcon } from "lucide-react"
import Logo from "@/assets/logo-cent.png"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

import { Button } from "@/components/ui/button"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { animate } from "framer-motion"

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (!element) return

  const y = element.getBoundingClientRect().top + window.scrollY
  animate(window.scrollY, y, {
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1],
    onUpdate: (latest) => window.scrollTo(0, latest)
  })
}

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const handleClose = () => setIsOpen(false)

  return (
    <div className='absolute z-10 w-full'>
      {/* Desktop Menu */}
      <div className='hidden w-full items-center justify-between bg-[#E6E9ED] shadow-2xl lg:flex lg:px-12 lg:py-2 xl:px-32 xl:py-4'>
        <img src={Logo} alt='Logo' className='lg:w-24 xl:w-26'/>
        <NavigationMenu>
          <NavigationMenuList className='flex items-center gap-8 font-light text-[#2F4F4F]'>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='bg-transparent py-1 font-light cursor-pointer'>
                ITEM1
              </NavigationMenuTrigger>
              <NavigationMenuContent className='min-w-[200px] rounded bg-[#E6E9ED] py-2 text-[#2F4F4F] shadow-lg'>
                <span
                  onClick={() => scrollToSection("cbot")}
                  className='flex cursor-pointer items-center px-6 py-2 text-sm hover:scale-105 transition'
                >
                  <ChevronRight className='mr-2 h-5 text-[#2F4F4F]' />
                  ITEM
                </span>
                <span
                  onClick={() => scrollToSection("cbot")}
                  className='flex cursor-pointer items-center px-6 py-2 text-sm hover:scale-105 transition'
                >
                  <ChevronRight className='mr-2 h-5 text-[#2F4F4F]' />
                  ITEM
                </span>
                <span
                  onClick={() => scrollToSection("cbot")}
                  className='flex cursor-pointer items-center px-6 py-2 text-sm hover:scale-105 transition'
                >
                  <ChevronRight className='mr-2 h-5 text-[#2F4F4F]' />
                  ITEM
                </span>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavItem to='aboutus'>ITEM 2</NavItem>
            <NavItem to='form'>ITEM 3</NavItem>
            <div className='mt-2 flex justify-center gap-4 lg:mt-0 lg:justify-end'>
              <a
                href='https://www.linkedin.com/company/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center rounded border-2 border-white p-2 transition-colors hover:bg-white hover:text-[#1a285c]'
              >
                <FaLinkedinIn />
              </a>
              <a
                href='https://www.instagram.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center rounded border-2 border-white p-2 transition-colors hover:bg-white hover:text-[#1a285c]'
              >
                <FaInstagram />
              </a>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu */}
      <div className='z-10 flex items-center justify-between bg-[#E6E9ED] shadow-xl px-4 py-2 md:px-16 md:py-6 lg:hidden'>
        <span>
          <img src={Logo} alt='Logo' className='w-15' />
        </span>
          <p className="font-bold text-lg">CENT N°18</p>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant='ghost' size='icon'>
              <MenuIcon className='h-6 w-6 text-[#2F4F4F]' />
            </Button>
          </SheetTrigger>
          <SheetContent side='right' className='bg-[#E6E9ED] text-'>
            <SheetHeader>
              <SheetTitle className='flex justify-center items-center gap-3'>
                <img src={Logo} alt='CODCU.IO' className='w-15' />
                <p className="font-bold text-lg">CENT N°18</p>
              </SheetTitle>
            </SheetHeader>
            <nav className='ml-4 mt-4 flex flex-col gap-4 text-[#2F4F4F]'>
              <MobileLink to=''>ITEM 1</MobileLink>
              <ul className='ml-4 flex flex-col gap-2'>
                <li className='flex items-center'>
                  <ChevronRight className='h-5 text-[#2F4F4F]' />
                  <MobileLink to='' onClick={handleClose}>
                    ITEM
                  </MobileLink>
                </li>
                <li className='flex items-center'>
                  <ChevronRight className='h-5 text-[#2F4F4F]' />
                  <MobileLink to='' onClick={handleClose}>
                    ITEM
                  </MobileLink>
                </li>
                <li className='flex items-center'>
                  <ChevronRight className='h-5 text-[#2F4F4F]' />
                  <MobileLink to='' onClick={handleClose}>
                    ITEM
                  </MobileLink>
                </li>
              </ul>
              <MobileLink to='' onClick={handleClose}>
                ITEM 2
              </MobileLink>
              <MobileLink to='' onClick={handleClose}>
                ITEM 3
              </MobileLink>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavigationMenuItem className='transition-all hover:scale-105'>
      <NavigationMenuLink asChild>
        <button onClick={() => scrollToSection(to)} className='bg-transparent cursor-pointer px-2 py-1 font-light text-[#2F4F4F]'>
          {children}
        </button>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}

function MobileLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={() => {
        scrollToSection(to)
        onClick?.()
      }}
      className='text-left text-lg font-medium hover:underline'
    >
      {children}
    </button>
  )
}
