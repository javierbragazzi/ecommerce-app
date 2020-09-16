import React from 'react';

import Item from '../../components/Item/Item';

import './ItemList.css';

function ItemList({products}){

 return <>
 <div> </div>
            <div className="divComponentContainer" margin='10px'>
                    {products.map((p, idx) => <Item key={idx} item={p} style={{display: "flex"}} />)}
            </div>
        </>
}

export default ItemList;