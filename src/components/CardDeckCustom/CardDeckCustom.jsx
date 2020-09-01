import React, { useState } from 'react';
import {CardDeck, Card} from 'react-bootstrap';

import ItemCount from '../../components/ItemCount/ItemCount';


function CardDeckCustom(){

    function onAddShow(quantity){
        alert("Se agregaron " + quantity + " unidades al carrito");
      }

    return <>
        <CardDeck>
            <Card>
                <Card.Img  variant="top" src="https://www.computershopping.com.ar/Images/Productos/HP-250-G7_Foto0.jpg"  />
                <Card.Body>
                <Card.Title>Notebook HP 250 G7"</Card.Title>
                <Card.Text>
                    $ 90.000
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <ItemCount initial={1} min={1} max={3} onAdd={onAddShow}/>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://www.sumaelectrohogar.com.ar/5449-large_default/notebook-lenovo-ideapad-330-14gm.jpg" />
                <Card.Body>
                <Card.Title>Lenovo Ideapad 330-14GM</Card.Title>
                <Card.Text>
                    $ 30.000
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <ItemCount initial={1} min={1} max={5} onAdd={onAddShow}/>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/NHNJ5MNeZhrC5C66_8R8v9ufJbs7YcpIBzaQdYe7omwHbwJ9Ym5lDwR0ynNfKNqkcdXaWm4byOlWvqsMXWtn8QONfO5tFAHZ4u0Whtjxy1rgm6Gxb5J3G69IYrwJWzN0zvcoZl8e0RR20uZAXzhL1sCaaiVP4gNzAZpJMV2c9V6ynCKpM-om-V1Rs52QWsiP6QURblb3vsFIrTV2CoqOev2VX02Ku6dw4etTf-WWyT2VXvL8ejhcvfvxJg" />
                <Card.Body>
                <Card.Title>Notebook Swift3 14 R5.4 8RAM 256SSD</Card.Title>
                <Card.Text>
                   $ 110.000
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <ItemCount initial={1} min={1} max={7} onAdd={onAddShow}/>
                </Card.Footer>
            </Card>
        </CardDeck>
    </>
}

export default CardDeckCustom;