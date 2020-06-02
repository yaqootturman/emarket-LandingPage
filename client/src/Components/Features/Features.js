import React from 'react'
import { ListGroup, Image } from 'react-bootstrap'
import wallet from '../../assets/wallet.png'
import buying from '../../assets/buying.png'
import shirt from '../../assets/t-shirt.png'

import './style.css'

const Features = () => {
  return (


    <ListGroup horizontal className="list">
      <ListGroup.Item>
        <Image className="list__image" src={buying} />
        <span className="list__feature">Free Shipping</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <Image className="list__image" src={shirt} />
        <span className="list__feature">90 Days Return</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <Image className="list__image" src={wallet} />
        <span className="list__feature">Secure Payments</span>
      </ListGroup.Item>


    </ListGroup>
  )

}

export default Features