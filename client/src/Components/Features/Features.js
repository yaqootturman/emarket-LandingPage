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
        <Image src={buying} />
        <span>Free Shipping</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <Image src={shirt} />
        <span>90 Days Return</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <Image src={wallet} />
        <span>Secure Payments</span>
      </ListGroup.Item>


    </ListGroup>
  )

}

export default Features