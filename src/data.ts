import { Service, Metric, ProductSpecialty, Testimonial, IndustryServed, Certification, OfficeLocation } from './types';

export const servicesData: Service[] = [
  {
    id: 'medical-equipment',
    title: 'Medical Equipment Supply',
    shortDesc: 'State-of-the-art diagnostic, surgical, and life-support machinery sourced from worldwide leading manufacturers.',
    fullDesc: 'We supply high-precision and certified medical machinery to multi-specialty hospitals and clinics. Our product index features top-grade critical care units, imaging suites, and emergency response kits engineered to perform with absolute precision.',
    icon: 'Stethoscope',
    features: [
      'Next-generation invasive & non-invasive ICU Ventilators',
      'High-performance surgical and ambient LED theater lighting',
      'Multi-parameter modular patient monitoring setups',
      'Ergonomic, electric multi-functional anesthesia workstations'
    ],
    specs: [
      'ISO 13485:2016 Quality Management Compliant',
      'FDA 510(k) Pre-market cleared devices',
      'Minimum operating uptime guarantee > 99.5%',
      'Calibrated in accordance with global medical instrumentation standards'
    ]
  },
  {
    id: 'healthcare-solutions',
    title: 'Integrated Healthcare Solutions',
    shortDesc: 'Digital health infrastructure, electronic diagnostics software, and telemetry medical software.',
    fullDesc: 'Custom enterprise integration projects bridging hardware and hospital workflows. We design secure PACS imaging networks, real-time wireless bedside monitoring relays, and clinical alert services.',
    icon: 'Activity',
    features: [
      'HL7 and FHIR compliant digital cloud medical dashboard integration',
      'Enterprise PACS (Picture Archiving and Communication Systems) deployment',
      'Advanced telemetry data capture with client dashboard dashboards',
      'AI-assisted symptom triaging and remote patient monitors'
    ],
    specs: [
      'Fully HIPAA and GDPR compliant architecture',
      'End-to-end 256-bit AES cryptographic protection',
      'DICOM format standard compatibility',
      'Redundant hot-swap system backups'
    ]
  },
  {
    id: 'diagnostic-support',
    title: 'Diagnostic Support Systems',
    shortDesc: 'Automated analytical laboratories, precise molecular testing, and chemical pathology hardware.',
    fullDesc: 'Equipping modern laboratories with highly automated in-vitro analytical machines. We ensure that laboratory results achieve world-class accuracy with reduced human footprint and swift cycle times.',
    icon: 'Heart',
    features: [
      'High-throughput chemiluminescence immunoassay analyzers',
      'Automated molecular PCR diagnostic workstations',
      'Clinical chemistry and hematology benchtop platforms',
      'Rapid point-of-care infectious disease test kits'
    ],
    specs: [
      'CLIA compliant lab workflow systems',
      'CE-IVD certification on critical biological panels',
      'Precision deviation metrics lower than 0.02%',
      'Bidirectional LIS software interfacing'
    ]
  },
  {
    id: 'hospital-clinic-support',
    title: 'Hospital & Clinic Support',
    shortDesc: 'Strategic clinic setup consultancy, medical workflow optimization, and operational support.',
    fullDesc: 'We streamline private clinic and large-scale hospital launch sequences. From biomedical testing calibrations to floor layout planning conforming with infectious containment protocols, our staff ensures seamless execution.',
    icon: 'Shield',
    features: [
      'Certified medical gas pipeline engineering design',
      'Infection-control laminar flow cleanroom layouts',
      'Comprehensive annual biomedical calibration audits',
      'Emergency back-up supply chains and surge planning'
    ],
    specs: [
      'ASHRAE standard 170 compliance for medical air',
      'NFPA 99 Healthcare facilities code safety auditing',
      'Full facility licensing support and accreditation counseling',
      'On-demand biomedical engineering responsive crew'
    ]
  },
  {
    id: 'medical-consultation',
    title: 'Medical Advisory & Trial Consultation',
    shortDesc: 'Global regulatory compliance advisory, product filing registration, and drug safety auditing.',
    fullDesc: 'Steering healthcare manufacturers and developers through international health authorities. We handle regulatory dossier preparations, ISO certification readiness audits, and clinical performance verification filings.',
    icon: 'FileText',
    features: [
      'FDA and EMA premarket notification dossier preparations',
      'MDR/IVDR classification structural consulting',
      'Post-market safe vigilance reporting systems',
      'Qualified medical writers and biostatisticians'
    ],
    specs: [
      '100% compliance record with international regulatory filings',
      'Certified ISO 14971 Risk Management assessors',
      'Continuous compliance monitoring reports',
      'Biomedical ethics panel alignment services'
    ]
  },
  {
    id: 'healthcare-distribution',
    title: 'Cold-Chain Global Distribution',
    shortDesc: 'GDP-certified, temperature-controlled biological and pharmaceutical logistics logistics.',
    fullDesc: 'Ensuring absolute preservation of sensitive therapeutics, vaccines, and high-value materials. Our cold-chain shipping integrates real-time IoT monitors communicating active temperatures every kilometer.',
    icon: 'Truck',
    features: [
      'GDP compliant temperature-controlled container networks (-80°C to +25°C)',
      'Real-time cellular live telemetry GPS temperature tracking',
      'Redundant liquid-nitrogen cooling backups',
      'Pre-cleared green-channel medical customs clearing documentation'
    ],
    specs: [
      'Strict WHO GDP (Good Distribution Practices) Certificate compliance',
      'IATA Temperature Control Regulations (TCR) compliance',
      'Validation thermal profiles for all seasons',
      '24/7 global tracking center with emergency bypass hubs'
    ]
  }
];

export const metricsData: Metric[] = [
  {
    id: 'hospitals-served',
    value: '1,420+',
    label: 'Healthcare Centers Powered',
    icon: 'Hospital',
    description: 'Hospitals, medical educational institutions, and healthcare centers relying daily on our technology.'
  },
  {
    id: 'products-supplied',
    value: '22,500+',
    label: 'Precision Medical Inst.',
    icon: 'CheckCircle',
    description: 'Active life-saving instruments, ventilators, monitors, and scanners placed under corporate maintenance.'
  },
  {
    id: 'countries-reached',
    value: '45+',
    label: 'Global Nations Reached',
    icon: 'Globe',
    description: 'Our certified cold-chain and clinical supply channels spanning key regions across North America, Europe, Asia, and MEA.'
  },
  {
    id: 'experience-years',
    value: '24+',
    label: 'Years of Credibility',
    icon: 'Award',
    description: 'Over two decades of dedication to patient well-being, premium product engineering, and medical integrity.'
  }
];

export const productsData: ProductSpecialty[] = [
  {
    id: 'optima-900',
    name: 'Planet Optima-900',
    category: 'support',
    modelNo: 'PL-OPT-900',
    tagline: 'High-Performance Hybrid ICU Ventilator',
    description: 'Equipped with real-time lung modeling software, auto-compensating gas control, and a durable turbine architecture. Designed for neonates through adults with critical ventilation demands.',
    features: [
      'Intelligent Target-Volume control to minimize barotrauma risk',
      'High-frequency oscillating ventilation (HFOV) native capability',
      'Built-in 15.6-inch medical touchscreen with patient mechanics overlays',
      'Independent 4-hour medical internal batteries + hot-swap backup module'
    ],
    certifications: ['CE Mark Class III', 'ISO 80601-2-12', 'FDA 510(k) Cleared'],
    specifications: {
      'Tidal Volume Range': '2 mL to 2500 mL',
      'Max IPAP Pressure': '60 cm H2O',
      'O2 Sensor Type': 'Paramagnetic (Maintenance-Free)',
      'Gas Supply Flow': 'Up to 240 L/min'
    }
  },
  {
    id: 'aura-x-surgical',
    name: 'Aura-X Robotic Suite',
    category: 'surgical',
    modelNo: 'AX-SURG-500',
    tagline: 'Micron-Precision Minimally Invasive Robotic System',
    description: 'Elevates surgeons with intuitive sub-millimeter tremor filtering, 3D high-definition ergonomic scopes, and responsive modular tool controllers. Perfect for thoracic, cardio, and urologic theater rooms.',
    features: [
      'Smart Tremor Control translating surgical hands to micro-motions',
      'Ultra-HD stereoscopic visual screen with 15x digital magnification',
      'Multi-axis high degree-of-freedom surgical arm attachments',
      'Instantly adaptable workflow preset profiles for individual specialists'
    ],
    certifications: ['ISO 13485:2016', 'CE Certified', 'TUV Safety Approved'],
    specifications: {
      'Precision Resolution': '0.05 mm mechanical displacement',
      'Arm Degrees of Freedom': '7 axis per manipulator',
      'Latency Response': '< 4 milliseconds',
      'Optical Resolution': '4K UHD stereoscopic'
    }
  },
  {
    id: 'insight-v3',
    name: 'Insight-V3 Ultra-Scanner',
    category: 'imaging',
    modelNo: 'PL-INS-V3',
    tagline: 'Deep Shearwave Elastography Imaging Console',
    description: 'An premium imaging system delivering clear cellular borders. Features hardware-accelerated diagnostic beamforming, ultra-wideband medical probes, and adaptive automation filters.',
    features: [
      'Real-time hepatic shearwave tissue stiffness scoring tools',
      'Dual active control panels for seated or standing operators',
      'AI-native cardiac ejection-fraction outline tools',
      'High density matrix array transducers (192 elements)'
    ],
    certifications: ['FDA Registered', 'IEC 60601-1-2', 'RoHS Compliant'],
    specifications: {
      'Frequency Spectrum': '1.5 MHz to 22.0 MHz',
      'System Channels': '4,096 hardware beamformers',
      'Display Monitor': '23.8-inch Medical Grade IPS panel',
      'Export Profiles': 'DICOM 3.0, HL7 Export'
    }
  },
  {
    id: 'genepulse-x',
    name: 'GenePulse-X PCR Analyzer',
    category: 'diagnostic',
    modelNo: 'GP-PCR-X',
    tagline: '96-Well Multiplex Real-time PCR Detection System',
    description: 'Accelerated thermal ramp workstations designed for clinical laboratory biology. High sensitivity detects minute biological trace targets across viral, microbial, and research targets.',
    features: [
      'Independent 6-zone Peltier thermal cycling control blocks',
      'Simultaneous 5-color optical fluorescence multiplexing',
      'Hermetically-sealed motor scanners protecting laboratory staff',
      'Fast positive/negative diagnostic call algorithms'
    ],
    certifications: ['ISO 9001:2015', 'CE-IVD Compliant', 'WHO-GMP Standard'],
    specifications: {
      'Reaction Volume': '10 µL to 100 µL',
      'Thermal Ramp Speed': 'Average 5.2 °C/second',
      'Excitation Wavelengths': '450 nm to 680 nm',
      'Cycle Run Time': '< 38 minutes'
    }
  },
  {
    id: 'pulseguard-cloud',
    name: 'PulseGuard Wearable Hub',
    category: 'personal',
    modelNo: 'PG-CLOUD-8',
    tagline: 'Clinical Continuous Multi-parameter Wearable',
    description: 'Engineered for lightweight post-discharge remote health monitoring. Continually records SpO2, ECG, breathing rate, and core skin temperature, streaming live telemetry coordinates directly to nurse stations.',
    features: [
      'Medical-grade PPG sensors measuring genuine cardiac telemetry',
      'Fall detection algorithm with emergency GPS messaging',
      'Sub-epidermal skin thermal couple tracking circadian fever levels',
      '7-day continuous lithium-cell charge capacity with magnetic charger'
    ],
    certifications: ['IP68 Waterproof', 'ISO 60601-1-11 Home Care', 'CE MDD Approved'],
    specifications: {
      'ECG Channels': 'Single Lead continuous mapping',
      'SpO2 Accuracy': '±1.8% between 70%-100% saturation',
      'Wireless Connectivity': 'BLE 5.2 + LTE-M Integrated SIM',
      'Weight': '32 grams'
    }
  }
];

export const industriesData: IndustryServed[] = [
  {
    id: 'hospitals',
    name: 'Multi-Specialty Hospitals',
    desc: 'Equipping global level trauma units, neonatal wards, operating structures, and clean ventilation rooms.',
    icon: 'Milestone',
    caseCount: '620+ facilities'
  },
  {
    id: 'clinics',
    name: 'Specialist General Clinics',
    desc: 'Optimized workflow systems, diagnostic imaging scanners, and remote health links for ambulatory networks.',
    icon: 'Briefcase',
    caseCount: '800+ facilities'
  },
  {
    id: 'laboratories',
    name: 'Diagnostic Laboratories',
    desc: 'Advanced biological immunoassays, automated hematology analyzers, PCR systems, and clean hoods.',
    icon: 'FlaskConical',
    caseCount: '340+ labs'
  },
  {
    id: 'pharmacies',
    name: 'Institutional Pharmacies',
    desc: 'Premium cold storage cabinets, monitored temperature sensors, and automated dispensing devices.',
    icon: 'Plus',
    caseCount: '1,200+ pharmacies'
  },
  {
    id: 'healthcare-institutes',
    name: 'Governmental & Health Services',
    desc: 'Providing emergency surge storage units, disaster relief tools, and regional medical distribution setups.',
    icon: 'ShieldAlert',
    caseCount: '45+ state systems'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    quote: "Partnering with Planet Healthcare changed how we manage our ICU pipelines. Their hybrid ventilators represent unmatched mechanical reliability. Their biomedical responsive support was on-site within hours during our trauma wing expansion.",
    author: "Dr. Arthur Vandermeer",
    role: "Chief of Critical Care",
    institution: "St. Luke's University Medical Center",
    rating: 5
  },
  {
    id: 't2',
    quote: "In clinical molecular diagnostics, we cannot compromise on analyzer accuracy. The GenePulse-X PCR analyzer gave us solid throughput with lower margins of variance. Planet Healthcare’s calibration standards are robust, verified, and completely bulletproof.",
    author: "Dr. Elena Rostova",
    role: "Director of Laboratory Services",
    institution: "Metropol Diagnostics Hub",
    rating: 5
  },
  {
    id: 't3',
    quote: "Setting up a premium outpatient clinic requires meticulous planning. Planet Healthcare guided our air systems, emergency backups, and equipment deployment. Their project managers understood medical compliance, saving us months of regulatory delay.",
    author: "Sarah Jenkins, MHA",
    role: "Vice President of Clinical Operations",
    institution: "Summit Health Clinics",
    rating: 5
  }
];

export const certificationsData: Certification[] = [
  {
    id: 'c1',
    name: 'ISO 13485:2016',
    authority: 'LNE/G-MED Quality Systems',
    status: 'Certified',
    year: '2026',
    code: 'MD-72948-QMS',
    desc: 'International Quality Management Standard for the Manufacture and Supply of Medical Devices.'
  },
  {
    id: 'c2',
    name: 'CE Mark (MDR 2017/745)',
    authority: 'European Commission Notified Body 0459',
    status: 'Active',
    year: '2025',
    code: 'CE-94029-MED',
    desc: 'Full regulatory compliance certifying that critical life support and surgical products meet European Medical Device Regulation criteria.'
  },
  {
    id: 'c3',
    name: 'FDA 510(k) Clearances',
    authority: 'United States Food and Drug Admin.',
    status: 'Registered',
    year: '2026',
    code: 'K23405-PREMARKET',
    desc: 'Cleared medical equipment designs registered for safety, performance efficacy, and equivalence.'
  },
  {
    id: 'c4',
    name: 'WHO-GDP Guidelines',
    authority: 'World Health Organization Audits',
    status: 'Certified',
    year: '2025',
    code: 'WHO-GDP-9034',
    desc: 'Certified alignment with WHO Good Distribution Practices for pharmaceutical cold-chain and therapeutic distribution.'
  }
];

export const locationsData: OfficeLocation[] = [
  {
    id: 'un-geneva',
    city: 'Geneva',
    region: 'Switzerland (Global HQ & Compliance)',
    address: 'Avenue de Appia 20, 1211 Geneva, Switzerland',
    phone: '+41 22 791 2111',
    email: 'geneva.hq@planet-healthcare.com',
    coordinates: { lat: 46.223049, lng: 6.130983 },
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2759.715783359195!2d6.130983176694602!3d46.223049171120286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64ee390f772b%3A0xe67db50faee626ae!2sWorld%20Health%20Organization%20(WHO)!5e0!3m2!1sen!2sch!4v1700000000000!5m2!1sen!2sch'
  },
  {
    id: 'east-ny',
    city: 'New York',
    region: 'United States (Research & Distribution)',
    address: '550 First Avenue, New York, NY 10016, United States',
    phone: '+1 (212) 263-7300',
    email: 'ny.branch@planet-healthcare.com',
    coordinates: { lat: 40.744093, lng: -73.975411 },
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617540251759!2d-73.97541172342044!3d40.74409397138902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a430cc0ca5%3A0x7d9762df7bc8e22c!2sNYU%20Langone%20Health!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus'
  },
  {
    id: 'asia-sg',
    city: 'Singapore',
    region: 'Asean Hub (Logistics & Robotics Integration)',
    address: '8 Biopolis Way, One-North, 138665, Singapore',
    phone: '+65 6779 5011',
    email: 'singapore.hub@planet-healthcare.com',
    coordinates: { lat: 1.300455, lng: 103.789218 },
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.790616147413!2d103.78921867568589!3d1.3004554617300302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1a4be46313af%3A0x877bd36e84d431c!2sBiopolis!5e0!3m2!1sen!2ssg!4v1700000000000!5m2!1sen!2ssg'
  },
  {
    id: 'tokyo-jp',
    city: 'Tokyo',
    region: 'East Asia Hub (High-Precision Calibration)',
    address: '3 Chome-1-3 Hongo, Bunkyo City, Tokyo 113-8421, Japan',
    phone: '+81 3-3813-3111',
    email: 'tokyo.calib@planet-healthcare.com',
    coordinates: { lat: 35.702951, lng: 139.759902 },
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.244243640243!2d139.75990267590805!3d35.70295117257912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c1f964afdbd%3A0xf5ffb6c08fe0a09e!2sJuntendo%20University%20Hospital!5e0!3m2!1sen!2sjp!4v1700000000000!5m2!1sen!2sjp'
  },
  {
    id: 'mena-dubai',
    city: 'Dubai',
    region: 'Middle East & Africa (Equipment Distribution)',
    address: 'Building 64, Al Razi Complex, Dubai Healthcare City, UAE',
    phone: '+971 4 424 0000',
    email: 'dubai.dist@planet-healthcare.com',
    coordinates: { lat: 25.231682, lng: 55.321876 },
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1554659775985!2d55.32187647614488!3d25.23168283151819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d3bf67b841b%3A0xe21288edfae9912c!2sDubai%20Healthcare%20City!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae'
  }
];
