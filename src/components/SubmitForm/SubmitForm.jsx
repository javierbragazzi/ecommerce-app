
import React, {useContext} from 'react';
import {Form, Col, Button} from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { getFirestore } from '../../firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';



const schema = Yup.object({
    firstName: Yup.string().required('El nombre es requerido'),
    lastName: Yup.string().required('El apellido es requerido'),
    email1: Yup.string()
                        .email('Debe ser un email valido')
                        .required('El email es requerido'),
    email2: Yup.string()
                        .email('Debe ser un email valido')
                        .oneOf([Yup.ref('email1'), null], "Los emails tienen que ser iguales")
                        .required('El email es requerido'),
    phone:  Yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'El télefono no es valido')
                        .required('El télefono es requerido'),

  });

function SubmitForm() {
  const { cartItems, total, doCheckout, updateOrderId, orderId  } = useContext(CartContext);

    async function createOrder(cartItems, total, values){
        const db = getFirestore();
        const orders = db.collection("orders");
    
    
        const userInfo = {
            name: `${values.firstName} ${values.lastName}` ,
            phone: values.phone,
            email: values.email1,
        }
        
        const newOrder = { 
            buyer: userInfo,
            items: cartItems,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            total: total,
        };

        debugger;
    
        try {
		    const { id } = await orders.add(newOrder);
            updateOrderId(id);
            doCheckout(true);
           // cleanCart();
            console.log('Id de orden: ' + orderId);
        }catch(err) {
            console.log('Error: ' + err);
        }
    
    }

    return (
      <div className="card card-body border-1">
        <div className="col-sm-15 p-3">
          <Formik
            validationSchema={schema}
            onSubmit={values => {
              createOrder(cartItems, total, values);
            }}

            initialValues={{

            }}
          >
            
            {({
              getFieldProps,
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
              
            }) => (
              
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group  as={Col}  controlId="validationFormik01">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.firstName && !errors.firstName}
                      isInvalid={!!errors.firstName}
                      
                    />
                    <Form.Control.Feedback type="valid"/>           
                    <Form.Control.Feedback type="invalid">
                        {errors.firstName}
                    </Form.Control.Feedback>
          
                  </Form.Group>
                  <Form.Group as={Col}  controlId="validationFormik02">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.lastName && !errors.lastName}
                      isInvalid={!!errors.lastName}
                    />
      
                    <Form.Control.Feedback type="valid"/>           
                    <Form.Control.Feedback type="invalid">
                        {errors.lastName}
                    </Form.Control.Feedback>
                  </Form.Group>

                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}  controlId="validationFormik03">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      name="email1"
                      value={values.email1}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.email1 && !errors.email1}
                      isInvalid={!!errors.email1}
                    />
      
                    <Form.Control.Feedback type="valid"/>           
                    <Form.Control.Feedback type="invalid">
                        {errors.email1}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} controlId="validationFormik04">
                    <Form.Label>Repite tu email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      name="email2"
                      value={values.email2}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.email1 && !errors.email1}
                      isInvalid={!!errors.email2}
                    />
                    
                    <Form.Control.Feedback type="valid"/>           
                    <Form.Control.Feedback type="invalid">
                        {errors.email2}
                    </Form.Control.Feedback>
                  </Form.Group>

                </Form.Row>
                
                <Form.Row>
                  <Form.Group  as={Col}  controlId="validationFormik05">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      value={values.phone}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isValid={touched.phone && !errors.phone}
                      isInvalid={!!errors.phone}
                  
                    />
                    <Form.Control.Feedback type="valid"/>           
                    <Form.Control.Feedback type="invalid">
                        {errors.phone}
                    </Form.Control.Feedback>
                  </Form.Group>

                </Form.Row>

                <Button type="submit"  style={{ display: "flex", justifyContent: "center" }}  >Finalizar compra</Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
}
  
  export default SubmitForm;