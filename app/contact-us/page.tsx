"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import FAQ from '../components/FAQ';

export default function ContactUs() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');
  const [isProjectOpen, setIsProjectOpen] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedProject) {
      setIsProjectOpen(true);
      return;
    }

    if (!event.currentTarget.reportValidity()) return;

    setIsSubmitted(true);
    setSelectedProject('');
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-[#FBF9F4]">
      {/* --- HERO BANNER --- */}
      <section className="relative overflow-hidden rounded-2xl m-2">
        <div className="relative h-[260px] w-full md:h-[420px]">
          <Image
            src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=1200&auto=format&fit=crop&q=80" 
            alt="Contact Us Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-6">
            <div className="mx-auto w-full max-w-7xl">
              <div className="max-w-3xl">
                <div className="text-sm font-semibold tracking-[0.2em] text-[#ffee50] font-sans">
                  Home / Contact Us
                </div>
                <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl font-sans">
                  Contact Us
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 py-16 md:grid-cols-2 md:gap-16 md:py-24 lg:gap-24">
        
        {/* Left Side: Form */}
        <div className="rounded-2xl bg-white p-5 shadow-[0_16px_45px_rgba(80,62,28,0.08)] sm:p-8 lg:p-10">
          <h2 className="text-2xl font-serif leading-tight text-gray-800 mb-4 sm:text-3xl">Tell Us What You&apos;re Looking For</h2>
          {/* <p className="mb-8 mt-4 max-w-md text-sm leading-relaxed text-gray-500">
           Looking for a home, investment property or commercial opportunity?

          </p> */}

          {isSubmitted && (
            <p className="mb-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800" role="status">
              Thank you. Your enquiry has been received and our team will contact you soon.
            </p>
          )}

          <form className="space-y-4" onSubmit={handleSubmit} noValidate={false}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-gray-700">Your name</label>
                <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Enter your name" required minLength={2} className="w-full rounded-lg bg-[#efe9d6] px-4 py-3 text-sm text-gray-800 outline-none transition focus:ring-2 focus:ring-[#9c7827]/40 placeholder:text-gray-500" />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-gray-700">Email address</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="Enter your email" required className="w-full rounded-lg bg-[#efe9d6] px-4 py-3 text-sm text-gray-800 outline-none transition focus:ring-2 focus:ring-[#9c7827]/40 placeholder:text-gray-500" />
              </div>
            </div>

            <div>
              <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-gray-700">Mobile number</label>
              <input id="contact-phone" name="phone" type="tel" autoComplete="tel" inputMode="numeric" placeholder="Enter your 10-digit number" required pattern="[0-9]{10}" minLength={10} maxLength={10} title="Please enter a valid 10-digit mobile number" onInput={(event) => { event.currentTarget.value = event.currentTarget.value.replace(/[^0-9]/g, ''); }} className="w-full rounded-lg bg-[#efe9d6] px-4 py-3 text-sm text-gray-800 outline-none transition focus:ring-2 focus:ring-[#9c7827]/40 placeholder:text-gray-500" />
            </div>

            <div className="relative z-20">
              <label htmlFor="contact-project" className="mb-1.5 block text-sm font-medium text-gray-700">Project of interest</label>
              <input type="hidden" name="project" value={selectedProject} />
              <button
                id="contact-project"
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isProjectOpen}
                onClick={() => setIsProjectOpen((open) => !open)}
                className="flex h-11 w-full items-center justify-between rounded-lg bg-[#efe9d6] px-4 text-left text-sm text-gray-800 outline-none transition focus:ring-2 focus:ring-[#9c7827]/40"
              >
                <span className={selectedProject ? 'text-gray-800' : 'text-gray-500'}>
                  {selectedProject ? selectedProject === 'project1' ? 'Project 1' : 'Project 2' : 'Select a project'}
                </span>
                <svg className={`h-4 w-4 text-gray-500 transition-transform ${isProjectOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {isProjectOpen && (
                <div className="absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-lg border border-[#e6dcc6] bg-white shadow-lg" role="listbox" aria-labelledby="contact-project">
                  {[
                    { value: 'project1', label: 'Project 1' },
                    { value: 'project2', label: 'Project 2' },
                  ].map((project) => (
                    <button
                      key={project.value}
                      type="button"
                      role="option"
                      aria-selected={selectedProject === project.value}
                      onClick={() => {
                        setSelectedProject(project.value);
                        setIsProjectOpen(false);
                      }}
                      className="block w-full px-4 py-3 text-left text-sm text-gray-700 transition-colors hover:bg-[#efe9d6]"
                    >
                      {project.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-gray-700">Message</label>
              <textarea id="contact-message" name="message" placeholder="Tell us how we can help" rows={5} required minLength={10} className="w-full resize-y rounded-lg bg-[#efe9d6] px-4 py-3 text-sm text-gray-800 outline-none transition focus:ring-2 focus:ring-[#9c7827]/40 placeholder:text-gray-500" />
            </div>

            <div className="flex items-start gap-3 pt-1">
              <input id="contact-consent" name="consent" type="checkbox" required className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[#8c6b23]" />
              <label htmlFor="contact-consent" className="text-xs leading-relaxed text-gray-600">
                I agree to the <Link href="/terms-conditions" className="font-medium text-[#8c6b23] underline-offset-2 hover:underline">terms and conditions</Link> and <Link href="/privacy-policy" className="font-medium text-[#8c6b23] underline-offset-2 hover:underline">privacy policy</Link>, and consent to being contacted regarding my enquiry.
              </label>
            </div>

            <button type="submit" className="w-full cursor-pointer rounded-lg bg-[#8c6b23] py-3.5 text-[15px] font-medium text-white shadow-sm transition-colors hover:bg-[#73581c] focus:outline-none focus:ring-2 focus:ring-[#8c6b23] focus:ring-offset-2">
              Send a message
            </button>
          </form>
        </div>

        {/* Right Side: Contact Info */}
        <div className="space-y-10 md:self-center md:border-l-2 md:border-[#e6dcc6] md:pl-12">
          
          <div>
            <h3 className="text-[22px] font-serif text-gray-800 mb-3">Corporate office</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed max-w-sm">
              <a href="https://maps.google.com/?q=Office+254,+Vision+9,+Pimple+Saudagar,+Pune,+Maharashtra+-+411027" target="_blank" rel="noopener noreferrer" className="hover:text-[#9c7827] transition-colors cursor-pointer">
                Office 254, Vision 9, Pimple Saudagar, Pune, Maharashtra - 411027
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-[22px] font-serif text-gray-800 mb-2">For sales/ Marketing queries</h3>
            <p className="text-[14px] text-gray-600">
              <a href="tel:+919923901000" className="hover:text-[#9c7827] transition-colors">+91 9923 90 1000</a> | <a href="tel:+917074001000" className="hover:text-[#9c7827] transition-colors">+91 7074 00 1000</a>
            </p>
          </div>

          <div>
            <h3 className="text-[22px] font-serif text-gray-800 mb-2">Email</h3>
            <a href="mailto:earthsukham@gmail.com" className="text-[12px] text-gray-500 hover:text-[#9c7827] transition-colors uppercase tracking-widest cursor-pointer">
              earthsukham@gmail.com
            </a>
          </div>

          <div>
            <h3 className="text-[22px] font-serif text-gray-800 mb-2">Social Connects</h3>
            <a href="mailto:earthsukham@gmail.com" className="text-[12px] text-gray-500 hover:text-[#9c7827] transition-colors uppercase tracking-widest block mb-4 cursor-pointer">
              earthsukham@gmail.com
            </a>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/share/19174hZJyb/" className="w-[30px] h-[30px] rounded flex items-center justify-center bg-[#1877F2] text-white hover:bg-blue-700 transition-colors cursor-pointer">
                <FaFacebookF className="w-[14px] h-[14px]" />
              </a>
              <a href="https://www.instagram.com/earthsukham?stkn=MTM0YndoZncyOWFkYw==" className="w-[30px] h-[30px] rounded flex items-center justify-center bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:opacity-90 transition-opacity cursor-pointer">
                <FaInstagram className="w-[16px] h-[16px]" />
              </a>
              {/* <a href="#" className="w-[30px] h-[30px] rounded flex items-center justify-center bg-[#FF0000] text-white hover:bg-red-700 transition-colors cursor-pointer">
                <FaYoutube className="w-[14px] h-[14px]" />
              </a> */}
              <a href="https://www.linkedin.com/company/earthsukham/" className="w-[30px] h-[30px] rounded flex items-center justify-center bg-[#0A66C2] text-white hover:bg-blue-800 transition-colors cursor-pointer">
                <FaLinkedinIn className="w-[14px] h-[14px]" />
              </a>
            </div>
          </div>

        </div>

      </div>
      
      <FAQ />
    </div>
  );
}
