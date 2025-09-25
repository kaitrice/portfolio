import { Dates, Image } from "./type"

export type Education = {
    name: string
    dates?: Dates
    location: string
    degree: string
    minors?: string[]
    research?: string[]
    image: Image
}

