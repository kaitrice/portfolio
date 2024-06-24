import { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import emailjs from 'emailjs-com'

export default function useContact() {
  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID
  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
  const userID = process.env.REACT_APP_EMAILJS_USER_ID

  const initialState = { name: '', email: '', message: '' }
  const [eachEntry, setEachEntry] = useState(initialState)
  const { name, email, message } = eachEntry

  const handleOnChange = (e) => {
    const { id, value } = e.target
    setEachEntry({ ...eachEntry, [id]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
    .send(serviceID, templateID, eachEntry, userID)
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text)
        alert('Email sent successfully')
        setEachEntry(initialState)
      },
      (err) => {
        console.log('FAILED...', err)
        alert('Error sending email')
      }
    )
  }

  return (
    <Form className='text-dark' onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.FloatingLabel controlId='name' label='Full Name*' className='mb-3'>
            <Form.Control
              onChange={handleOnChange}
              value={name}
              type='name'
              placeholder='Name'
              required
            />
          </Form.FloatingLabel>
        </Col>
        <Col>
          <Form.FloatingLabel controlId='email' label='Email address*' className='mb-3'>
          <Form.Control
            onChange={handleOnChange}
            value={email}
            type='email'
            placeholder='Email'
            required
          />
          </Form.FloatingLabel>
        </Col>
      </Row>
      <Form.FloatingLabel controlId='message' label='Message*' className='mb-3'>
        <Form.Control
          onChange={handleOnChange}
          value={message}
          as='textarea'
          placeholder='Message'
          style={{ height: '15rem' }}
          required
        />
      </Form.FloatingLabel>
      <Button variant='outline-dark' type='submit'>
        Send Message
      </Button>
    </Form>
  )
}
