import React from 'react';
import {Card} from 'react-bootstrap';

import ItemCount from '../../components/ItemCount/ItemCount';


function Item({title, price, image, minStock, maxStock}){

    function onAddShow(quantity){
        alert("Se agregaron " + quantity + " unidades al carrito");
      }

    return <>
                <Card style={{margin: '10px'}}>
                    <Card.Img  variant="top" src={image}  />
                    <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                       {price}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <ItemCount initial={1} min={minStock} max={maxStock} onAdd={onAddShow}/>
                    </Card.Footer>
                </Card>
            </>
}

export default Item;