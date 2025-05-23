import { ProjectLink } from "@/app/type/project.type";
import { Link } from "../common/Link";
import { Icon } from "@iconify/react/dist/iconify.js";

export function Links({ links }: { links: ProjectLink[] }) {
    return (
        <div className='flex flex-row gap-2'>
            {links.map((link, index) => (
                <Link key={index} href={link.url} aria-label={link.type ?? "external link"} className="hover:text-pink-600" >
                    {link.type === 'github' ? (
                        <Icon icon="akar-icons:github-fill" width={24} height={24} />
                    ) : (
                        <Icon icon="mdi:arrow-top-right" width={24} height={24} />
                    )}
                </Link>
            ))}
        </div>
    )
}