import Link from "next/link"
import { NavLink } from "./NavLink"
import Image from "next/image"

export default function Header() {
  return (
    <header>
      <nav className="border-b flex justify-between h-16 items-center">
        {/* Logo */}
        <div className="flex-shrink-0 flex-1">
          <Link href="/" className="text-xl font-bold">
            {/* KR */}
            <Image 
              src = "/logos/logo_nobg.png"
              alt="KR"
              width={48}
              height={48}
            />
          </Link>
        </div>

        <div className="flex gap-6">
          <NavLink item={{ "name": "Projects", "url": "/projects" }} />
          <NavLink item={{ "name": "About", "url": "/about" }} />
        </div>
      </nav>
    </header>
  )
}
