import { Project } from "./project.type"
import data from "../_lang/en.json"
import { sortByYear } from "./utils"

export function getProjects(max?: number): Project[]  {
    const recentProjects = sortByYear(data.projects.data)
    
    return max ? recentProjects.slice(0, max) : recentProjects
}

export function getProject(slug: string): Project | undefined {
    return data.projects.data.find((p) => p.meta.slug === slug)
}