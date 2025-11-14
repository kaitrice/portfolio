import { Icon as DefaultIcon } from "@iconify/react/dist/iconify.js"
import { findIcon, LinkType } from "@/app/_utils"
import { NavLink } from ".."

export function IconLink({ link }: { link: LinkType }) {
    const icon = findIcon(link.type)

    const item = {
        url: link.url,
        name: <DefaultIcon icon={icon} width={24} height={24} />
    }

    return <NavLink item={item} />
}
