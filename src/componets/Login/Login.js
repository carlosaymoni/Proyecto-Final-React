import React, { Fragment, useState } from 'react'
import { useForm } from "react-hook-form";
import './Login.css'
 

function Login() {
    const { register, handleSubmit } = useForm(); 
    const onSubmit = (data, e) =>{
        e.target.reset()
    };

    const [ buyer, setBuyer ] = useState({
        nombre: '',
        email: '',
        telefono: '', 
    })
    console.log(buyer);
       
    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)} className='form-login'>
                <h2 className='h2-login'>Login</h2>
                <label>
                    Nombre Completo
                </label>
                    <input {...register("Name", { required: true, maxLength: 20 })} 
                    value={ buyer.nombre} onChange={(e) => setBuyer({...buyer, nombre: e.target.value})} />
                <label>
                    Email
                </label>
                    <input type="email" {...register("email", { required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i }})}
                      value={ buyer.email} onChange={(e) => setBuyer({...buyer, email: e.target.value})}  
                    />
                <label>
                    Telefono
                </label>
                    <input type="phone" placeholder="15 1234 113" {...register("phone", {required: true})}
                     value={ buyer.telefono} onChange={(e) => setBuyer({...buyer, telefono: e.target.value})} />
                    <input type="submit" className='clear-cart' />
            </form>
        </Fragment>
    );
}

export default Login