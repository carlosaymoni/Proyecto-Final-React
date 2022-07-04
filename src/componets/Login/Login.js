import React, { Fragment, useContext } from 'react'
import { useForm } from "react-hook-form";
import CartContext from '../../Context/CartContext';
import './Login.css'
 

function Login() {
    const { register, formState: { errors } , handleSubmit } = useForm(); 
    const { onSubmit } = useContext(CartContext);
    const { user, setUser } = useContext(CartContext);

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)} className='form-login'>
                <h2 className='h2-login'>Login</h2>
                <label>
                    Nombre Completo
                </label>
                    <input placeholder="nombre"{...register("name", { required: true, pattern: {value: /^[ A-Z ]{2,20}$/i }})}
                        value={ user.nombre } onChange={(e) => setUser({...user, nombre: e.target.value})} />
                        <span className='error-text'>
                        {errors.name?.type === 'required' && "El campo monbre es requerido"}
                        </span>
                <label>
                    Email
                </label>
                    <input type="email" placeholder="mail@mail.com" {...register("email", { required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i }})}
                        value={ user.email } onChange={(e) => setUser({...user, email: e.target.value})}/>
                        <span className='error-text'>
                        {errors.email?.type === 'required' && "El campo email es requerido"}
                        </span>
                <label>
                    Telefono
                </label>
                    <input type="phone" placeholder="351 123 5456" {...register("phone", {required: true, pattern: {value: /^[0-9]{1,12}$/i}})}
                        value={ user.telefono } onChange={(e) => setUser({...user, telefono: e.target.value})} />
                        <span className='error-text'>
                        {errors.phone?.type === 'required' && "El campo Telefono es requerido"}
                        {errors.phone?.type === 'pattern' && "El campo Telefono solo acepta numeros"}
                        </span>
                    <input type="submit" className='clear-cart'/>
            </form>
        </Fragment>
    );
}

export default Login