import { DateType, ImageType } from "."

export type Education = {
    name: string
    location: string
    degree: string
    minors?: string[]
    research?: string[]
    image: ImageType
    dates: DateType
}

