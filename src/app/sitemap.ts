import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const SITE_URL = "https://www.intralogik.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const posts = getAllPosts();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/precios`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/casos`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    {
      url: `${SITE_URL}/casos/fabrica-metalmecanica-cataluna`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: `${SITE_URL}/blog`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    {
      url: `${SITE_URL}/gestion-incidencias-mantenimiento`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/stock-repuestos-mantenimiento`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/mantenimiento-preventivo-correctivo`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/form-qr-mantenimiento-fabrica`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    { url: `${SITE_URL}/aviso-legal`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacidad`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/cookies`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.frontmatter.slug}`,
    lastModified: new Date(post.frontmatter.modified || post.frontmatter.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...blogEntries];
}
