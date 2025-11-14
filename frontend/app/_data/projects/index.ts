import { ProjectType } from "@/app/_utils"
import { diono_app } from "./app_diono"
import { panic_pal } from "./app_panic_pal"
import { deadwood } from "./game_deadwood"
import { color_match } from "./game_color_match"
import { tle_website } from "./website_tle"
import { diono_website } from "./website_diono"
import { wwxs_website } from "./website_wwxs"

export const projects: ProjectType[] = [ 
    diono_app,
    panic_pal,
    deadwood,
    color_match,
    tle_website,
    diono_website,
    wwxs_website,
]
