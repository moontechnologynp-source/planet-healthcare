import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.25em] mb-3">
            Contact Us
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Get in Touch
          </h2>

          <p className="mt-4 text-sm text-slate-500 leading-relaxed">
            Contact Planet Healthcare for product inquiries, healthcare supplies,
            and professional support.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Email */}
          <a
            href="mailto:info@planethealthcare.com"
            className="group p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all text-center"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <Mail className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Email
            </h3>

            <p className="text-sm text-slate-500 group-hover:text-blue-600 transition-colors">
              info@planethealthcare.com
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:+9779800000000"
            className="group p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all text-center"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <Phone className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Phone
            </h3>

            <p className="text-sm text-slate-500 group-hover:text-blue-600 transition-colors">
              +977 9800000000
            </p>
          </a>

          {/* Location */}
          <a
            href="https://maps.app.goo.gl/76VUSNkMVSXH5kSF9"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all text-center"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Location
            </h3>

            <p className="text-sm text-slate-500 group-hover:text-blue-600 transition-colors">
              Baluwatar, Kathmandu, Nepal
            </p>
          </a>
        </div>

        
      </div>
    </section>
  );
}