import Hero from '../components/experience/Hero'
import Projects from '../components/experience/Projects'
import { Container } from 'react-bootstrap'

export default function Experience() {
  return (
    <div className='mb-4'>
      <Hero />
      <Container>
        <Projects />
      </Container>
    </div>
  )
}
