import { Project } from "../type/project"
import projects from '../data/projects.json'
import { sortByYear } from "./utils"

export function getProjects(max?: number): Project[]  {
    const recentProjects = sortByYear(projects)
    
    return max ? recentProjects.slice(0, max) : recentProjects
}

export function getProject(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug)
}