import { ProjectType } from "@/app/_utils";

export const panic_pal: ProjectType = {
    meta: {
        title: "Panic Pal | Mobile Chatbot",
        description: "Cross-platform app providing panic and anxiety relief when it matters most.",
        slug: "panic-pal"
    },
    details: {
        company: "Western Washington University | Principles of Human-Centered Technology Design",
        dates: {
            start_date: "2023-09",
            end_date: "2023-12"
        },
        tools: [
            "React Native",
            "Firebase",
            "OpenAI API",
            "Expo"
        ],
        images: [
            {
                url: "/images/projects/panic-pal-thumbnail.avif",
                alt: "3 images of phones showcasing login screen, example chat, and SOS page."
            }
        ],
        links: [
            {
                type: "github",
                url: "https://github.com/kaitrice/panic-pal"
            },
            {
                type: "preview",
                url: "https://youtu.be/Ueqlpl4Sl4U"
            }
        ]
    },
    caseStudy: {
        problem: "Panic attacks are defined as: episode(s) of intense anxiety triggering severe physical and psychological reactions despite no real danger. When the attacks occur, they can prevent people from doing things they want or need to do, decreasing quality of life. According to the National Institute of Mental Health (NIMH), 2.7% of US adults yearly experience severe anxiety as of 2019. That is about 7,042,592 adults alone and the younger you are the more likely you are to have. Since the 2020 COVID outbreak, around the world we have seen a rise in anxiety due to several factors. More and more people every day are facing hardships getting through mundane, daily tasks. User need quick, guided support to help them get back to their daily lives. Existing solutions are often clustered, slow, or not optimized for urgent use.",
        cause: "Existing solutions often were packaged as a 'one size fits all' approach which neglects nuances of an individuals' history or situation.",
        impact: "Users couldn't reliable access several grounding technique, expanding their mental health toolbox and switching techniques with ease if one isn't providing adequate support. Users need fast and efficient solutions that don't require a lot of brain power.",
        solution: "The goal of this project was to achieve Sustainable Development Goal (SDG) 3: Ensure healthy lives and promote well-being for all at all ages and SDG 10: Reduce inequality within and among countries. To do this, artificial intelligence (AI) was leveraged to help individuals with effective and personalized tools in managing panic attacks and empower users to find solace. At the time of this project, there were not many trusted AI solutions tailored to this cause. OpenAPI had a relatively affordable and well-documented API the allowed the application to access the large language model (LLM). Using a React Native frontend powered by Expo, enabled the app to quickly load responsively on any device and enable offline capabilities (in production). *Acknowledgment: AI is is no way a replacement for real therapy or medication management.",
        alt_solution: "Considered having the chatbot decide when to offer alternative grounding techniques, ensuring to prompt the model accordingly. However, opted to have several features for users to interact with such as a *private* journal, breathing exercises (with presets and user inputted options), and emergency contacts. This enabled users to run through exercises with the model and have visual cues providing several opportunities to find support.",
        challenges: [
            "The consideration of how to save chat history for privacy and storage reasons. After concluding a chat, the chatbot has ChatGPT provide a summary of the chat and stores the response in local storage. When the application is reopened, the chatbot initializes a new chat with the summary in the background to ensure personalized results and tailored solutions are used."
        ]
    }
}