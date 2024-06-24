import { Container, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Skill({ data }) {
  return (
    <Container>
      <Row className='justify-content-center'>
        {data.map((item, index) => (
          <Col key={index} className='text-secondary text-center mx-5 my-2'>
            <FontAwesomeIcon className='p-4' icon={item.icon} size='4x' />
            <p className='mt-2'>{item.title}</p>
          </Col>
        ))}
      </Row>
    </Container>
  )
}