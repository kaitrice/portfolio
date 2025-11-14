import { ProjectType } from "@/app/_utils";

export const wwxs_website: ProjectType = {
    meta: {
        title: "Water Weather Station | Website Architecture",
        description: "IoT water monitoring system focusing on scaling API infrastructure and optimizing database.",
        slug: "water-weather-station"
    },
    details: {
        company: "Western Washington University | Computer Science Capstone",
        dates: {
            start_date: "2023-01",
            end_date: "2023-12"
        },
        tools: [
            "Angular",
            "Node.js",
            "PostgreSQL",
            "Docker"
        ],
        images: [
            {
                url: "/images/projects/wwxs-thumbnail.avif",
                alt: "2 images of computes, to the left showcases sensor data screen and to the right showcases device data."
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
        project_description: "This project was originally created in partnership with Western Washington University's Sea Discovery Center as a summer research activity for grade-school students. The project allowed for physical interaction building the device and collecting real water data to interrupt in the classroom. This has been an rotating capstone project (each year a new team of students built upon the existing infrastructure) for senior Computer Science students at the university from 2019 – 2024. There were three parts to this project. (1) Hardware engineering on the device prototype collecting water data via sensors. (2) Mobile app development retrieving data from the device and sending to the database. (3) Full stack development formatting UI, structuring API, and working with the database. I was responsible for the full stack portion of my team's contribution.",
        problem: "Overall functionality of the project was broken, there was not a unified data structure set and each part of the project was working on phony test data. For the website infrastructure specifically, API was extremely slow while validating and inserting data into the database; requiring individual calls for each data point. The infrastructure was also not equipped for the new requests from our client for API authentication and device history.",
        cause: "In the worst case, the physical device is setup to run senors about every five minutes and can store up to 30 days' worth of data; that's about 8,640 data points entering into the system at a time. The infrastructure was making several redundant calls attempting to do the same thing.",
        impact: "Theoretically, this was calculated to take the system upwards of 30 minutes just to upload data to API and database, if a user was retrieving the device data monthly. Also, anyone with access to the device and an account on the platform could upload the device's data and if a device is moved there was no way to track that the water data was attached to a separate location.",
        solution: "Enable batched processing on API allowing the mobile app to upload entire chunks of data to be validated and processed into database. The API and database scope was increased ensuring a user is a member of the device group and have permissions within the group to upload new data. This secures both the API and database from accidental or purposeful exchanges. Scope was also increased creating a new relational table tracking a device's location history and storing entries of devices and locations to determine where a device has been and where it currently is.",
        challenges: [
            "Visualizing a new table of location histories. Prior to this project I had never worked with Angular or within a large codebase before. After reading documentation and reviewing the folder/file structures, I was able to determine how previous teams were creating new pages showcasing data.",
            "Coordinating data structures between a team for platform functionality. The minimum viable product (MVP) for this project was a working internet of things (IoT) platform. In order to do this we had to ensure each product had correct and validated data. After testing each product and confirming it passed, we tested the platform together cohesively. To our luck, when we ran our first run through of the platform, it ran smoothly without issues!"
        ],
        results: "The changes to the API processing reduced runtime to less than a 50 seconds in the worst case; a 97.5% speed improvement. The website architecture was launched using Docker containers on a private server enabling mobile app to send data and display it on the dashboard. In my last quarter working on this project is was announced that the US Navy would be adopting its infrastructure after the final teams' completion in June 2024."
    }
}