import { resolvePortfolioAssets } from "@/lib/assets";
import { PortfolioClient } from "@/components/PortfolioClient";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const assets = resolvePortfolioAssets();
  return <PortfolioClient assets={assets} />;
}
