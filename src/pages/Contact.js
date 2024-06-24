import { Col, Row } from 'react-bootstrap'
import ContactMe from '../components/contact/Contact'
import useContact from '../hooks/useContact'
import '../css/Contact.css'

export default function Contact() {
  const ContactForm = useContact()

  return (
    <section id='contact' className='contact d-flex align-items-center justify-content-center text-center'>
      <Row className='align-items-center'>
        <Col sm={12} md={6} className='d-flex justify-content-center'>
          <ContactMe />
        </Col>
        <Col sm={12} md={6} className='d-flex justify-content-center'>
          {ContactForm}
        </Col>
      </Row>
    </section>
  )
}
