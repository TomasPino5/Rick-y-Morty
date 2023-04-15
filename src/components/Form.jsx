import { useState } from "react";
import { validation } from "./validation";
import styles from './Form.module.css';

const Form = (props) => {

    const [userData, setUserData] = useState({
        email: '', password: '',
    });

    const [errors, setErrors] = useState({ 
        email: '', password: '',
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(
            validation({
                ...userData,
                [event.target.name]: event.target.value
            })
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.login(userData)
    }

    return (
        <div className={styles.contenedor}>
            <h1 className={styles.titulo}>Proyecto Rick and Morty</h1>
            <form onSubmit={handleSubmit}>
                <label className={styles.label} htmlFor="email">Email </label>
                <input className={styles.input} name='email' type="email" placeholder="Ingrese su email" value={userData.email} onChange={handleChange} />
                {errors.email && <p>{errors.email}</p>}
                <br/><br/>
                <label className={styles.label} htmlFor="password" >Password </label>
                <input className={styles.input} name='password' type="password" placeholder="Ingrese su contraseña" value={userData.password} onChange={handleChange} />
                {errors.password && <p>{errors.password}</p>}
                <br/><br/><br/>
                <button className={styles.boton} type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form;