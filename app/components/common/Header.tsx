import Link from "next/link"
import NavLink from "./NavLink"

export default function Header() {
  return (
    <nav className="border-b px-4 sm:px-6 lg:px-48">
      <div className="flex justify-between h-16 items-center">
        {/* Logo */}
        <div className="flex-shrink-0 flex-1">
          <Link href="/" className="text-xl font-bold">
            KR
          </Link>
        </div>

        <nav className="flex gap-2">
          <NavLink item={{ "name": "Projects", "url": "/projects" }} />
          <NavLink item={{ "name": "About", "url": "about" }} />
        </nav>

      </div>
    </nav>
  )
}
