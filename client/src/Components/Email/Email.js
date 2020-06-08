import React from 'react'
import Form from 'react-bootstrap/Form'
import './style.css'

const Email = () => {

  return (
    <div className="email-section">

      <h3 className="email-section__header">Keep updated and get unlimited discount</h3>
      <Form className="email-section__form">
        <Form.Control type="email" placeholder="Your email" />
      </Form>

    </div>
  )
}
export default Email