import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#FBF9F4] text-[#2C2C2C] pt-12 pb-12 overflow-hidden border-t border-gray-200/50">
      
      {/* 1. MASSIVE BACKGROUND WATERMARK TEXT */}
      <div className="w-full text-center pointer-events-none select-none z-0 mb-6 mt-4">
        <h1 className="text-[10vw] font-black tracking-normal text-[#EDEAE1] uppercase leading-none">
          EARTH SUKHAM
        </h1>
      </div>


      <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10">
        
        {/* 2. CENTERED LOGO & DIVIDER LINE ACCENT */}
        <div className="flex items-center justify-between gap-8 mb-16 w-full">
          <div className="hidden sm:block h-[1px] bg-[#D4C3A3] flex-grow" />
          
          {/* Main Structural Logo Mark */}
          <div className="flex flex-col items-center shrink-0 mx-auto sm:mx-0">
            <img src="/images/Logo.png" alt="Earth Sukham" className="h-20 w-auto object-contain" />
          </div>
          
          <div className="hidden sm:block h-[1px] bg-[#D4C3A3] flex-grow" />
        </div>

        {/* 3. TRIPLE COLUMN CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
          
          {/* COLUMN A: About Site Description */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-[#B58A3D] text-lg">
              About Site
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed max-w-sm">
             Earth Sukham Realty is a Pune-based real estate consultancy connecting buyers and investors with Category A developers across Pune and Delhi NCR. We offer unbiased advice, no brokerage, and access to pre-launch inventory across residential and investment properties.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="https://www.facebook.com/share/19174hZJyb/" className="flex h-[30px] w-[30px] items-center justify-center rounded bg-[#1877F2] text-white transition-colors hover:bg-blue-700">
                <FaFacebookF className="h-[14px] w-[14px]" />
              </a>
              <a href="https://www.instagram.com/earthsukham?stkn=MTM0YndoZncyOWFkYw==" className="flex h-[30px] w-[30px] items-center justify-center rounded bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white transition-opacity hover:opacity-90">
                <FaInstagram className="h-[16px] w-[16px]" />
              </a>
              <a href="https://www.linkedin.com/company/earthsukham/" className="flex h-[30px] w-[30px] items-center justify-center rounded bg-[#0A66C2] text-white transition-colors hover:bg-blue-800">
                <FaLinkedinIn className="h-[14px] w-[14px]" />
              </a>
            </div>
          </div>

          {/* COLUMN B: Fast Navigation Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-[#B58A3D] text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-700 font-medium">
              <li><Link href="/about-us" className="hover:text-[#B58A3D] transition cursor-pointer">About Us</Link></li>
              <li><Link href="/properties" className="hover:text-[#B58A3D] transition cursor-pointer">Properties</Link></li>
              <li><Link href="/blogs" className="hover:text-[#B58A3D] transition cursor-pointer">Blogs</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[#B58A3D] transition cursor-pointer">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-[#B58A3D] transition cursor-pointer">Terms & Condition</Link></li>
            </ul>
          </div>

          {/* COLUMN C: Office Directory Info & Contacts */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-[#B58A3D] text-lg">
              Contact Us
            </h4>
            <ul className="space-y-3.5 text-xs text-gray-600">
              {/* Address Row */}
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#B58A3D] shrink-0 mt-0.5" />
                <a href="https://maps.google.com/?q=Office+254,+Vision+9,+Pimple+Saudagar,+Pune,+Maharashtra+-+411027" target="_blank" rel="noopener noreferrer" className="leading-normal hover:text-[#B58A3D] transition cursor-pointer">
                  Office 254, Vision 9, Pimple Saudagar, Pune, Maharashtra - 411027
                </a>
              </li>
              {/* Telephone Dial Row */}
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#B58A3D] shrink-0" />
                <div className="flex gap-1 items-center">
                  <a href="tel:+919923901000" className="hover:text-[#B58A3D] transition cursor-pointer">+91 9923 90 1000</a> 
                  <span className="text-gray-400">|</span> 
                  <a href="tel:+917074001000" className="hover:text-[#B58A3D] transition cursor-pointer">+91 7074 00 1000</a>
                </div>
              </li>
              {/* Electronic Mailing Address Row */}
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#B58A3D] shrink-0" />
                <a href="mailto:earthsukham@gmail.com" className="hover:text-[#B58A3D] transition cursor-pointer">
                  earthsukham@gmail.com
                                    {/* earthsukham@gmail.com */}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </footer>
  );
}