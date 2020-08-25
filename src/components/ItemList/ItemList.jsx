import React from 'react';

import Item from '../../components/Item/Item';

import './ItemList.css';

function ItemList({products}){

 return <>
 <div> </div>
            <div className="divComponentContainer" margin='10px'>
                    {products.map((p, idx) => <Item key={p.id} idItem={p.id} title={p.title} price={p.price} image={p.image} minStock={p.minStock} maxStock={p.maxStock} style={{display: "flex"}} />)}
            </div>
        </>
}

export default ItemList;