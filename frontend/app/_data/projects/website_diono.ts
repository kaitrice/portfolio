import { ProjectType } from "@/app/_utils";

export const diono_website: ProjectType = {
    meta: {
        title: "Diono Website Redesign",
        description: "Redesigned BigCommerce theme, boosting performance and visual consistency.",
        slug: "diono-website"
    },
    details: {
        company: "Diono",
        dates: {
            start_date: "2025-04",
            end_date: "2025-05"
        },
        tools: [
            "HTML",
            "CSS",
            "Handlebars.js"
        ],
        images: [
            {
                url: "/images/projects/diono-website/thumbnail.avif",
                alt: "2 computers with the Diono homepage to the left and a product page on the screen to the right."
            },
            {
                url: "/images/projects/diono-website/image2.avif",
                alt: "Homepage after"
            },
            {
                url: "/images/projects/diono-website/image5.avif",
                alt: "Product page after, frequently asked questions tab"
            },
            {
                url: "/images/projects/diono-website/image6.avif",
                alt: "Product page after, more tab"
            },
            {
                url: "/images/projects/diono-website/image3.avif",
                alt: "Homepage before"
            },
            {
                url: "/images/projects/diono-website/image4.avif",
                alt: "Product page before"
            }
        ],
        links: [
            {
                type: "preview",
                url: "https://store.diono.com"
            }
        ]
    },
    caseStudy: {
        problem: "Diono re-adopted a BigCommerce legacy theme of their's from 2020. The theme was slow, had outdated connections, and was not optimized for their product data which has grown tremulously since the original theme was used.",
        cause: "The legacy design was not compliant by US Standards and had inconsistent UI with backend data displayed on the frontend.",
        impact: "The website saw lower engagement rates while cart abandonment increased, exacerbating the ongoing decline in add-to-card rates. Customers didn't trust the website with the drastic changes and inconsistent styling made the website looked fraudulent.",
        solution: "The solution required two parts. (1) Updating overall website visual appeal; bringing back previous website's branding and hiding extraneous backend data. This re-solidified trust of the website with customers and protected the company's operational data. (2) Increase speed and build out sitemap. A comprehensive audit was done on the front/backend API connections. This had been standard operational procedure (SOP) I introduced after starting with the company, which meant I had a strong understanding of what the necessary connections were. After sifting through code and BigCommerce interface, several outdated, legacy scripts were found and removed. After which, compliance reviewed the website and came up with a list of outstanding pages needed to be present for compliance.",
        alt_solution: "We explored the possibility of finding or building an entirely new theme, but decided that this would be too timely and cost inefficient. Instead patching an existing theme was the best solution.",
        challenges: [
            "The issue occurred quickly and had a high impact. Therefore, a fast and effective solution was required so daily operations could proceed.",
            "When attempting to hide data, there were several unknown custom fields and those that required transformations. I found that each rendered field had a consistent naming pattern, so the fields that fit the pattern were displayed. From there, it was easy to locate the fields that require additional transformation and finding patterns again to group transformations."
        ]
    }
}