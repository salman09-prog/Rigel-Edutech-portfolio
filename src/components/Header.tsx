"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => pathName === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="mx-auto lg:px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center relative top-[-14px]">
            <div>
              <Image
                src="/assets/rigel-edutech-logo.png"
                height={180}
                width={180}
                alt="rigel-logo"
                className="object-contain mt-6"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link ${
                  isActive(item.href) ? "text-[#36A1A1]" : ""
                } text-sm font-thin`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4 mr-5">
            <Button className="bg-[#36a1a1] hover:bg-[#41c6c6]! hover:scale-105 cursor-pointer">Get Started</Button>
          </div>

          {/* <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button> */}

           {/* Mobile Menu Sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden p-2" aria-label="Toggle menu">
              {isMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[80%] p-6">
            <nav className="flex flex-col space-y-2 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-link py-2 px-4 rounded-md ${
                    isActive(item.href) ? "bg-[#36A1A1] text-white" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)} // Not strictly needed now, but fine to keep
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Button className="bg-[#36A1A1] w-full hover:bg-[#41c6c6]! hover:scale-105 cursor-pointer">
                  Get Started
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
        </div>

       
      </div>
    </header>
  );
};

export default Header;
