import { Link as LinkType, Image as ImageType, Dates as DateType } from '../_types/type'
import { findIcon, formatDateToMonthYear } from './utils'
import { getJobs } from "./jobs"
import { getProject, getProjects } from './projects'
import { getEducation } from "./education"
import { Job as JobType } from "../_types/job.type"
import { Project as ProjectType, Details as DetailType } from '../_types/project.type'
import { Education as EducationType } from "../_types/education.type"
import { NavItem as NavItemType } from "@/app/_types/navItem.type"

export { formatDateToMonthYear, getProject, getProjects, getEducation, getJobs, findIcon }
export type { LinkType, ProjectType, EducationType, JobType, ImageType, DateType, NavItemType, DetailType }
