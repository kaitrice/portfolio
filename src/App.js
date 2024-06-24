import React from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import usePage from './hooks/usePage'

function App() {
  const { activePage, handleNavClick, currentPage } = usePage()
  
  const CurrentPageComponent = currentPage

  return (
    <div className='App bg-light text-dark'>
      <Navigation activePage={activePage} onNavClick={handleNavClick} />
      <div className='content'>
        <CurrentPageComponent />
      </div>
      <Footer />
    </div>
  )
}

export default App
