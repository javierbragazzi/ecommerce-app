import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import './ItemCount.css';


function ItemCount ({initial, min, max, onAdd}){
  const [quantity, setQuantity] = useState(initial);

  function addItem(){
    if(quantity < max)
        setQuantity(quantity + 1);
          
  }

  function removeItem(){

    if(quantity > min)
        setQuantity(quantity - 1);  

  }

  return <>
        <div class="quantity">
            <Button class="minus-btn" variant="outline-primary" onClick={removeItem}>-</Button>
            <input type="text" name="name" value={quantity}/>
            <Button class="plus-btn" variant="outline-primary" onClick={addItem}>+</Button>
        </div>
        <div class="send">
            <Button class="send-btn"variant="primary" onClick={() => onAdd(quantity)}>Agregar al carrito</Button>
        </div>
    </>
}

export default ItemCount;
