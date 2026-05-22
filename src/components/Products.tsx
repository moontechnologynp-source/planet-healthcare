import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, FileText, CheckCircle2, ShieldCheck, Microscope, Info, ChevronRight, CornerDownRight } from 'lucide-react';
import { productsData } from '../data';
import { ProductSpecialty } from '../types';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [detailedProduct, setDetailedProduct] = useState<ProductSpecialty | null>(null);
  
  // Quote forms state
  const [quoteEmail, setQuoteEmail] = useState('');
  const [quoteNotes, setQuoteNotes] = useState('');
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  // Filter products by category
  const filteredProducts = selectedCategory === 'all'
    ? productsData
    : productsData.filter(p => p.category === selectedCategory);

  const categories = [
    { key: 'all', label: 'All Equipment' },
    { key: 'support', label: 'Life-Support / ICU' },
    { key: 'surgical', label: 'Robotic Surgical' },
    { key: 'imaging', label: 'Imaging Scanner' },
    { key: 'diagnostic', label: 'Lab Diagnostics' },
    { key: 'personal', label: 'Continuous Telehealth' }
  ];

  const handleQuoteRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteEmail.trim()) return;
    setQuoteSubmitted(true);
    setTimeout(() => {
      setQuoteSubmitted(false);
      setQuoteEmail('');
      setQuoteNotes('');
      setDetailedProduct(null);
    }, 4000);
  };

  return (
    <section id="products" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="mb-4 flex items-center justify-center gap-2 text-teal-600 font-bold uppercase text-[11px] tracking-[0.25em]">
            <span className="w-8 h-[1px] bg-teal-500"></span>
            Products
            <span className="w-8 h-[1px] bg-teal-500"></span>
          </div>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Flagship Bio-Medical Instruments
          </h3>
          <p className="text-xs text-slate-500 font-sans max-w-xl mx-auto mt-4 leading-relaxed">
            Exclusively manufactured and calibrated medical hardware, fully tested, and registered under global clinical committees.
          </p>
          <div className="h-[1px] w-24 bg-slate-200 mx-auto mt-6" />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all border cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Interactive Grid & Layout highlighting generated image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Side Feature Highlight Card with generated high-tech image */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative rounded-xl overflow-hidden border border-slate-200 p-1.5 shadow-sm bg-slate-50">
              <img
                src="/src/assets/images/medical_tech_1779440123799.png"
                alt="Planet Healthcare Diagnostic Center"
                className="w-full h-[260px] object-cover rounded-lg"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-[9px] font-mono font-bold uppercase tracking-widest text-teal-400">Clinical Calibrations Unit</p>
                <h4 className="font-display font-semibold text-xs mt-1">Geneva-regulated QC Testing Center</h4>
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <h4 className="font-display font-bold text-sm text-slate-900 flex items-center gap-1.5 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-blue-650" />
                Guaranteed Bio-traceability
              </h4>
              <p className="text-xs text-slate-650 leading-relaxed font-sans">
                Each product series undergoes stringent physical vibration, electrical compliance, and software safety run cycles, shipping with complete material certificates and active maintenance logs.
              </p>
            </div>
          </div>

          {/* Core Product Cards Showcase */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="popLayout">
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {filteredProducts.map((p, idx) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    key={p.id}
                    onClick={() => {
                      setDetailedProduct(p);
                      setQuoteSubmitted(false);
                    }}
                    className="p-6 bg-white rounded-xl border border-slate-200/80 hover:border-slate-350 hover:shadow-xl transition-all duration-350 cursor-pointer flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 bg-slate-50 border border-slate-100 rounded text-[9px] font-bold font-mono text-slate-500 uppercase">
                          {p.modelNo}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                      </div>

                      <div className="space-y-1">
                        <h4 className="font-display font-extrabold text-sm text-slate-905 hover:text-blue-600 transition-colors">
                          {p.name}
                        </h4>
                        <p className="text-[10px] font-bold font-sans text-teal-600 uppercase tracking-widest leading-none">
                          {p.tagline}
                        </p>
                      </div>

                      <p className="text-xs text-slate-605 leading-relaxed font-sans line-clamp-2">
                        {p.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px]">
                      <div className="flex gap-1.5 flex-wrap">
                        {p.certifications.slice(0, 2).map((cert, i) => (
                          <span key={i} className="px-2 py-0.5 bg-teal-50/50 border border-teal-100 rounded text-[9px] font-bold text-teal-650 uppercase">
                            {cert}
                          </span>
                        ))}
                      </div>
                      <span className="font-bold text-blue-600 hover:text-blue-750 flex items-center shrink-0 uppercase tracking-widest text-[9px]">
                        Specs
                        <ChevronRight className="w-3 h-3 ml-0.5 animate-pulse" />
                      </span>
                    </div>

                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Deep Product Specification Drawer Overlay */}
        <AnimatePresence>
          {detailedProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setDetailedProduct(null)}
                className="absolute inset-0 bg-gray-900/60 backdrop-blur-xs"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200 z-10 flex flex-col md:flex-row max-h-[90vh]"
              >
                {/* Close Button Button */}
                <button
                  onClick={() => setDetailedProduct(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors cursor-pointer"
                >
                  <span className="text-[10px] font-bold font-mono uppercase text-slate-500 tracking-wider">Close (ESC)</span>
                </button>

                {/* Left Side: Product Specifications */}
                <div className="md:w-7/12 p-8 overflow-y-auto">
                  <div className="space-y-4 mb-6">
                    <span className="px-2 py-0.5 bg-slate-50 border border-slate-200 rounded text-[9px] font-bold font-mono text-slate-500 uppercase tracking-widest">
                      MODEL: {detailedProduct.modelNo}
                    </span>
                    <h3 className="font-display font-extrabold text-xl text-slate-900 uppercase tracking-tight">
                      {detailedProduct.name}
                    </h3>
                    <p className="text-xs font-bold font-sans text-teal-600 uppercase tracking-widest leading-none">
                      {detailedProduct.tagline}
                    </p>
                    <p className="text-xs text-slate-605 leading-relaxed font-sans">
                      {detailedProduct.description}
                    </p>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <h4 className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest mb-3">
                        Operating Features
                      </h4>
                      <ul className="space-y-2">
                        {detailedProduct.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-750">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest mb-3">
                        Technical Metrics
                      </h4>
                      <div className="border border-slate-100 rounded-lg overflow-hidden divide-y divide-slate-150">
                        {Object.entries(detailedProduct.specifications).map(([key, value]) => (
                          <div key={key} className="p-3 bg-slate-50 flex items-center justify-between text-xs font-sans text-slate-700">
                            <span className="font-semibold text-slate-500">{key}</span>
                            <span className="font-bold text-slate-900 font-mono text-[11px]">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Smart Quote Dispatcher */}
                <div className="md:w-5/12 p-8 bg-slate-50 flex flex-col justify-between overflow-y-auto border-t md:border-t-0 md:border-l border-slate-200/80">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider">
                        Get Quotation & Lead-Time
                      </h4>
                      <p className="text-xs font-sans text-slate-500 mt-1.5 leading-relaxed">
                        Request formal quotation, technical drawing portfolios, and country-specific shipment lead-times.
                      </p>
                    </div>

                    <AnimatePresence mode="wait">
                      {!quoteSubmitted ? (
                        <motion.form
                          key="quote-form"
                          onSubmit={handleQuoteRequest}
                          className="space-y-4"
                        >
                          <div>
                            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                              Institutional Email
                            </label>
                            <input
                              type="email"
                              required
                              value={quoteEmail}
                              onChange={(e) => setQuoteEmail(e.target.value)}
                              placeholder="procurement@medicalhub.org"
                              className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-xs font-sans focus:outline-none focus:border-slate-400"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                              Filing Parameters & Volumes
                            </label>
                            <textarea
                              rows={3}
                              value={quoteNotes}
                              onChange={(e) => setQuoteNotes(e.target.value)}
                              placeholder="e.g. Quantity: 10 units, dispatching to New York port."
                              className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-xs font-sans focus:outline-none focus:border-slate-400 resize-none"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                              Compliance Verification
                            </label>
                            <div className="flex gap-1.5 flex-wrap">
                              {detailedProduct.certifications.map((cert, idx) => (
                                <span key={idx} className="p-1 px-2 text-[9px] bg-white border border-slate-200 rounded font-mono font-bold text-teal-600">
                                  ✓ {cert}
                                </span>
                              ))}
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="w-full py-3 bg-slate-900 hover:bg-black text-white font-bold rounded-lg text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
                          >
                            Calculate Institutional Quote
                          </button>
                        </motion.form>
                      ) : (
                        <motion.div
                          key="quote-success"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="p-6 bg-teal-50 border border-teal-200 rounded-lg text-center space-y-4"
                        >
                          <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center mx-auto shadow-md">
                            <ShieldCheck className="w-5 h-5" />
                          </div>
                          <div>
                            <h5 className="font-display font-extrabold text-teal-900 text-xs uppercase tracking-wider">
                              Quotation Triggered
                            </h5>
                            <p className="text-[11px] text-teal-700 leading-normal mt-1.5 font-sans">
                              Secured quotation calculation parameters logged. Automated preliminary pricing table sent to corporate email.
                            </p>
                          </div>
                          <p className="text-[9px] font-mono text-slate-400">
                            TRANSACTION: RFQ-{Math.floor(Math.random() * 80000 + 10000)}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-150 text-[10px] text-slate-400 font-mono flex items-center gap-1.5 justify-center">
                    <Microscope className="w-3 h-3 text-teal-500" />
                    <span>CE and FDA Traceability Audited</span>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
