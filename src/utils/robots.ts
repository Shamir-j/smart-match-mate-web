// app/robots.ts
import type { MetadataRoute } from "next";


export const dynamic = "force-static";
export const revalidate = false;

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://one-night-stand.co";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/", "/admin/"], // block private paths
        },
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    };
}
