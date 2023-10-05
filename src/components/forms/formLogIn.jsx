import { useState } from "react";
import style from "./formLogin.module.css"
import {ValidateEmail , ValidatePass} from "./validations/logInValidate";


const FormLogIn = (props) => {

    const { login } = props

    const [ userData , setUserData] = useState({
        email: "",
        password: ""
    })

    const [ errors , setErrors] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]: value});
        /* const emailError = ValidateEmail({...userData, [property]: value});
        const passwordError = ValidatePass({...userData, [property]: value}); */

        if (property === "email") {
            setErrors({ ...errors, email: ValidateEmail({...userData, [property]: value}) });
        } else if (property === "password") {
            setErrors({ ...errors, password: ValidatePass({...userData, [property]: value}) });
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <div className={style.logInContainer}>
            <div className={style.titleContainer}>
                <h1>¡Welcome!</h1>
            </div>
            <form className={style.formContainer} onSubmit={handleSubmit}>
                <label className={style.labelLogIn} htmlFor="email">Email:</label>
                <input className={style.inputLogIn} type="text" name="email" placeholder="example@example.com" value={userData.email} onChange={handleChange}></input>
                {/* {!errors.email ? <></> : <h4 className={style.errorLogIn}>{errors.email}</h4>} */}
                <h4 className={style.errorLogIn}>{errors.email}</h4>
                <label className={style.labelLogIn} htmlFor="password">Password:</label>
                <input className={style.inputLogIn} type="text" name="password" placeholder="examplePass1" value={userData.password} onChange={handleChange}></input>
                <h4 className={style.errorLogIn}>{errors.password}</h4>
                <button className={style.buttonLogIn} type="submit">Log In</button>
            </form>
            
            
        </div>
    )
};

export default FormLogIn
