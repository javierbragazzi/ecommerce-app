import React, {useState, useEffect} from 'react';

import './ItemDetailContainer.css';

import ItemDetail from '../../components/ItemDetail/ItemDetail';
import SpinnerCustom from '../../components/SpinnerCustom/SpinnerCustom';

function GetExampleItem() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res([{ id: 1, title: 'HP', subtitle: "Modelo: 250 G7", category:"Notebooks", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem nam pariatur voluptate perferendis, asperiores aspernatur! Porro similique consequatur, nobis soluta minima, quasi laboriosam hic cupiditate perferendis esse numquam magni." , price:'$ 90.000', image:'https://www.computershopping.com.ar/Images/Productos/HP-250-G7_Foto0.jpg', minStock:'1', maxStock:'8'}]);
      }, 3000);
    });
  }


function ItemDetailContainer() {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            GetExampleItem().then(res => {
                    setItem(res); 
                    setLoading(false);
                });
            }, []);

    return (
        <>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', heigth: '1000px' }} >
              { loading &&  <SpinnerCustom  />}
          </div>
          <ItemDetail item={item}/>
        
        </>
    )
}

export default ItemDetailContainer;