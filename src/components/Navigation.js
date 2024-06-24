import { Container, Nav, Navbar } from 'react-bootstrap'
import '../css/nav.css'

export default function Navigation({ activeScreen, onNavClick }) {
  return (
    <Navbar sticky='top' className='bg-blur border-bottom border-secondary'>
      <Container>
        <Navbar.Brand>Kait Rice</Navbar.Brand>
        <Nav className='ml-auto'>
          <Nav.Link 
            className={activeScreen === 'experience' ? 'active' : ''} 
            onClick={() => onNavClick('experience')}
          >
            <span className='text-secondary'>01.</span> my experience
          </Nav.Link>
          <Nav.Link 
            className={activeScreen === 'about' ? 'active' : ''} 
            onClick={() => onNavClick('about')}
          >
            <span className='text-secondary'>02.</span> about me
          </Nav.Link>
          <Nav.Link 
            className={activeScreen === 'contact' ? 'active' : ''} 
            onClick={() => onNavClick('contact')}
          >
            <span className='text-secondary'>03.</span> contact me
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
