'use client'
import Link from "next/link"
import { useState } from "react"
import NavLink from "./navLink"

const navItems = [
  { name: 'Work', url: '/work' },
  { name: 'About', url: '/about' },
]

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b px-4 sm:px-6 lg:px-48">
      <div className="flex justify-between h-16 items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-xl font-bold">
            KR
          </Link>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <NavLink key={index} item={item} />
          ))}
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item, index) => (
            <NavLink key={index} item={item} className="block" />
          ))}
        </div>
      )}
    </nav>
  )
}
