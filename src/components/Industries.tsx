import { Milestone, Briefcase, Plus, ShieldAlert, FlaskConical, CircleDot, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import { industriesData } from '../data';

export default function Industries() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Milestone':
        return <Milestone className="w-5 h-5 text-brand-655" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-teal-655" />;
      case 'FlaskConical':
        return <FlaskConical className="w-5 h-5 text-blue-655" />;
      case 'Plus':
        return <Plus className="w-5 h-5 text-indigo-655" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-purple-655" />;
      default:
        return <CircleDot className="w-5 h-5" />;
    }
  };

  return (
    <section id="industries" className="py-20 lg:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-brand-600 tracking-widest uppercase">Industries</h2>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Industries We Serve Worldwide
          </h3>
          <p className="text-base text-gray-500 font-sans max-w-xl mx-auto">
            From tier-one clinical universities to local outpatient ambulatory care circles, our network supports seamless continuous operations.
          </p>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full" />
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {industriesData.map((ind, index) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="p-6 bg-white rounded-2xl border border-gray-150 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-50/5 hover:-translate-y-1 transition-all duration-350 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-150">
                  {getIcon(ind.icon)}
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm text-gray-900 leading-snug">
                    {ind.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold font-mono text-teal-600 uppercase tracking-widest mt-1">
                    <Activity className="w-3 h-3 text-teal-500" />
                    <span>Compliance Active</span>
                  </div>
                </div>
                <p className="text-xs font-sans text-gray-500 leading-relaxed">
                  {ind.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono">
                <span className="text-gray-400">DEPLOYED DENSITY</span>
                <span className="font-bold text-gray-700">{ind.caseCount}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
