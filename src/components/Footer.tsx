import React from 'react';
import {
  HeartPulse,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Linkedin,
  Twitter,
  Github,
} from 'lucide-react';

interface FooterProps {
  onOpenPrivacyModal: () => void;
  onOpenTermsModal: () => void;
}

export default function Footer({
  onOpenPrivacyModal,
  onOpenTermsModal,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const element = document.querySelector(href);

    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Why Us', href: '#why-choose-us' },
    { name: 'Industries', href: '#industries' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-8">
      {/* Background glow */}
      <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-[360px] h-[360px] rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand */}
          <div className="space-y-5">
            <a
              href="/"
              className="flex items-center gap-3 group w-fit"
              aria-label="Go to Planet Healthcare home"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white text-slate-950 shadow-sm overflow-hidden">
                {/* Replace this with your logo image if needed */}
                <img
                  src="/logo.png"
                  alt="Planet Healthcare Logo"
                  className="w-full h-full object-contain p-1.5"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <HeartPulse className="absolute w-5 h-5 text-blue-600" />
              </div>

              <div>
                <span className="font-display font-extrabold text-lg uppercase tracking-wider text-white group-hover:text-blue-400 transition-colors">
                  Planet <span className="text-blue-400">Healthcare</span>
                </span>

                <div className="flex items-center gap-1.5 text-[8px] font-bold text-slate-500 tracking-widest uppercase">
                  <ShieldCheck className="w-2.5 h-2.5 text-teal-400" />
                  ISO 9001 Certified
                </div>
              </div>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Supplying trusted healthcare products, medical equipment, and
              professional healthcare solutions with quality-focused service.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-2.5 bg-slate-900 hover:bg-blue-600 rounded-lg text-slate-400 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="#"
                className="p-2.5 bg-slate-900 hover:bg-blue-600 rounded-lg text-slate-400 hover:text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>

              <a
                href="#"
                className="p-2.5 bg-slate-900 hover:bg-blue-600 rounded-lg text-slate-400 hover:text-white transition-all"
                aria-label="Github"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">
              Contact
            </h4>

            <div className="space-y-4 text-sm">
              <a
                href="mailto:info@planethealthcare.com"
                className="flex items-start gap-3 text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4 mt-0.5 text-blue-400" />
                <span>info@planethealthcare.com</span>
              </a>

              <a
                href="tel:+9779800000000"
                className="flex items-start gap-3 text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-4 h-4 mt-0.5 text-blue-400" />
                <span>+977-1-4421320/321/22</span>
              </a>

              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 text-blue-400" />
                <span>Baluwatar, Kathmandu, Nepal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
          <p>
            © {currentYear} Planet Healthcare. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <button
              onClick={onOpenPrivacyModal}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>

            <button
              onClick={onOpenTermsModal}
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Use
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}