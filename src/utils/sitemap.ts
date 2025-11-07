// app/sitemap.ts
import type { MetadataRoute } from "next";

// This forces Next.js to generate sitemap at build time
export const dynamic = "force-static";
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://one-night-stand.co";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/download`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
    ];
}



// // app/sitemap.ts
// import type { MetadataRoute } from "next";

// export default function sitemap(): MetadataRoute.Sitemap {
//     const baseUrl = "https://one-night-stand.co";

//     return [
//         {
//             url: baseUrl,
//             lastModified: new Date(),
//             changeFrequency: "weekly",
//             priority: 1,
//         },
//         {
//             url: `${baseUrl}/download`,
//             lastModified: new Date(),
//             changeFrequency: "monthly",
//             priority: 0.8,
//         },
//         {
//             url: `${baseUrl}/about`,
//             lastModified: new Date(),
//             changeFrequency: "yearly",
//             priority: 0.5,
//         },
//         {
//             url: `${baseUrl}/privacy`,
//             lastModified: new Date(),
//             changeFrequency: "yearly",
//             priority: 0.5,
//         },
//         {
//             url: `${baseUrl}/terms`,
//             lastModified: new Date(),
//             changeFrequency: "yearly",
//             priority: 0.5,
//         },
//     ];
// }
