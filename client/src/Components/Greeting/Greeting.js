import React from 'react'
import { Jumbotron, Container, Row, Col, Button, Image } from 'react-bootstrap'
import chair from '../../assets/main-chair.png'
import './style.css'

const Greeting = () => {
  return (
    <Jumbotron className="greeting" >
      <Container >
        <Row>
          <Col xs={6} >
            <h1 className="greeting__statement">Save <span className="greeting__statement__word"> Money.</span><br />Live Better.</h1>
            <p>I still have my feet on the ground, i just wear better shoes tag clipped to my shirt with my name printed on it.</p>
            <Button className="greeting__btn" variant="link">SHOP NOW</Button>
          </Col>
          <Col xs={6} className="greeting__chair-div" >
            <Image className="greeting__chair-div__chair" src={chair} />
          </Col>
        </Row>
      </Container>
    </Jumbotron >

  )

}

export default Greeting
