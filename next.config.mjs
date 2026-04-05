import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

export default function nextConfig(phase) {
  return {
    reactStrictMode: true,
    // Keep `next dev` output separate from `next build` output.
    // This avoids stale chunk lookups like './682.js' when switching modes.
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next"
  };
}
