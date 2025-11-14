import { ProjectType } from "@/app/_utils";

export const deadwood: ProjectType = {
    meta: {
        title: "Deadwood 1876 | Board Game",
        description: "Board game implemented as a text-based console (CLI) application and graphical user interface (GUI).",
        slug: "deadwood"
    },
    details: {
        company: "Western Washington University | Object Oriented Design",
        dates: {
            start_date: "2023-03",
            end_date: "2023-06"
        },
        tools: ["Java", "Swing (Java Library)"],
        images: [
            {
                url: "/images/projects/deadwood-thumbnail.avif",
                alt: "Deadwood icon with old west background"
            }
        ],
        links: [
            {
                "type": "github",
                "url": "https://github.com/kaitrice/deadwood"
            }
        ]
    }
}