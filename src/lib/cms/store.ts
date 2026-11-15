import fs from "fs";
import path from "path";
import {
  CMSProduct,
  CMSCapability,
  CMSTeamMember,
  CMSQualitySection,
  CMSSiteSettings,
  MediaAsset,
  CMSCaseStudy,
  AdminUser,
} from "./types";

const DATA_DIR = path.join(process.cwd(), "data", "cms");

export function readJsonFile<T>(filename: string, fallback: T): T {
  try {
    const filePath = path.join(DATA_DIR, filename);
    if (!fs.existsSync(filePath)) {
      return fallback;
    }
    const content = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(content) as T;
  } catch (err) {
    console.error(`Error reading ${filename}:`, err);
    return fallback;
  }
}

export function writeJsonFile<T>(filename: string, data: T): boolean {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    const filePath = path.join(DATA_DIR, filename);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error(`Error writing ${filename}:`, err);
    return false;
  }
}

// Generic helpers
export async function readCMSData<T>(filename: string): Promise<T | null> {
  return readJsonFile<T | null>(filename, null);
}

export async function writeCMSData<T>(filename: string, data: T): Promise<boolean> {
  return writeJsonFile(filename, data);
}

// Products
export function getCMSProducts(): CMSProduct[] {
  return readJsonFile<CMSProduct[]>("products.json", []);
}

export function saveCMSProducts(products: CMSProduct[]): boolean {
  return writeJsonFile("products.json", products);
}

// Capabilities
export function getCMSCapabilities(): CMSCapability[] {
  return readJsonFile<CMSCapability[]>("capabilities.json", []);
}

export function saveCMSCapabilities(capabilities: CMSCapability[]): boolean {
  return writeJsonFile("capabilities.json", capabilities);
}

// Team
export function getCMSTeam(): CMSTeamMember[] {
  return readJsonFile<CMSTeamMember[]>("team.json", []);
}

export function saveCMSTeam(team: CMSTeamMember[]): boolean {
  return writeJsonFile("team.json", team);
}

// Case Studies
export function getCMSCaseStudies(): CMSCaseStudy[] {
  return readJsonFile<CMSCaseStudy[]>("case_studies.json", []);
}

export function saveCMSCaseStudies(studies: CMSCaseStudy[]): boolean {
  return writeJsonFile("case_studies.json", studies);
}

// Site Settings
export function getCMSSiteSettings(): CMSSiteSettings {
  return readJsonFile<CMSSiteSettings>("site_settings.json", {
    companyName: "Innovative Thermal Solutions Inc.",
    tagline: "High-Performance Thermal Management & Friction Stir Welding",
    phone: "+1 (519) 763-4454",
    email: "engineering@itscooling.com",
    address: "290 Southgate Drive, Unit 2",
    city: "Guelph",
    postalCode: "N1G 4P5",
    country: "Canada",
    announcementText: "ISO 9001:2015 CERTIFIED · GUELPH, ONTARIO, CANADA · 100% CUSTOM",
    announcementVisible: true,
    topBarBadge: "ISO 9001:2015 CERTIFIED",
    fswHeroHeadline: "IN-HOUSE FRICTION STIR WELDING",
    fswHeroButtonText: "EXPLORE FSW",
    fswHeroButtonHref: "/capabilities/friction-stir-welding",
    updatedAt: new Date().toISOString(),
  });
}

export function saveCMSSiteSettings(settings: CMSSiteSettings): boolean {
  return writeJsonFile("site_settings.json", settings);
}

// Quality
export function getCMSQuality(): CMSQualitySection {
  return readJsonFile<CMSQualitySection>("quality.json", {} as CMSQualitySection);
}

export function saveCMSQuality(quality: CMSQualitySection): boolean {
  return writeJsonFile("quality.json", quality);
}

// Media
export function getCMSMediaAssets(): MediaAsset[] {
  return readJsonFile<MediaAsset[]>("media_assets.json", []);
}

export function saveCMSMediaAssets(assets: MediaAsset[]): boolean {
  return writeJsonFile("media_assets.json", assets);
}

// Users
export function getCMSUsers(): AdminUser[] {
  return readJsonFile<AdminUser[]>("users.json", []);
}

export function saveCMSUsers(users: AdminUser[]): boolean {
  return writeJsonFile("users.json", users);
}
