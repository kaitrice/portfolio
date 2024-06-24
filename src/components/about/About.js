import { Row, Col, Image } from 'react-bootstrap'
import headshot from '../../assets/headshot.jpeg'

export default function About() {
  return (
    <section id='about' className='mb-4'>
      <Row className='align-items-center'>
        <Col md={6}>
          <h1 className='fw-bolder'>I'm Kaitlyn -</h1>
          <div className='ps-4'>
            <p>
              a recent Computer Science graduate passionate about creating seamless user interfaces. Proficient in both front-end and back-end web and app development. Proven track record of successfully leading projects from inception to deployment, prioritizing technical excellence and user-centric solutions.
            </p>
          </div>
        </Col>
        <Col md={6} className='text-center'>
          <Image 
            src={headshot}
            style={{ height: 'auto', maxWidth: '65%' }}
            fluid 
            roundedCircle
          />
        </Col>
      </Row>
    </section>
  )
}
