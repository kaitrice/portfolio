export type Education = {
    name: string
    degree: string
    start_date: string  // Format: YYYY-MM
    end_date: string    // Format: YYYY-MM
    location: string
    minors?: string
    meta: {
        src: string
    }
}
