import { fileURLToPath } from "url";
import { dirname, join } from "path";

/** @type <u>{import('next').NextConfig}</u> */

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [join(__dirname, "src/sass")],
  },
  images: {
    remotePatterns: [
      {
        hostname: "cdn.shopify.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
