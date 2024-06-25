import React from 'react'
import { Row, Col, Image, Stack, Badge } from 'react-bootstrap'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import Button from '../button'

export default function Project({ item }) {
  return (
    <Row className='project d-flex align-items-center m-4'>
      <Col md={4}>
        <Image 
          src={item.image}
          fluid
          rounded
        />
      </Col>
      <Col className='text-start'>
        <h3 className='text-dark fw-bold'>{item.title}</h3>
        <Stack direction='horizontal' gap={2}>
          {item.technologies.map((tech, index) => (
            <h5 key={index} className='text-secondary'>
              {tech}
            </h5>
          ))}
        </Stack>
        <Stack direction='horizontal' gap={4} className='my-1'>
          <h6 className='text-dark fw-bold'>{item.date}</h6>
          <Badge bg={item.badgeType}>{item.badge}</Badge>
        </Stack>
        <p className='text-dark'>{item.description}</p>
        <Stack direction='horizontal' gap={3}>
          <Button 
            link={item.codeLink}
            icon={faGithub}
            text={'See Code'}
          />
          {item.projectLink === '' ? 
            '' :
            <Button 
            link={item.projectLink}
            icon={faGlobe}
            text={'View Project'}
          />
          } 
        </Stack>
      </Col>
    </Row>
  )
}
