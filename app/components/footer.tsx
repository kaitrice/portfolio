'use client'
import socials from '../data/social'
import NavLink from './navLink'

export default function Footer() {
  return (
    <footer className="border-t mt-6 px-4 sm:px-6 lg:px-48 py-6">
      <div className="order-none md:order flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        
        {/* Socials */}
        <div className="flex gap-6 md:order-2">
          {socials.map((social, index) => (
            <NavLink key={index} item={social} />
          ))}
        </div>

        {/* Copyright */}
        <div className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Kaitlyn Rice. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
