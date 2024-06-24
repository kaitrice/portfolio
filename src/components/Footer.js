import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import '../css/nav.css'

export default function Footer() {
  return (
    <Navbar sticky='bottom' className='bg-blur border-top border-secondary'>
      <Container>
        <Navbar.Text>Powered by [React & Github Pages]</Navbar.Text>
        <Nav >
          <Nav.Link href='https://www.linkedin.com/in/kaitrice' target='_blank'>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Nav.Link>
            <Nav.Link href='https://www.github.com/kaitrice' target='_blank'>
              <FontAwesomeIcon icon={faGithub} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
