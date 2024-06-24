import React from 'react'
import { Button as BootstrapButton } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Button({ link, icon, text }) {
  return (
    <BootstrapButton variant='outline-dark' className='mr-2' href={link} target='_blank'>
      {icon && <FontAwesomeIcon icon={icon} className='me-2' />}
      {text}
    </BootstrapButton>
  )
}
