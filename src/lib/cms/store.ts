import fs from "fs";
import path from "path";
import { revalidatePath } from "next/cache";
import {
  CMSProduct,
  CMSCapability,
  CMSTeamMember,
  CMSQualitySection,
  CMSSiteSettings,
  MediaAsset,
  CMSCaseStudy,
  AdminUser,
  CMSHomePageContent,
  CMSEvent,
  CMSCareersContent,
} from "./types";

const DATA_DIR = path.join(process.cwd(), "data", "cms");

// In-memory cache for ultra-fast reads & cross-request consistency in serverless instances
const memCache = new Map<string, any>();

// GitHub config for permanent serverless cloud persistence
const GITHUB_REPO = process.env.GITHUB_REPO || "innovative-thermal-solutions/thermalsolutions";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";

/**
 * Asynchronously syncs JSON changes to the GitHub repository so changes survive
 * Vercel serverless cold starts, container recycles, and trigger automatic deployments.
 */
async function syncToGitHub(filename: string, content: string): Promise<void> {
  if (!GITHUB_TOKEN || !GITHUB_REPO) return;
  try {
    const filePath = `data/cms/${filename}`;
    const url = `https://api.github.com/repos/${GITHUB_REPO}/contents/${filePath}`;
    
    // Check if file exists to retrieve SHA
    let sha: string | undefined;
    try {
      const getRes = await fetch(url, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          "User-Agent": "ITS-Cooling-CMS-Sync",
          Accept: "application/vnd.github.v3+json",
        },
        cache: "no-store",
      });
      if (getRes.ok) {
        const getData = await getRes.json();
        sha = getData.sha;
      }
    } catch {
      // New file or fetch error
    }

    const payload: { message: string; content: string; sha?: string } = {
      message: `CMS: update ${filename} [skip ci]`,
      content: Buffer.from(content).toString("base64"),
    };
    if (sha) {
      payload.sha = sha;
    }

    await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        "User-Agent": "ITS-Cooling-CMS-Sync",
        "Content-Type": "application/json",
        Accept: "application/vnd.github.v3+json",
      },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error(`Failed to sync ${filename} to GitHub:`, err);
  }
}

/**
 * Revalidates public pages associated with updated CMS data
 */
function triggerRevalidations(filename: string) {
  try {
    revalidatePath("/", "layout");
    if (filename === "team.json") {
      revalidatePath("/about", "page");
      revalidatePath("/about/our-design-manufacturing-experts-engineers-team", "page");
    } else if (filename === "products.json") {
      revalidatePath("/products", "page");
      revalidatePath("/portfolio", "page");
      revalidatePath("/", "page");
    } else if (filename === "capabilities.json") {
      revalidatePath("/capabilities", "page");
      revalidatePath("/", "page");
    } else if (filename === "quality.json") {
      revalidatePath("/quality", "page");
    } else if (filename === "events.json") {
      revalidatePath("/events", "page");
    } else if (filename === "careers.json") {
      revalidatePath("/careers", "page");
    } else if (filename === "homepage.json") {
      revalidatePath("/", "page");
    } else if (filename === "case_studies.json") {
      revalidatePath("/case-studies", "page");
      revalidatePath("/", "page");
    }
  } catch {
    // revalidatePath only works inside request contexts
  }
}

export function readJsonFile<T>(filename: string, fallback: T): T {
  try {
    const filePath = path.join(DATA_DIR, filename);
    if (!fs.existsSync(filePath)) {
      if (memCache.has(filename)) {
        return memCache.get(filename) as T;
      }
      return fallback;
    }
    const content = fs.readFileSync(filePath, "utf-8");
    const parsed = JSON.parse(content) as T;
    memCache.set(filename, parsed);
    return parsed;
  } catch (err) {
    console.error(`Error reading ${filename}:`, err);
    if (memCache.has(filename)) {
      return memCache.get(filename) as T;
    }
    return fallback;
  }
}

export function writeJsonFile<T>(filename: string, data: T): boolean {
  try {
    memCache.set(filename, data);
    const content = JSON.stringify(data, null, 2);

    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    const filePath = path.join(DATA_DIR, filename);
    try {
      fs.writeFileSync(filePath, content, "utf-8");
    } catch {
      // In read-only serverless filesystems, disk write fails, but memCache + GitHub succeeds
    }

    // Persist to GitHub in background
    syncToGitHub(filename, content).catch(() => {});

    // Revalidate Next.js cache so updates are immediately visible
    triggerRevalidations(filename);

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

// Homepage Content
export function getCMSHomepage(): CMSHomePageContent {
  return readJsonFile<CMSHomePageContent>("homepage.json", {
    hero: {
      badge: "THERMAL ENGINEERING. WITHOUT LIMITS.",
      titleLine1: "THERMAL MANAGEMENT",
      titleLine2: "SOLUTIONS",
      subtitle: "From Thermal Design to Manufacturing",
      primaryCtaText: "Explore our solutions",
      primaryCtaHref: "#solutions",
      secondaryCtaText: "Start a project brief",
      videoUrl: "/videos/hero-sequence-loop.mp4",
    },
    whoWeAre: {
      badge: "ABOUT ITS COOLING",
      headline: "Who We Are",
      locationBadge: "ONTARIO, CANADA & GLOBAL PARTNERS",
      paragraph1:
        "Innovative Thermal Solutions is a leading turnkey engineering firm specializing in the design and manufacture of air-cooled heat sinks and liquid cold plates for power electronics, RF generators, and battery packs.",
      paragraph2:
        "We combine in-house CFD thermal simulation, 5-axis CNC machining, and production-scale friction stir welding under one roof in Guelph, Ontario to take assemblies from concept to volume production.",
      ctaText: "Our In-House Capabilities",
      ctaHref: "/capabilities",
    },
    workflow: {
      badge: "02 / WORK FLOW AT ITS",
      headline: "From “what if”",
      headlineHighlight: "to working hardware.",
      description:
        "Thermal and mechanical design, simulation, manufacturing and testing. Connected from the very first conversation.",
      steps: [
        {
          step: "01",
          title: "Define & discover",
          description:
            "Start with your heat load, temperature targets, available space and production goals. We turn the constraints into a clear design brief.",
          image: "/images/process/define-and-discover-blended.webp",
          caption: "DEFINE REQUIREMENTS & CONSTRAINTS.",
        },
        {
          step: "02",
          title: "Design & simulate",
          description:
            "CFD, parametric studies and iterative optimization explore the thermal design. SolidWorks supports mechanical design and integration.",
          image: "/images/process/design-and-simulate.png",
          caption: "THERMAL & HYDRAULIC ANALYSIS.",
        },
        {
          step: "03",
          title: "Machine & manufacture",
          description:
            "Five-axis CNC machining and friction stir welding bring the design to life at our Ontario facility, with trusted partners for high-volume production.",
          image: "/images/process/machine-and-manufacture.png",
          caption: "PRECISION MANUFACTURING. IN HOUSE.",
        },
        {
          step: "04",
          title: "Test & deliver",
          description:
            "Experiments and prototype evaluation check thermal performance against your project requirements before moving toward production.",
          image: "/assets/liquid-assembly.webp",
          caption: "FROM PROTOTYPE TO PRODUCTION.",
        },
      ],
    },
    manufacturing: {
      line1: "IN-HOUSE",
      line2: "FRICTION",
      line3: "STIR",
      line4: "WELDING.",
      subtitle:
        "Hermetic solid-state joining and precision thermal manufacturing under one roof in Guelph, Ontario.",
      ctaText: "EXPLORE FSW",
      ctaHref: "/capabilities/friction-stir-welding",
      videoUrl: "/videos/designed-built-tested-loop.mp4",
    },
    contact: {
      badge: "YOUR NEXT BREAKTHROUGH STARTS HERE",
      headline: "Tell us what’s getting too hot.",
      subtitle: "Bring us the challenge. Let’s engineer the solution.",
      ctaText: "Start your project",
      email: "Engineering@itscooling.com",
      phone: "+1 (519) 763-4454",
      address: "290 Southgate Drive, Unit #2, Guelph, ON N1G 4P5, Canada",
      hours: "MON–FRI / 8:30 AM–5:00 PM EASTERN",
    },
    updatedAt: new Date().toISOString(),
  });
}

export function saveCMSHomepage(data: CMSHomePageContent): boolean {
  return writeJsonFile("homepage.json", data);
}

// Events
export function getCMSEvents(): CMSEvent[] {
  return readJsonFile<CMSEvent[]>("events.json", []);
}

export function saveCMSEvents(events: CMSEvent[]): boolean {
  return writeJsonFile("events.json", events);
}

// Careers
export function getCMSCareers(): CMSCareersContent {
  return readJsonFile<CMSCareersContent>("careers.json", {
    intro: {
      badge: "CAREERS AT ITS COOLING",
      heading: "Join Our Team",
      subheading: "Build the next generation of advanced thermal management solutions.",
      descriptionParagraphs: [],
      facilityStats: []
    },
    openings: [],
    updatedAt: new Date().toISOString()
  });
}

export function saveCMSCareers(careers: CMSCareersContent): boolean {
  return writeJsonFile("careers.json", {
    ...careers,
    updatedAt: new Date().toISOString()
  });
}

// Users
export function getCMSUsers(): AdminUser[] {
  return readJsonFile<AdminUser[]>("users.json", []);
}

export function saveCMSUsers(users: AdminUser[]): boolean {
  return writeJsonFile("users.json", users);
}
