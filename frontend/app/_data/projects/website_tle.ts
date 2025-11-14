import { ProjectType } from "@/app/_utils";

export const tle_website: ProjectType = {
    meta: {
        title: "The Lucky Effect Website",
        description: "Designed and developed band website consistent with brand identity.",
        slug: "the-lucky-effect"
    },
    details: {
        company: "The Lucky Effect",
        dates: {
            start_date: "2025-01",
            end_date: "pause"
        },
        tools: [
            "Next.js",
            "TypeScript",
            "TailwindCSS",
            "Vercel"
        ],
        images: [
            {
                url: "/images/projects/tle-thumbnail.avif",
                alt: "alt"
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
        problem: "",
        cause: "",
        impact: "",
        solution: "",
        alt_solution: "",
        challenges: "",
        results: ""
    }
}