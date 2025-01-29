import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from './CardsData';
import './styles.css'

const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Add to cart project</h2>
      <div className='row d-flex justify-content-center align-items-center'>
        {data.map((element, idx) => {
          return (

            <Card style={{ width: '22rem', margin: "10px", border: "none" }} className='card_style'>
              <Card.Img variant="top" src={element.imgdata} style={{ height: "16rem", marginTop: "8px" }} />
              <Card.Body>
                <Card.Title>{element.rname}</Card.Title>
                <Card.Text>
                  Price : ₹{element.price}
                </Card.Text>
                <div className='d-flex justify-content-center align-items-center' >

                  <Button variant="primary col-lg-12" >Add to cart</Button>
                </div>
              </Card.Body>
            </Card>
          )
        })}

      </div>
    </div>
  )
}

export default Cards
