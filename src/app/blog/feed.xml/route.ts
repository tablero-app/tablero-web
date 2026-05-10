import { getAllPosts } from "@/lib/blog";

const SITE_URL = "https://www.intralogik.com";
const FEED_TITLE = "Blog Intralogik · GMAO y mantenimiento industrial";
const FEED_DESCRIPTION =
  "Guías prácticas sobre GMAO, mantenimiento industrial, digitalización de PYMEs industriales y gestión de planta.";
const LANGUAGE = "es-ES";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = getAllPosts();
  const lastBuild = new Date().toUTCString();

  const items = posts
    .slice(0, 20)
    .map((p) => {
      const url = `${SITE_URL}/blog/${p.frontmatter.slug}`;
      const pubDate = new Date(p.frontmatter.date).toUTCString();
      return `    <item>
      <title>${escapeXml(p.frontmatter.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(p.frontmatter.excerpt || p.frontmatter.description)}</description>
      <pubDate>${pubDate}</pubDate>
      <author>info@intralogik.com (${escapeXml(p.frontmatter.author)})</author>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${SITE_URL}/blog</link>
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>${LANGUAGE}</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${SITE_URL}/blog/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
