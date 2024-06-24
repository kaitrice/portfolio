import { useState } from 'react'
import Experience from '../pages/Experience'
import About from '../pages/About'
import Contact from '../pages/Contact'

export default function usePage() {
  const [activePage, setActivePage] = useState('experience')

  const handleNavClick = (page) => {
    setActivePage(page)
  }

  let currentPage
  switch (activePage) {
    case 'experience':
      currentPage = Experience
      break
    case 'about':
      currentPage = About
      break
    case 'contact':
      currentPage = Contact
      break
    default:
      currentPage = Experience
  }

  return { activePage, handleNavClick, currentPage }
}
