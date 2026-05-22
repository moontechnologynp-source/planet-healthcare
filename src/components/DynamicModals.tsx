import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, HeartPulse, ShieldCheck, FileText, ArrowRight, Activity, Sparkles, UploadCloud, CheckCircle, Briefcase, Lock } from 'lucide-react';

interface ModalsProps {
  activeModal: 'privacy' | 'terms' | 'careers' | 'consultation' | null;
  onClose: () => void;
}

export default function DynamicModals({ activeModal, onClose }: ModalsProps) {
  
  // Triage state
  const [triageStep, setTriageStep] = useState(1);
  const [triageRole, setTriageRole] = useState<'procurement' | 'doctor' | 'delegate' | null>(null);
  const [triageObjective, setTriageObjective] = useState<'hardware' | 'software' | 'logistic' | null>(null);
  const [triageName, setTriageName] = useState('');
  const [triageResult, setTriageResult] = useState<string | null>(null);

  // Careers upload state
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [appliedRole, setAppliedRole] = useState('');
  const [applicationComplete, setApplicationComplete] = useState(false);

  // Reset Triage
  const resetTriage = () => {
    setTriageStep(1);
    setTriageRole(null);
    setTriageObjective(null);
    setTriageName('');
    setTriageResult(null);
  };

  const handleTriageSubmit = () => {
    if (!triageName.trim()) return;
    
    let recommendation = '';
    if (triageRole === 'procurement' && triageObjective === 'hardware') {
      recommendation = "Our Swiss Biomedical Commission recommends the 'Planet Optima-900 ICU Ventilator' combined with a Tier-1 annual calibration contract. Your account executive in Geneva will dispatch pricing catalogues.";
    } else if (triageRole === 'delegate' && triageObjective === 'logistic') {
      recommendation = "Based on your sovereign cargo profile, we recommend activating our GDP-certified Liquid-Nitrogen cold-chain logistics protocol. We support fast customs green-channels across 45 countries.";
    } else if (triageRole === 'doctor' && triageObjective === 'software') {
      recommendation = "The HL7/FHIR cloud dashboard suite combined with PulseGuard 연속 Wearables represents the optimal EHR telemetry pipeline. We can mount test integrations inside your sandbox PACS immediately.";
    } else {
      recommendation = "Your requirements match our general Premium Corporate Integration package. Our global compliance directors are available for a private consultation briefing within 24 hours.";
    }
    
    setTriageResult(recommendation);
    setTriageStep(4);
  };

  // Careers Mock File Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setUploadedFile(file.name);
    setUploadProgress(10);
    
    // Animate fake progress loader
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 15;
      });
    }, 200);
  };

  const submitJobApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadedFile || !appliedRole) return;
    setApplicationComplete(true);
    setTimeout(() => {
      setApplicationComplete(false);
      setUploadedFile(null);
      setUploadProgress(0);
      setAppliedRole('');
      onClose();
    }, 4500);
  };

  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/65 backdrop-blur-xs"
      />

      {/* Modal core */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200 z-10 flex flex-col max-h-[90vh]"
      >
        {/* Header toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-150 bg-slate-50/50">
          <div className="flex items-center gap-2 text-blue-600">
            <HeartPulse className="w-4 h-4" />
            <span className="font-display font-bold text-xs tracking-wider text-slate-900 uppercase">
              Planet Healthcare Core Portal
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 px-2.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors text-[10px] font-bold font-mono uppercase tracking-wider cursor-pointer"
          >
            Close
          </button>
        </div>

        {/* Content body based on active modal type */}
        <div className="p-8 overflow-y-auto font-sans leading-relaxed text-slate-650 text-xs space-y-6">
          
          <AnimatePresence mode="wait">
            
            {/* 1. Privacy Ledger */}
            {activeModal === 'privacy' && (
              <motion.div
                key="privacy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-slate-100 text-blue-650 flex items-center justify-center border border-slate-200/60">
                    <ShieldCheck className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-base text-slate-900 uppercase tracking-tight">
                      Privacy & Data Minimization Ledger
                    </h3>
                    <p className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-widest mt-0.5">
                      Complies with FDA & EU-GDPR standards
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-3 text-slate-600">
                  <p>
                    Planet Healthcare implements strict physical and cryptographic security layers on healthcare parameters. Each medical transaction, diagnostic file, and consultation ticket is kept secure through military-grade protocol structures.
                  </p>
                  <p className="font-bold text-slate-800">
                    Our Privacy Assurances:
                  </p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>We never monetize, sell, or rent diagnostic files or clinical logistics records to third-party marketing brokers.</li>
                    <li>Continuous end-to-end 256-bit AES encryption is mandated for active wearer telemetry data.</li>
                    <li>Full compliance with WHO Good Distribution Practices assuring zero exposure of patient identities.</li>
                  </ul>
                  <p className="text-[9px] text-slate-400 font-mono pt-4 border-t border-slate-100">
                    LEDGER ID: REG-PRV-2026.0129-SECURE
                  </p>
                </div>
              </motion.div>
            )}

            {/* 2. Terms of Use */}
            {activeModal === 'terms' && (
              <motion.div
                key="terms"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-slate-100 text-blue-650 flex items-center justify-center border border-slate-200/60">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-base text-slate-900 uppercase tracking-tight">
                      Swiss-Direct Trading & Logistics Agreement
                    </h3>
                    <p className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-widest mt-0.5">
                      Accredited by WTO Healthcare directives
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-3 text-slate-600">
                  <p>
                    All procurement contracts, technical calibration tasks, and cold-chain cargo routes booked with Planet Healthcare conform to international trade compliance laws and biological safety requirements.
                  </p>
                  <p className="font-bold text-slate-800">
                    Liability & Mechanical Guarantees:
                  </p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>We validate hardware under 99.5% uptime guarantees, including active maintenance replacement routing.</li>
                    <li>Cold storage calibration checks are actively logged every kilometer to avoid biological damage liability.</li>
                    <li>All dispute resolutions fall under the direct jurisdiction of the federal courts of Geneva, Switzerland.</li>
                  </ul>
                </div>
              </motion.div>
            )}

            {/* 3. Consultation Triage Wizard */}
            {activeModal === 'consultation' && (
              <motion.div
                key="consultation"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="text-center pb-2">
                  <h3 className="font-display font-extrabold text-base text-slate-950 uppercase tracking-tight">
                    Clinical Triage Consulting Desk
                  </h3>
                  <p className="text-xs text-slate-500 font-sans mt-1">
                    Complete our swift triage algorithm to identify optimal procurement or compliance protocols.
                  </p>
                </div>

                {/* Progress Indicators */}
                <div className="flex items-center justify-between max-w-sm mx-auto mb-6">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center gap-1.5">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center font-mono font-bold text-xs ${
                        triageStep === step
                          ? 'bg-slate-900 text-white font-bold scale-105 shadow-sm'
                          : triageStep > step
                          ? 'bg-teal-500 text-white'
                          : 'bg-slate-200 text-slate-500'
                      }`}>
                        {triageStep > step ? '✓' : step}
                      </div>
                      {step < 3 && <div className="w-12 h-0.5 bg-slate-200" />}
                    </div>
                  ))}
                </div>

                {/* Step 1: Identify Role */}
                {triageStep === 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <h4 className="font-bold text-slate-800 text-center uppercase tracking-wider text-[10px]">What is your professional designation?</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans">
                      <button
                        onClick={() => { setTriageRole('procurement'); setTriageStep(2); }}
                        className="p-4 rounded-lg border border-slate-200 hover:border-slate-400 bg-white hover:bg-slate-50/50 text-center transition-all cursor-pointer"
                      >
                        <span className="text-2xl block mb-2">📁</span>
                        <span className="font-bold text-[10px] text-slate-850 uppercase tracking-wider block">Procurement Officer</span>
                        <span className="text-[10px] text-slate-500 mt-1 block leading-normal">Hospital supply commissions</span>
                      </button>
                      <button
                        onClick={() => { setTriageRole('doctor'); setTriageStep(2); }}
                        className="p-4 rounded-lg border border-slate-200 hover:border-slate-400 bg-white hover:bg-slate-50/50 text-center transition-all cursor-pointer"
                      >
                        <span className="text-2xl block mb-2">🩺</span>
                        <span className="font-bold text-[10px] text-slate-850 uppercase tracking-wider block">Clinician / Doctor</span>
                        <span className="text-[10px] text-slate-500 mt-1 block leading-normal">Clinical telemetry or equipment</span>
                      </button>
                      <button
                        onClick={() => { setTriageRole('delegate'); setTriageStep(2); }}
                        className="p-4 rounded-lg border border-slate-200 hover:border-slate-400 bg-white hover:bg-slate-50/50 text-center transition-all cursor-pointer"
                      >
                        <span className="text-2xl block mb-2">🏛️</span>
                        <span className="font-bold text-[10px] text-slate-850 uppercase tracking-wider block">Health Delegate</span>
                        <span className="text-[10px] text-slate-500 mt-1 block leading-normal">Compliance or state agencies</span>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Objective */}
                {triageStep === 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <h4 className="font-bold text-slate-800 text-center uppercase tracking-wider text-[10px]">Select your medical operations target:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans">
                      <button
                        onClick={() => { setTriageObjective('hardware'); setTriageStep(3); }}
                        className="p-4 rounded-lg border border-slate-200 hover:border-slate-400 bg-white hover:bg-slate-50/50 text-center transition-all cursor-pointer"
                      >
                        <span className="text-2xl block mb-2">⚡</span>
                        <span className="font-bold text-[10px] text-slate-855 uppercase block tracking-wider">Biomedical Hardware</span>
                        <span className="text-[10px] text-slate-400 mt-1 block leading-normal">Ventilators, suites, scanners</span>
                      </button>
                      <button
                        onClick={() => { setTriageObjective('software'); setTriageStep(3); }}
                        className="p-4 rounded-lg border border-slate-200 hover:border-slate-400 bg-white hover:bg-slate-50/50 text-center transition-all cursor-pointer"
                      >
                        <span className="text-2xl block mb-2">💻</span>
                        <span className="font-bold text-[10px] text-slate-855 uppercase block tracking-wider">Clinical Software</span>
                        <span className="text-[10px] text-slate-400 mt-1 block leading-normal">HL7 dashboards, cloud telemetry</span>
                      </button>
                      <button
                        onClick={() => { setTriageObjective('logistic'); setTriageStep(3); }}
                        className="p-4 rounded-lg border border-slate-200 hover:border-slate-400 bg-white hover:bg-slate-50/50 text-center transition-all cursor-pointer"
                      >
                        <span className="text-2xl block mb-2">❄️</span>
                        <span className="font-bold text-[10px] text-slate-855 uppercase block tracking-wider">Cold-Chain Logistics</span>
                        <span className="text-[10px] text-slate-400 mt-1 block leading-normal">Pharmaceutical -80C deliveries</span>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Name / Final Submission */}
                {triageStep === 3 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 max-w-sm mx-auto text-left">
                    <h4 className="font-bold text-slate-800 text-center mb-4 uppercase tracking-wider text-[10px]">Provide medical affiliation details</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-550 uppercase tracking-widest mb-1.5 font-mono">
                          Full Affiliation Name
                        </label>
                        <input
                          type="text"
                          required
                          value={triageName}
                          onChange={(e) => setTriageName(e.target.value)}
                          placeholder="Dr. Christopher Vance, Geneva Lab"
                          className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-xs font-sans focus:outline-none focus:border-slate-400"
                        />
                      </div>
                      
                      <button
                        onClick={handleTriageSubmit}
                        className="w-full py-3 bg-slate-900 hover:bg-black text-white font-bold rounded-lg text-xs uppercase tracking-widest cursor-pointer"
                      >
                        Calculate Recommendations
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Output recommendations */}
                {triageStep === 4 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 bg-slate-50 rounded-lg border border-slate-200 space-y-4 shadow-xs text-left"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
                      <h4 className="font-display font-extrabold text-xs text-slate-900 uppercase tracking-wider">
                        Corporate Recommendation Prepared:
                      </h4>
                    </div>

                    <p className="text-xs text-slate-700 leading-normal font-sans font-medium">
                      {triageResult}
                    </p>

                    <div className="h-px bg-slate-200 w-full" />

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        onClick={onClose}
                        className="flex-1 py-2.5 bg-slate-900 hover:bg-black text-white rounded-lg text-[10px] font-bold uppercase tracking-widest text-center cursor-pointer"
                      >
                        Confirm Strategy
                      </button>
                      <button
                        onClick={resetTriage}
                        className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-755 border border-slate-200 rounded-lg text-[10px] font-bold uppercase tracking-widest text-center cursor-pointer"
                      >
                        Start Over
                      </button>
                    </div>
                  </motion.div>
                )}

              </motion.div>
            )}

            {/* 4. Careers Portal */}
            {activeModal === 'careers' && (
              <motion.div
                key="careers"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-slate-100 text-blue-650 flex items-center justify-center border border-slate-200/60">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-base text-slate-900 uppercase tracking-tight">
                      Planet Healthcare Careers Portal
                    </h3>
                    <p className="text-xs text-slate-500 font-sans">
                      Join our team of global medical calibrators and cold-chain directors.
                    </p>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {!applicationComplete ? (
                    <motion.form
                      key="careers-form"
                      onSubmit={submitJobApplication}
                      className="space-y-4 text-left"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 shadow-none">
                            Target Open Role
                          </label>
                          <select
                            required
                            value={appliedRole}
                            onChange={(e) => setAppliedRole(e.target.value)}
                            className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-xs font-sans focus:outline-none focus:border-slate-400 cursor-pointer"
                          >
                            <option value="">Select open position...</option>
                            <option value="lead-biomed">Lead Bio-Medical Calibration Engineer (Geneva HQ)</option>
                            <option value="cold-chain-dir">Cold-Chain Operations Director (Singapore Hub)</option>
                            <option value="ehr-architect">EHR Systems Integration Architect (New York Branch)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                            Salary Expectation
                          </label>
                          <select className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-xs font-sans focus:outline-none focus:border-slate-400 cursor-pointer">
                            <option>CHF 90,000 - CHF 120,000 / Year</option>
                            <option>CHF 120,000 - CHF 150,000 / Year</option>
                            <option>CHF 150,000+ / Year</option>
                          </select>
                        </div>
                      </div>

                      {/* File Upload Component */}
                      <div className="p-6 bg-slate-50 border border-dashed border-slate-300 rounded-lg text-center space-y-3 cursor-pointer hover:bg-slate-100 transition-colors relative">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileUpload}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <UploadCloud className="w-8 h-8 text-blue-600 mx-auto" />
                        
                        <div>
                          <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                            Drag & drop Curriculum Vitae (PDF)
                          </p>
                          <p className="text-[10px] text-slate-400 font-sans mt-0.5">
                            Only verified clinical certifications and resumes accepted to proceed
                          </p>
                        </div>
                      </div>

                      {/* Upload progression indicator */}
                      {uploadedFile && (
                        <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-slate-700">{uploadedFile}</span>
                            <span className="font-mono font-bold text-teal-600">{uploadProgress}%</span>
                          </div>
                          <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                            <motion.div
                              className="bg-teal-500 h-full"
                              animate={{ width: `${uploadProgress}%` }}
                            />
                          </div>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={!uploadedFile || uploadProgress < 100}
                        className={`w-full py-3 text-xs uppercase font-bold tracking-widest font-mono rounded-lg transition-all ${
                          uploadedFile && uploadProgress === 100
                            ? 'bg-slate-900 hover:bg-black text-white cursor-pointer'
                            : 'bg-slate-250 text-slate-400 cursor-not-allowed'
                        }`}
                      >
                        File Application Ticket
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="careers-success"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-6 bg-teal-5/50 border border-teal-200 rounded-lg text-center space-y-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center mx-auto shadow-sm">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-display font-extrabold text-teal-900 text-xs uppercase tracking-wider">
                          Candidature Registered
                        </h4>
                        <p className="text-[11px] font-sans text-teal-700 leading-normal mt-1.5">
                          Curriculum CV recorded and securely dispatched. Our Swiss ethical board will inspect medical licenses and verify equivalence. Keep an eye on your mobile dial coordinates!
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

          </AnimatePresence>

        </div>

        {/* Footer toolbar info */}
        <div className="px-6 py-4 border-t border-slate-150 bg-slate-50 flex items-center gap-1.5 justify-center text-[9px] text-slate-400 font-mono tracking-wider uppercase">
          <Lock className="w-3" />
          <span>Failsafe HIPAA Vault Node</span>
        </div>
      </motion.div>
    </div>
  );
}
