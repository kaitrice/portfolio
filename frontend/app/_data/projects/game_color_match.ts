import { ProjectType } from "@/app/_utils";

export const color_match: ProjectType = {
    meta: {
        title: "Color Match | Mini Game",
        description: "Mini game identifying colors with hex and RGB values.",
        slug: "color-match"
    },
    dates: {
        "start_date": "2021-09",
        "end_date": "2022-03"
    },
    details: {
        company: "Western Washington University, Dynamic Web Pages",
        tools: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        images: [
            {
                "url": "/images/projects/color-match-thumbnail.avif",
                "alt": "Image of laptop with game loading screen"
            }
        ],
        links: [
            {
                "type": "github",
                "url": "https://github.com/kaitrice/guess-the-color"
            }
        ]
    }
}