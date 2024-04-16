import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    O_COMPLEX_APP_API_URL: process.env.O_COMPLEX_APP_API_URL,
  },
  images: {
    domains: [
      "encrypted-tbn2.gstatic.com",
      "encrypted-tbn0.gstatic.com",
      "encrypted-tbn3.gstatic.com",
    ],
  },
};

export default nextConfig;
