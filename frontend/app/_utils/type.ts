export type Meta = {
    title: string
    description: string
    slug?: string
}

export type Image = {
	url: string
	alt: string
}

export type Dates = {
	start_date: string
	end_date?: string
}

export type Link = {
    type: string
    url: string
}

export type SortableItem = {
	dates?: { start_date: string; end_date?: string }
	details?: { dates?: { start_date: string; end_date?: string } }
}
