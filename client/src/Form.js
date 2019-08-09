import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ values, errors, touched, handleSubmit }) => {
    const [users, setUsers] = useState([])

    return (
        <>
        <div>
            <h1>Register New Account</h1>
            <Form>
                <Field type='text' name='username' placeholder='username' />
                {touched.username && errors.username && (<p>{errors.username}</p>)}
                <Field type='password' name='password' placeholder='password' />
                {touched.password && errors.password && (<p>{errors.password}</p>)}
                <button type='submit'>Sign Up!</button>
            </Form>
        </div>
        </>

    )
};

const FormikUserForm = withFormik({
    mapPropsToValues({ username, password }){
        return {
            username: username || '',
            password: password || ''
        };
    },
//==========Validation Schema==============

validationSchema: Yup.object().shape({
    username: Yup.string().required('username is required'),
    password: Yup.string().required('Password is required')
}),

//==========End Validation Schema===========

handleSubmit(values, { setStatus, resetForm }){
    axios.post('http://localhost:5000/api/register', values)
    .then(res =>{
        setStatus(res.data);
        resetForm({username:'', password:''})
    })
    .catch(err => console.log('error', err.response))
}

})(UserForm);




export default FormikUserForm;