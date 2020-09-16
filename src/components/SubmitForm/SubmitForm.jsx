
import React from 'react';
import {Form, Col, Button} from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';


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
    phone: Yup.string().required('El teléfono es requerido')

  });

function SubmitForm() {



    return (
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{

        }}
      >
        {({
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
                  name="Teléfono"
                  value={values.phone}
                  onChange={handleChange}
              
                />
        
              </Form.Group>

            </Form.Row>

            <Button type="submit">Finalizar compra</Button>
          </Form>
        )}
      </Formik>
    );
}
  
  export default SubmitForm;