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
        problem: "As the band was starting to grow and release music, they need to enhance their online presence with a professional website showcasing music, events, and story without only relying on social media.",
        solution: "A custom Nextjs, SEO friendly website with dynamic content and Nodejs REST API hosted using Azure functions to extract transform and load (ETL) data from Apple Music and Spotify.",
        alt_solution: "A wix or SquareSpace website was considered for speed and content management system (CMS), but a custom code provided a cheaper solution tailored to their aesthetic and mostly stable content.",
        challenges: [
            "Creating a modern website without the help of a full CMS. I've built many websites throughout the years, but this challenged my design creativity while staying within the bounds of a typical artist portfolio.",
            "Ensuring the website was fast and SEO friendly. Making using of Next's Metadata class and customizing it to fit the band's growing needs.",
            "Integrating APIs into a unified, expected model that could easily be show cases on the frontend. I started with the basics of what should be expected, then explored each API's capabilities building out the model with pieces of each."
        ],
        results: "Ongoing management and monitoring is expected post-launch. Results coming soon."
    }
}