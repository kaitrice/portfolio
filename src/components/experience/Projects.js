import { Container } from 'react-bootstrap'
import { projects } from '../../data'
import Project from './project'

export default function Projects() {
  return (
    <section id='projects' className='mt-3'>
      <Container className='text-center'>
        <h2 className='fw-bold'><u>Projects</u></h2>
        {projects.map((item, index) => (
          <Project 
            key={index}
            item={item}
          />
        ))}
      </Container>
    </section>
  )
}