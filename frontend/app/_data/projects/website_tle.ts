import { ProjectType } from "@/app/_utils";

export const tle_website: ProjectType = {
    meta: {
        title: "The Lucky Effect Website",
        description: "Designed and developed band website consistent with brand identity.",
        slug: "the-lucky-effect"
    },
    dates: {
        start_date: "2025-01",
        end_date: "2025-11"
    },
    details: {
        company: "The Lucky Effect",
        tools: [
            "TypeScript",
            "Next.js",
            "TailwindCSS",
            "Node.js",
            "Vercel",
            "Azure Functions",
        ],
        images: [
            {
                url: "/images/projects/tle-thumbnail.avif",
                alt: "1 image of a computer with a coming soon homepage displayed."
            }
        ],
        links: [
            {
                type: "github",
                url: "https://github.com/kaitrice/web-tle"
            },
            {
                type: "preview",
                url: "https://theluckyeffect.com/"
            }
        ]
    },
    caseStudy: {
        problem: "As the band was starting to grow and release music, they need to enhance their online presence with a professional website showcasing music, events, and telling their story without monthly subscription costs that most website builders have.",
        solution: "A custom Next.js, SEO friendly frontend with dynamic content retrieved from a Node.js, REST API hosted on Azure functions that extracts, transforms, and loads (ETL) data from Apple Music, Spotify, and Bands in Town enabling automated data updates.",
        alt_solution: "A wix or SquareSpace website was considered for speed and content management system (CMS), but a custom code provided a cheaper solution tailored to their aesthetic and mostly stable content.",
        challenges: [
            "Creating a modern website without the help of a full CMS. I've built many websites throughout the years, but this challenged my design creativity while staying within the bounds of a typical artist portfolio.",
            "Ensuring the website was fast and SEO friendly. I used Next's Metadata class and customizing it to fit the band's needs for each page.",
            "Integrating APIs into a unified, expected model that could easily be showcased on the frontend. I started with the basics of what should be expected, then explored each API's capabilities building out the model with pieces of each."
        ],
        results: "Ongoing management and monitoring is expected post-launch. Results coming soon."
    }
}