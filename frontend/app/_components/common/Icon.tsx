import { Icon as DefaultIcon } from "@iconify/react/dist/iconify.js"
import { NavLink } from "./NavLink"
import { Link } from "@/frontend/app/_utils/type"
import { findIcon } from "@/frontend/app/_utils/utils"

export function IconLink({ link }: { link: Link }) {
    const icon = findIcon(link.type)

    const item = {
        url: link.url,
        name: <DefaultIcon icon={icon} width={24} height={24} />
    }

    return <NavLink item={item} />
}
