import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import ItemList from '../../components/ItemList/ItemList';
import SpinnerCustom from '../../components/SpinnerCustom/SpinnerCustom';
import {getFirestore} from '../../firebase';

import SubmitForm from '../../components/SubmitForm/SubmitForm';
import { Button } from 'react-bootstrap';


function getFromRemote() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res([{id: '1', title: 'HP 250 G7', price:90000.99, image:'https://www.computershopping.com.ar/Images/Productos/HP-250-G7_Foto0.jpg', minStock:'1', maxStock:'8'},
             {id: '2', title: 'Acer 800 Plus', price:70000.02, image:'https://static.acer.com/up/Resource/Acer/Laptops/Aspire_1/images/20190430/Acer-Aspire-1-A115-31-main.png', minStock:'1', maxStock:'3'}]);
      }, 1000);
    });
  }


function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    const [show, setShow] = useState(false);

    useEffect(() => {
      setLoading(true);
      setProducts([]);
      const db = getFirestore();
      const itemCollection = db.collection("items");
      let filteredCollection = itemCollection;
      debugger;
      if(categoryId)
        filteredCollection = itemCollection.where('categoryId', '==', categoryId);   
      
      filteredCollection.get().then((querySnapshot) => {
        if(querySnapshot.size === 0){
          console.log('No results!');
        }
        //Obtener el id del documento y agregarlo al item {...doc.data(), id: doc.id}
        setProducts(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})  ));
      }).catch((error) => {
        console.log("Error seraching items. Error: ", error);
      }).finally(() => {
        setLoading(false);
      });
      

    }, [categoryId]);

//{ show 
  //? <div> <SubmitForm></SubmitForm> <Button onClick={() => setShow(false)}>Ocultar</Button></div>             
  //: <Button onClick={() => setShow(true)}>Mostrar</Button>}
    return (
        <>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', heigth: '1000px' }} >
             { loading &&  <SpinnerCustom  /> }
             <ItemList products={products} />
   
         
             
             
        </div>
        
        </>
    );
  }

  export default Home;