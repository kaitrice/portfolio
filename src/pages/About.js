import About from '../components/about/About'
import Skills from '../components/about/Skills'
import { Container } from 'react-bootstrap'

export default function AboutMe() {
  return (
    <Container className='my-4'>
      <About />
      <Skills />
    </Container>
  )
}
