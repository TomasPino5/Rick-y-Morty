import { useState } from "react";
import { validation } from "./validation";

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
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input name='email' type="email" placeholder="Ingrese su email" value={userData.email} onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}
            <br/><br/>
            <label htmlFor="password">Contraseña: </label>
            <input name='password' type="password" placeholder="Ingrese su contraseña" value={userData.password} onChange={handleChange} />
            {errors.password && <p>{errors.password}</p>}
            <br/><br/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form;