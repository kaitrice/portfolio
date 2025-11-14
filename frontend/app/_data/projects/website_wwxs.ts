import { ProjectType } from "@/app/_utils";

export const wwxs_website: ProjectType = {
    meta: {
        title: "Water Weather Station | Website",
        description: "IoT water monitoring system focusing on scaling API infrastructure and optimizing database.",
        slug: "water-weather-station"
    },
    details: {
        company: "Western Washington University Capstone",
        dates: {
            start_date: "2023-01",
            end_date: "2023-12"
        },
        tools: [
            "Angular",
            "TypeScript",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Docker"
        ],
        images: [
            {
                url: "/images/projects/wwxs-thumbnail.avif",
                alt: "alt"
            }
        ],
        links: [
            {
                type: "github",
                url: "https://github.com/GearyER/WWXS"
            },
            {
                type: "preview",
                url: "https://youtube.com/shorts/_5EAGs0iQbY"
            }
        ],
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