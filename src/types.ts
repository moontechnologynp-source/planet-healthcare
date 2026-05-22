export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  features: string[];
  specs: string[];
}

export interface Metric {
  id: string;
  value: string;
  label: string;
  icon: string;
  description: string;
}

export interface ProductSpecialty {
  id: string;
  name: string;
  category: 'imaging' | 'surgical' | 'support' | 'diagnostic' | 'personal';
  modelNo: string;
  tagline: string;
  description: string;
  features: string[];
  certifications: string[];
  specifications: Record<string, string>;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  institution: string;
  rating: number;
}

export interface IndustryServed {
  id: string;
  name: string;
  desc: string;
  icon: string;
  caseCount: string;
}

export interface Certification {
  id: string;
  name: string;
  authority: string;
  status: 'Active' | 'Certified' | 'Registered';
  year: string;
  code: string;
  desc: string;
}

export interface OfficeLocation {
  id: string;
  city: string;
  region: string;
  address: string;
  phone: string;
  email: string;
  coordinates: { lat: number; lng: number };
  embedUrl: string;
}
