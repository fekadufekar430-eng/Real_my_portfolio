// Next.js configuration: disables the development route indicator.
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the Next.js development route indicator in the bottom-left corner.
  // Build/runtime errors still appear through the normal Next.js error overlay.
  devIndicators: false,
};

export default nextConfig;
