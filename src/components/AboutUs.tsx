import { useState } from 'react';
import { Sparkles, HeartHandshake, Eye, ShieldCheck, Activity, Target, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';
import { metricsData } from '../data';

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');

  const tabContent = {
    mission: {
      title: 'Our Mission / Patient Well-being',
      text: 'To accelerate medical capabilities globally by bringing top-tier medical solutions, life-saving clinical hardware, and pharmaceutical cold-chain infrastructure to the frontline, with an uncompromising focus on premium clinical quality, reliability, and human life.',
      bullets: [
        'Unconditional quality assurance on critical care ventilator units.',
        'Seamless integration with local healthcare systems and networks.',
        'Continuous calibration support to reduce clinical downtime.'
      ]
    },
    vision: {
      title: 'Our Vision / Global Health Innovation',
      text: 'To become the premier healthcare distribution network across high-growth international corridors, and establish Planet Healthcare as the ultimate standard in biomedical product compliance, continuous telehealth systems, and trustworthy clinical hardware.',
      bullets: [
        'Advancing robotic and AI-assisted clinical automation solutions.',
        'Expanding GDP-certified pharmaceutical logistics across developing sectors.',
        'Standardizing patient telehealth monitoring on a global cloud level.'
      ]
    },
    values: {
      title: 'Our Core Corporate Values',
      text: 'Our corporate culture centers around clinical credibility, technical excellence, and patient well-being, driving every regulatory checklist and logistics distribution route we operate.',
      bullets: [
        'Integrity: Standard-compliant testing cycles above minimum regulatory laws.',
        'Empathy: Designing workflows focused entirely on operator and patient safety.',
        'Innovation: Elevating traditional clinics with modern diagnostics software.'
      ]
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Grid */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-4 flex items-center justify-center gap-2 text-teal-600 font-bold uppercase text-[11px] tracking-[0.25em]">
            <span className="w-8 h-[1px] bg-teal-500"></span>
            About Us
            <span className="w-8 h-[1px] bg-teal-500"></span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            An International Cornerstone of Biomedical Solutions & Logistics
          </h2>
          <div className="h-[1px] w-24 bg-slate-200 mx-auto mt-6" />
        </div>

        {/* Story Section & Tabbed Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* About Column Left: Layout with Illustration */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-50 p-1.5 shadow-sm">
              <img
                src="/src/assets/images/consultation_1779440145011.png"
                alt="Corporate Healthcare Consultation at Planet Healthcare"
                className="w-full h-[280px] sm:h-[350px] object-cover rounded-lg"
                referrerPolicy="no-referrer"
              />
              
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <h3 className="font-display font-bold text-base text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-600" />
                Regulated Clinical Verification
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Planet Healthcare acts as an end-to-end medical logistics integrator, partnering with regulatory commissions in high-acuity medical devices, laboratory hardware installations, and pharmaceutical cold distribution structures.
              </p>
            </div>
          </div>

          {/* About Column Right: Tabbed Focus Panel */}
          <div className="lg:col-span-6 space-y-8">
            <div className="p-1.5 bg-slate-100 border border-slate-200/60 rounded-xl flex items-center gap-1">
              {(['mission', 'vision', 'values'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 text-center text-xs font-bold uppercase tracking-widest rounded-lg transition-all cursor-pointer ${
                    activeTab === tab
                      ? 'bg-white text-blue-650 shadow-sm border border-slate-200/50'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Rendered Tab Detail */}
            <div className="p-8 bg-white rounded-xl border border-slate-200 shadow-xs space-y-6 min-h-[320px]">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 select-none">
                  {activeTab === 'mission' && <Target className="w-5 h-5" />}
                  {activeTab === 'vision' && <Eye className="w-5 h-5" />}
                  {activeTab === 'values' && <Sparkles className="w-5 h-5" />}
                </div>
                <h3 className="font-display font-extrabold text-sm text-slate-900 uppercase tracking-wider">
                  {tabContent[activeTab].title}
                </h3>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                {tabContent[activeTab].text}
              </p>

              <ul className="space-y-2.5 font-sans pt-2">
                {tabContent[activeTab].bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-650">
                    <span className="flex-shrink-0 w-4 h-4 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-650 text-[10px] font-bold mt-0.5">
                      ✓
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>


      </div>
    </section>
  );
}
