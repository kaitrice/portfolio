import { Project } from "./project.type"
import { sortByYear } from "./utils"
import projects from "../_data/projects.json"

const projectData = projects.data

export function getProjects(max?: number): Project[]  {
    const recentProjects = sortByYear(projectData)
    
    return max ? recentProjects.slice(0, max) : recentProjects
}

export function getProject(slug: string): Project | undefined {
    return projectData.find((p) => p.meta.slug === slug)
}