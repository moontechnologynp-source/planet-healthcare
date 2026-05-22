import React from 'react';
import { ArrowRight, ShieldCheck, Award, ThumbsUp, Activity } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
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

  return (
    <section id="hero" className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-white">
      {/* Dynamic Background Grids and Orrounds */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-50/70 blur-3xl opacity-60 -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal-50/70 blur-3xl opacity-50 -translate-x-1/4 translate-y-1/4" />
        {/* Fine grid dot matrix pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#0a84ff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-50 border border-slate-200 text-slate-800 text-[11px] font-bold tracking-[0.2em] uppercase rounded-full"
            >
              <span className="w-2.5 h-[1.5px] bg-teal-600 animate-pulse"></span>
              <span>Innovative Medical Solutions</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
                Advancing Healthcare <br />
                <span className="text-blue-600 font-editorial italic lg:text-6xl font-normal tracking-wide">for a Better Tomorrow.</span>
              </h1>
              <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
                Planet Healthcare delivers trusted medical solutions, healthcare products, and innovative services with a commitment to quality and patient well-being on a global scale.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={(e) => handleScrollTo(e, 'services')}
                className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-black text-white font-bold rounded-lg cursor-pointer transition-all uppercase tracking-wider text-xs"
              >
                Explore Services
                <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform animate-pulse" />
              </button>
              <button
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="w-full sm:w-auto px-8 py-4 border-2 border-slate-200 text-slate-900 font-bold rounded-lg hover:bg-slate-50 cursor-pointer transition-all uppercase tracking-wider text-xs"
              >
                Contact Us
              </button>
            </motion.div>

            {/* Micro Highlights of Integrity */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="pt-6 border-t border-slate-100 flex flex-wrap justify-center lg:justify-start gap-y-3 gap-x-8 text-[11px] text-slate-500 font-bold uppercase tracking-wider"
            >
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-teal-600" />
                <span>CE Certified Portfolio</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>ISO 13485 Standards</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ThumbsUp className="w-4 h-4 text-blue-700" />
                <span>Global Clinical Trust</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Media */}
          <div className="lg:col-span-6 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative w-full max-w-lg lg:max-w-none"
            >
              {/* Image Framed */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
                <img
                  src="/src/assets/images/healthcare_hero_1779440105646.png"
                  alt="Planet Healthcare Corporate Facility and Team"
                  className="w-full h-[320px] sm:h-[425px] object-cover hover:scale-[1.01] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating indicators */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
