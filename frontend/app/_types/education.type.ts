import { DateType, ImageType } from "."

export type Education = {
    name: string
    dates?: DateType
    location: string
    degree: string
    minors?: string[]
    research?: string[]
    image: ImageType
}

