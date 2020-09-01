import React, {useState, useEffect} from 'react';

import ItemList from '../../components/ItemList/ItemList';
import SpinnerCustom from '../../components/SpinnerCustom/SpinnerCustom';


function getFromRemote() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res([{id: '1', title: 'HP 250 G7', price:'$ 90.000', image:'https://www.computershopping.com.ar/Images/Productos/HP-250-G7_Foto0.jpg', minStock:'1', maxStock:'8'},
             {id: '2', title: 'Acer 800 Plus', price:'$ 70.000', image:'https://static.acer.com/up/Resource/Acer/Laptops/Aspire_1/images/20190430/Acer-Aspire-1-A115-31-main.png', minStock:'1', maxStock:'3'}]);
      }, 1000);
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