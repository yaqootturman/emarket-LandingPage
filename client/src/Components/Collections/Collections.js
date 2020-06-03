import React from 'react'
import { Container, Row, Image, Card } from 'react-bootstrap'
import chair2 from '../../assets/chair2.png'
import table from '../../assets/table.png'
import lamb from '../../assets/lamb.png'
import vasa from '../../assets/vasa.png'
import sofa from '../../assets/sofa.png'
import chair3 from '../../assets/chair3.png'

import './style.css'

const Collections = () => {

  return (
    <div className="collection">
      <h3 className="collection__header">Our Collections</h3>
      <Container className="collection__container" >
        <Row className="collection__container__rows">
          <Card>
            <Card.Img src={chair3} />
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
            <Card.Img src={lamb} />
          </Card>
          <Card>
            <Card.Img src={vasa} />
          </Card>
        </Row>

      </Container>
    </div>

  )

}

export default Collections