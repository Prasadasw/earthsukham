import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section 
      className="relative w-full bg-cover bg-center py-24 md:py-32"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000')` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Headline */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-4xl md:text-[3.8rem] font-serif text-white leading-[1.15]">
            Start Your Property Journey Today
          </h2>
        </div>

        {/* Right Side: Text & Button */}
        <div className="md:w-1/2 w-full flex flex-col items-start md:pl-16">
          <p className="text-gray-200 text-[15px] md:text-[16px] leading-relaxed mb-6 max-w-lg">
          From your first home in Hinjewadi to a high-yield retail investment, our team gets you in front of the right developers, at the right price, with zero brokerage.
          </p>
          <Link 
          href="/contact-us" 
          className="bg-[#C89B4A] hover:bg-[#b0853b] text-white px-8 py-3.5 rounded-[4px] font-semibold text-sm transition flex items-center gap-2 cursor-pointer">
            Contact Us <ChevronRight size={18} strokeWidth={2.5} />
          </Link>
        </div>

      </div>
    </section>
  );
}
