import React, { useState } from 'react';
import {Button, CardDeck} from 'react-bootstrap';

import Item from '../../components/Item/Item';

function ItemList({products}){
    
//title, price, image, minStock, maxStock
 return <>
            <CardDeck>
                {products.map(p => <Item  title={p.title} price={p.price} image={p.image} minStock={p.minStock} maxStock={p.maxStock}/>)}
            </CardDeck>
        </>
}

export default ItemList;