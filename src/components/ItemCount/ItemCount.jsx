import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import './ItemCount.css';


function ItemCount ({initial, min, max, onChangeQuantity}){
  const [quantity, setQuantity] = useState(initial);

  function addItem(){
    if(quantity < max)
        {
          setQuantity(quantity + 1);          
          onChangeQuantity(quantity + 1);
        }
  }

  function removeItem(){

    if(quantity > min)
        {
          setQuantity(quantity - 1);  
          onChangeQuantity(quantity - 1); 
        }

  }

  return <>

            <div className="quantity">
                <div className="quantity-div">Cantidad</div>
                <Button className="minus-btn" variant="outline-primary" onClick={removeItem}>-</Button>
                <input type="text" name="name" value={quantity} readOnly/>
                <Button className="plus-btn" variant="outline-primary" onClick={addItem}>+</Button>
            </div>
      
       
        </>
}

export default ItemCount;
