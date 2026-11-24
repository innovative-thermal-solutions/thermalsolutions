// Types for the centralized ITS Cooling CMS

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: "super_admin" | "editor" | "viewer";
  passwordHash: string; // SHA-256 with salt
  createdAt: string;
  lastLogin?: string;
}

export interface MediaAsset {
  id: string;
  filename: string;
  originalName: string;
  url: string;
  size: number;
  mimeType: string;
  category: "products" | "capabilities" | "team" | "facility" | "logos" | "certificates" | "general";
  altText: string;
  uploadedAt: string;
}

export interface CMSProduct {
  id: string;
  name: string;
  family: "air" | "liquid" | "electrical";
  image: string;
  tag: string;
  short: string;
  description: string;
  material: string;
  construction: string;
  application: string;
  considerations: string;
  specifications?: Record<string, string>;
  gallery?: string[];
  cadModelUrl?: string;
  pdfUrl?: string;
  order: number;
  status: "published" | "draft" | "archived";
  updatedAt: string;
}

export interface CMSCapability {
  id: string;
  num: string;
  category: "Engineering" | "Manufacturing" | "Quality" | "Location";
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  alt: string;
  theme: "dark" | "light";
  order: number;
  status: "published" | "draft";
  updatedAt: string;
}

export interface CMSTeamMember {
  id: string;
  name: string;
  title: string;
  credentials?: string;
  bio?: string;
  quote?: string;
  image: string;
  email?: string;
  phone?: string;
  order: number;
  featured?: boolean;
  status: "published" | "draft";
  updatedAt: string;
}

export interface CMSCaseStudy {
  id: string;
  slug: string;
  title: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string;
  tempReduction?: string;
  heroImage: string;
  thermalBeforeImage?: string;
  thermalAfterImage?: string;
  gallery?: string[];
  status: "published" | "draft";
  updatedAt: string;
}

export interface CMSQualitySection {
  policyHeadline: string;
  subheadline: string;
  policyStatement: string;
  policyDirectives: string[];
  ceoName: string;
  ceoTitle: string;
  principles: {
    number: string;
    title: string;
    description: string;
  }[];
  isoRegistrationNumber: string;
  isoScope: string;
  intertekCertImage: string;
  auditorCertificates: {
    name: string;
    title: string;
    certNumber: string;
    image: string;
  }[];
  updatedAt: string;
}

export interface CMSSiteSettings {
  companyName: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  announcementText: string;
  announcementVisible: boolean;
  topBarBadge: string;
  fswHeroHeadline: string;
  fswHeroButtonText: string;
  fswHeroButtonHref: string;
  socialLinkedin?: string;
  socialTwitter?: string;
  updatedAt: string;
}

export interface CMSHomePageContent {
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    primaryCtaText: string;
    primaryCtaHref: string;
    secondaryCtaText: string;
    videoUrl?: string;
  };
  whoWeAre: {
    badge: string;
    headline: string;
    locationBadge: string;
    paragraph1: string;
    paragraph2: string;
    ctaText: string;
    ctaHref: string;
  };
  workflow: {
    badge: string;
    headline: string;
    headlineHighlight: string;
    description: string;
    steps: {
      step: string;
      title: string;
      description: string;
      image: string;
      caption: string;
    }[];
  };
  manufacturing: {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    subtitle: string;
    ctaText: string;
    ctaHref: string;
    videoUrl?: string;
  };
  contact: {
    badge: string;
    headline: string;
    subtitle: string;
    ctaText: string;
    email: string;
    phone: string;
    address: string;
    hours: string;
  };
  updatedAt?: string;
}

export interface CMSPageSection {
  id: string;
  pageId: string;
  sectionKey: string;
  name: string;
  heading: string;
  subheading?: string;
  bodyText?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  image?: string;
  videoUrl?: string;
  order: number;
  visible: boolean;
  status: "published" | "draft";
  updatedAt: string;
}

