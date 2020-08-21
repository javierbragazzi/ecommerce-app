import React, {useState, useEffect} from 'react';

import Saludo from '../../components/Saludo/Saludo';
import CardDeckCustom from '../../components/CardDeckCustom/CardDeckCustom';
import ItemList from '../../components/ItemList/ItemList';
import SpinnerCustom from '../../components/SpinnerCustom/SpinnerCustom';
import {Spinner} from 'react-bootstrap';

//title, price, image, minStock, maxStock

function getFromRemote() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res([{ title: 'Notebook HP 250 G7', price:'90.000', image:'https://www.computershopping.com.ar/Images/Productos/HP-250-G7_Foto0.jpg', minStock:'1', maxStock:'8'},{ title: 'Notebook HP 240', price:'80.000', image:'https://www.computershopping.com.ar/Images/Productos/HP-250-G7_Foto0.jpg', minStock:'1', maxStock:'3'},{  title: 'Notebook HP 230 G8', price:'70.000', image:'https://www.computershopping.com.ar/Images/Productos/HP-250-G7_Foto0.jpg', minStock:'1', maxStock:'4'}]);
      }, 9000);
    });
  }


function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            getFromRemote().then(res => {
                    setProducts(res); 
                    setLoading(false);
                });
            }, []);

    return (
        <>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', heigth: '1000px' }} >
             { loading &&  <SpinnerCustom  />}
        </div>
            <ItemList products={products} />
        </>
    );
  }

  export default Home;