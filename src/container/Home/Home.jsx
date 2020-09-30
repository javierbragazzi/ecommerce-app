import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import ItemList from '../../components/ItemList/ItemList';
import SpinnerCustom from '../../components/SpinnerCustom/SpinnerCustom';
import {getFirestore} from '../../firebase';


function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

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

        setProducts(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})  ));
      }).catch((error) => {
        console.log("Error seraching items. Error: ", error);
      }).finally(() => {
        setLoading(false);
      });
      

    }, [categoryId]);

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