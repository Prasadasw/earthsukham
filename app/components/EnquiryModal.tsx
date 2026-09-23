"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/60 p-3 backdrop-blur-sm sm:p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
        className="relative grid max-h-[calc(100dvh-1.5rem)] w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl animate-in fade-in zoom-in duration-200 sm:max-h-[calc(100dvh-2rem)] md:grid-cols-2"
      >
        <div className="relative hidden min-h-[560px] md:block">
          <Image
            src="/images/aboutbanner.jpg"
            alt="Residential property"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f3d28b]">Earth Sukham</p>
            <p className="mt-2 text-2xl font-serif leading-tight">Let&apos;s find a place that feels right.</p>
          </div>
        </div>

        <div className="min-w-0 overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 z-10 cursor-pointer text-gray-400 transition-colors hover:text-gray-900"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        
        <div className="border-b border-[#e6dcc6] bg-[#FBF9F4] px-5 py-5 text-center sm:p-6 md:px-8 md:py-7">
          <h2 id="enquiry-title" className="text-2xl font-serif text-[#C19B54]">Enquire Now</h2>
          <p className="mt-1 text-sm text-gray-500">Please fill in your details and we&apos;ll get back to you.</p>
        </div>
        
        <div className="p-5 sm:p-6 md:p-8">
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              if (e.currentTarget.reportValidity()) onClose();
            }}
          >
            <div>
              <label htmlFor="enquiry-name" className="mb-1.5 block text-sm font-medium text-gray-700">Your name</label>
              <input id="enquiry-name" name="name" type="text" autoComplete="name" placeholder="Enter your name" className="w-full rounded-lg bg-[#f8f9fa] px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#9c7827]" required />
            </div>
            <div>
              <label htmlFor="enquiry-email" className="mb-1.5 block text-sm font-medium text-gray-700">Email address</label>
              <input id="enquiry-email" name="email" type="email" autoComplete="email" placeholder="Enter your email" className="w-full rounded-lg bg-[#f8f9fa] px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#9c7827]" required />
            </div>
            <div>
              <label htmlFor="enquiry-phone" className="mb-1.5 block text-sm font-medium text-gray-700">Mobile number</label>
              <input 
                id="enquiry-phone"
                name="phone"
                type="tel" 
                autoComplete="tel"
                placeholder="Enter your 10-digit number" 
                className="w-full rounded-lg bg-[#f8f9fa] px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#9c7827]" 
                required 
                pattern="[0-9]{10}"
                maxLength={10}
                minLength={10}
                title="Please enter a valid 10-digit mobile number"
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                }}
              />
            </div>

            <div>
              <label htmlFor="enquiry-message" className="mb-1.5 block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="enquiry-message"
                name="message"
                placeholder="Tell us how we can help"
                rows={3}
                className="w-full resize-none rounded-lg border-none bg-[#f8f9fa] px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#9c7827]"
                required
              />
            </div>
            
            <div className="flex items-start gap-2 pt-2">
              <input 
                type="checkbox" 
                id="consent" 
                required 
                className="mt-1 min-w-[16px] h-4 w-4 cursor-pointer accent-[#B58A3D]"
              />
              <label htmlFor="consent" className="text-xs text-gray-600 cursor-pointer leading-tight">
                I agree to the <Link href="/terms-conditions" className="text-[#B58A3D] hover:underline">terms and conditions</Link> and <Link href="/privacy-policy" className="text-[#B58A3D] hover:underline">privacy policy</Link> and consent to being contacted regarding my enquiry.
              </label>
            </div>
            
            <button type="submit" className="w-full bg-[#B58A3D] hover:bg-[#967132] text-white font-semibold py-3.5 rounded-lg transition-colors text-[15px] shadow-sm mt-4 cursor-pointer">
              Submit Enquiry
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}
