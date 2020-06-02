import React from 'react'
import { Container, Row, Image, Card } from 'react-bootstrap'
import rectangle from '../../assets/rectangle.png'
import light from '../../assets/light.png'
import chair2 from '../../assets/chair2.png'
import table from '../../assets/table.png'
import table2 from '../../assets/table2.png'
import lights2 from '../../assets/lights2.png'
import sofa from '../../assets/sofa.png'

import './style.css'

const Collections = () => {

  return (
    <div className="collection">
      <h3 className="collection__header">Our Collections</h3>
      <Container className="collection__container" >
        <Row className="collection__container__rows">
          <Card>
            <Card.Img src={chair2} />
          </Card>
          <Card>
            <Card.Img src={chair2} />
          </Card>
          <Card>
            <Card.Img src={table} />
          </Card>
        </Row>

        <Row className="collection__container__rows">
          <Card>
            <Card.Img src={sofa} />
          </Card>
          <Card>
            <Card.Img src={table2} />
          </Card>
          <Card>
            <Card.Img src={lights2} />
          </Card>
        </Row>

      </Container>
    </div>

  )

}

export default Collections