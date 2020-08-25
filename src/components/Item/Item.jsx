import React from 'react';
import {Card, Button} from 'react-bootstrap';

import './Item.css';

function Item({key, idItem, title, price, image, minStock, maxStock}){

   // function onAddShow(quantity){
  //      alert("Se agregaron " + quantity + " unidades al carrito");
  //    } style={{width: "100px", height:"100px", margin: "0 auto"}}

    return <>
         <div className='divComponent'>
                <Card style={{width: "250px", margin:"10px"}}>
                    <Card.Img variant="top" src={image} style={{maxWidth: "100%", maxHeight: "100%", height:"auto", width:"auto", margin: "0 auto"}} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                        {price}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="divFooterComponent" >
                        <Button href={`itemDetail/${idItem}`} variant="primary" >Mas detalle</Button>
                    </Card.Footer>
                </Card>
                </div>
            </>
}

export default Item;