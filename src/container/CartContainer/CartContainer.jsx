import React, { useEffect, useState } from 'react';

import './CartContainer.css';

import Cart from '../../components/Cart/Cart';
import SpinnerCustom from '../../components/SpinnerCustom/SpinnerCustom';

function CartContainer() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {

                    setLoading(false);
         
            }, []);

    return (
        <>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', heigth: '1000px' }} >
              { loading &&  <SpinnerCustom  />}
          </div>
            <Cart />
        </>
    )
}

export default CartContainer;