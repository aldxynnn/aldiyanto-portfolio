export type Locale = "id" | "en";

export type ThemeMode = "editorial" | "light";

export interface LocalizedText {
  id: string;
  en: string;
}

export type ProjectCategory = "all" | "android" | "fullstack" | "crossplatform";

export type GalleryCategory = "all" | "architecture" | "afterhours" | "candid";

export interface GalleryPhoto {
  id: string;
  frame: string;
  src: string;
  title: LocalizedText;
  caption: LocalizedText;
  mood: LocalizedText;
  category: Exclude<GalleryCategory, "all">;
  objectPosition: string;
  aspect: "tall" | "portrait" | "balanced";
}

export type MockupKind =
  | "procureflow"
  | "aroma-pos"
  | "flow"
  | "ritma"
  | "fieldops"
  | "thesislab"
  | "devlens"
  | "nexus";

export interface ArchitectureLayer {
  layer: string;
  tech: string;
  detail: LocalizedText;
}

export interface ProjectItem {
  id: string;
  slug: string;
  index: string;
  title: string;
  subtitle: LocalizedText;
  category: Exclude<ProjectCategory, "all">;
  featured: boolean;
  year: string;
  role: LocalizedText;
  platform: LocalizedText;
  status: LocalizedText;
  summary: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  highlights: {
    id: string[];
    en: string[];
  };
  architecture: ArchitectureLayer[];
  stack: string[];
  liveUrl?: string;
  liveLabel?: string;
  githubUrl: string;
  mockupKind: MockupKind;
  hasDesktopPreview: boolean;
  hasMobilePreview: boolean;
  /** Basenames checked automatically inside /public/images/projects/ */
  desktopAssetBasenames?: string[];
  mobileAssetBasenames?: string[];
}

export interface ResolvedProjectAssets {
  desktopImages: string[];
  mobileImages: string[];
}

export interface SkillGroup {
  id: string;
  index: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  items: string[];
  accentNote: LocalizedText;
}

export interface SystemCapability {
  id: string;
  label: LocalizedText;
  description: LocalizedText;
  techTags: string[];
  usedIn: string[];
}

export interface ExperienceItem {
  id: string;
  role: LocalizedText;
  company: string;
  period: LocalizedText;
  type: LocalizedText;
  summary: LocalizedText;
  bullets: {
    id: string[];
    en: string[];
  };
  tags: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  shortName: string;
  degree: LocalizedText;
  period: LocalizedText;
  highlightLabel?: LocalizedText;
  highlightValue?: string;
  description: LocalizedText;
  focusAreas: {
    id: string[];
    en: string[];
  };
}

export interface CertificateItem {
  id: string;
  slug: string;
  title: string;
  issuer: string;
  category: LocalizedText;
  track: string;
  description: LocalizedText;
  skills: string[];
  /** Basename checked automatically inside /public/images/certificates/ */
  assetBasename: string;
}

export interface ResolvedAssetMap {
  projects: Record<string, ResolvedProjectAssets>;
  certificates: Record<string, string | null>;
  portraitHero: string;
  portraitFull: string;
  localAudioUrl: string | null;
}
