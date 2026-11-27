import fs from "node:fs";
import path from "node:path";
import { CERTIFICATES, PROJECTS } from "@/data/portfolio";
import type { ResolvedAssetMap } from "@/types/portfolio";

const SUPPORTED_IMG_EXTS = [".png", ".jpg", ".jpeg", ".webp"];
const SUPPORTED_AUDIO_EXTS = [".mp3", ".m4a", ".ogg", ".wav"];

function resolveFirstExisting(
  publicSubdir: string,
  basename: string,
  exts: string[] = SUPPORTED_IMG_EXTS
): string | null {
  const baseDir = path.join(process.cwd(), "public", publicSubdir);
  for (const ext of exts) {
    const filePath = path.join(baseDir, `${basename}${ext}`);
    if (fs.existsSync(filePath)) {
      return `/${publicSubdir.replace(/\\/g, "/")}/${basename}${ext}`;
    }
  }
  return null;
}

export function resolvePortfolioAssets(): ResolvedAssetMap {
  const projects: ResolvedAssetMap["projects"] = {};

  for (const project of PROJECTS) {
    const desktopImages: string[] = [];
    const mobileImages: string[] = [];

    for (const base of project.desktopAssetBasenames ?? []) {
      const found = resolveFirstExisting("images/projects", base);
      if (found) desktopImages.push(found);
    }

    for (const base of project.mobileAssetBasenames ?? []) {
      const found = resolveFirstExisting("images/projects", base);
      if (found) mobileImages.push(found);
    }

    projects[project.id] = { desktopImages, mobileImages };
  }

  const certificates: ResolvedAssetMap["certificates"] = {};
  for (const cert of CERTIFICATES) {
    certificates[cert.id] = resolveFirstExisting(
      "images/certificates",
      cert.assetBasename
    );
  }

  const heroFull =
    resolveFirstExisting("images/profile", "aldiyanto") ??
    "/images/profile/aldiyanto.jpeg";
  const aboutPortrait =
    resolveFirstExisting("images/profile", "aldiyanto-about") ??
    resolveFirstExisting("images/gallery", "07-seoul-interlude") ??
    heroFull;

  const localAudioUrl =
    resolveFirstExisting("audio", "wyw-my-sweetie", SUPPORTED_AUDIO_EXTS) ??
    resolveFirstExisting("audio", "soundtrack", SUPPORTED_AUDIO_EXTS);

  return {
    projects,
    certificates,
    portraitHero: heroFull,
    portraitFull: aboutPortrait,
    localAudioUrl,
  };
}
