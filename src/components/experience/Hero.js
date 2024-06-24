import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../css/Hero.css'

export default function Hero() {
  return (
    <div className='hero d-flex align-items-center'>
      <Container>
        <Row className='justify-content-center text-center'>
          <Col md={8} lg={6}>
            <h1 className='fw-bolder'>Kaitlyn Rice</h1>
            <h4>
              Passionate web and app developer focused on user experience. Skilled in front and back-end development, delivering seamless and high-quality solutions.
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
