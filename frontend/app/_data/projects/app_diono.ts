import { ProjectType } from "@/app/_utils";

export const diono_app: ProjectType = {
    meta: {
        title: "Diono Safety Hub | Mobile Application",
        description: "Cross-platform app providing caregivers realtime car seat resources to keep their kids safe.",
        slug: "diono-app"
    },
    details: {
        company: "Diono",
        dates: {
            start_date: "2024-06",
            end_date: "2024-12"
        },
        tools: [
            "React Native",
            "Firebase",
            "Expo"
        ],
        images: [
            {
                url: "/images/projects/safety-hub-thumbnail.avif",
                alt: "4 images of phones showcasing login, home, product detail, and tips screens."
            }
        ],
        links: undefined
    },
    caseStudy: {
        problem: "Any car seat is difficult to install. Parents do their best, but according to a US National Highway Traffic Safety Administration (NHTSA) study about half (46%) of parents installed their child's car seat incorrectly. Parents need reliable access to manuals and support resources, but this information is scattered and region specific regulations change as the child grows.",
        cause: "Diono car seat data was spread out having printed resources sent with each seat, separate websites for content (BigCommerce, Zendesk), and differed by region (US, Canada). Offline access was only available to parents who had their manual with them or reliable internet access on the go.",
        impact: "Customers contacted support for information that should be accessible on their own. All the while, children were the ones being the most affected.",
        solution: "Develop a React Native mobile app providing relevant offline resources for parents about their car seat. Leveraging BigCommerce API solutions for obtaining product and customer data and Zendesk for product frequently asked questions (FAQs).",
        challenges: [
            "Handing user authentication started as a challenge. Originally the idea was the app would be an independent entity, handling its own users. This ended up becoming a lot of unnecessary overhead and instead used each region's storefront to retrieve and create users on the app.",
            "AsyncStorage was leveraged to manage offline capabilities, storing only the information about a users saved products."
        ],
        results: "A near launch ready mobile application supporting two regions with offline functionality reducing customer service dependency. This app informed future product roadmap and brought a new ideas to product marketing team."
    }
}