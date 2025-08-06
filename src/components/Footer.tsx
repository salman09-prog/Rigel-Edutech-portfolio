
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#1b073b] text-white">
      <div className="w-full mx-auto px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-0">
             <Image src={"/assets/rigel-edutech-logo.png"} alt='rigel-logo' width={170} height={170} className='object-contain mt-[-4.5rem]'/>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mt-[-2rem]">
              A subsidiary of Rigel Nexus Holdings LLC, empowering learners worldwide with innovative educational technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-[#43d098] transition-colors">
               {/* <Image src={"/assets/facebook.svg"} alt='facebook-icon' height={30} width={30} className='object-contain'/> */}
              </a>
              <a href="#" className="text-white/60 hover:text-[#43d098] transition-colors">
                {/* <Twitter className="h-5 w-5" /> */}
              </a>
              <a href="#" className="text-white/60 hover:text-[#43d098] transition-colors">
                {/* <Linkedin className="h-5 w-5" /> */}
              </a>
              <a href="#" className="text-white/60 hover:text-[#43d098] transition-colors">
                {/* <Instagram className="h-5 w-5" /> */}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/80 hover:text-[#43d098] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-white/80 hover:text-[#43d098] transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-[#43d098] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-[#43d098] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#43d098]" />
                <span className="text-white/80 text-sm">info@rigeledutech.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#43d098]" />
                <span className="text-white/80 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-[#43d098] mt-1" />
                <span className="text-white/80 text-sm">
                  123 Education Street<br />
                  Learning City, LC 12345<br />
                  United States
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-white/80 text-sm">
              Subscribe to our newsletter for the latest updates and educational insights.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="w-full bg-[#43d098] hover:bg-[#43d098]/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2024 Rigel Edutech. A subsidiary of Rigel Nexus Holdings LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-[#43d098] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-[#43d098] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-[#43d098] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;