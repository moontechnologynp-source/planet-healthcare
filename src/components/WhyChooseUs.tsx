import { ShieldCheck, HeartPulse, UserCheck, Cpu, Headphones, Truck, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const reasons = [
    {
      id: 1,
      title: 'Trusted Healthcare Partner',
      desc: 'Partner of choice for top-tier clinical centers and governmental health divisions globally, delivering high-stability infrastructure.',
      icon: Award,
      color: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      id: 2,
      title: 'Quality Assurance Efficacy',
      desc: 'All hardware compiles strictly with ISO 13485:2016 and MDR systems. Zero tolerance for equipment error rates.',
      icon: ShieldCheck,
      color: 'bg-teal-50 text-teal-600 border-teal-100',
    },
    {
      id: 3,
      title: 'Clinically Experienced Team',
      desc: 'Backed by certified biomedical engineers, clinical trial coordinators, and global regulation analysts.',
      icon: UserCheck,
      color: 'bg-slate-50 text-slate-700 border-slate-200',
    },
    {
      id: 4,
      title: 'Modern Medical Solutions',
      desc: 'Continuous real-time wearable monitoring modules, advanced PCR analyzers, and precision orthopedic robots.',
      icon: Cpu,
      color: 'bg-blue-50 text-blue-800 border-blue-100',
    },
    {
      id: 5,
      title: 'Constant Operations Support',
      desc: '24/7 secure helpline paired with on-site rapid physical response technicians to preserve active hospital uptimes.',
      icon: Headphones,
      color: 'bg-teal-50 text-teal-700 border-teal-150',
    },
    {
      id: 6,
      title: 'Reliable Global Distribution',
      desc: 'GDP-certified temperature-aligned shipping channels tracking active refrigeration profiles globally.',
      icon: Truck,
      color: 'bg-slate-50 text-slate-800 border-slate-250',
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#f8fafc] border-t border-b border-slate-200/50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-50/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-16 pb-8 border-b border-slate-100">
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center gap-2 text-teal-600 font-bold uppercase text-[11px] tracking-[0.25em]">
              <span className="w-8 h-[1px] bg-teal-500"></span>
              Why Us
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Why Premier Entities Choose Planet Healthcare
            </h3>
          </div>
          <div className="lg:col-span-6">
            <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
              We do not just distribute boxes. Planet Healthcare acts as an embedded medical partner, assuring regulatory approval, meticulous calibration, real-time tracking, and responsive technical engineering for continuous operations.
            </p>
          </div>
        </div>

        {/* Reasons Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-8 bg-white rounded-xl border border-slate-200/80 hover:border-slate-350 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${item.color} mb-6 group-hover:scale-105 transition-transform duration-200`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                
                <h4 className="font-display font-extrabold text-base text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                
                <p className="text-xs font-sans text-slate-600 leading-relaxed">
                  {item.desc}
                </p>

                <div className="flex items-center gap-1.5 mt-5 text-[9px] font-bold font-mono text-slate-400 uppercase tracking-widest">
                  <HeartPulse className="w-3.5 h-3.5 text-teal-600" />
                  <span>Clinical Standard Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
