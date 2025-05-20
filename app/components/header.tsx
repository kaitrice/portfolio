'use client'
import { useState } from "react"
import { Moon, Sun } from "@phosphor-icons/react"
import Link from "next/link"

export default function Header() {
  // State for theme toggle (light/dark)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Toggle between dark and light mode
  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle("dark", !isDarkMode) // Toggle the 'dark' class on the body element
  }

  return (
    <nav className="border-b px-4 sm:px-6 lg:px-48">
      <div className="flex justify-between h-16 items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-xl font-bold">
            KR
          </Link>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={handleThemeToggle}
          className="p-2 rounded-full bg-gray-200 text-yellow-400 dark:text-blue-600 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          {isDarkMode ? (
            <Sun size={24} />
          ) : (
            <Moon size={24} />
          )}
        </button>
      </div>
    </nav>
  )
}
