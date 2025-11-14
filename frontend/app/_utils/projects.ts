import { Project } from "../_types/project.type"
import { sortByYear } from "./utils"
import { projects } from "../_data/projects"

export function getProjects(max?: number): Project[]  {
    const recentProjects = sortByYear(projects)
    return max ? recentProjects.slice(0, max) : recentProjects
}

export function getProject(slug: string): Project | undefined {
    return projects.find((p) => p.meta.slug === slug)
}