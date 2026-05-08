import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.intralogik.com/sitemap.xml",
    host: "www.intralogik.com",
  };
}
