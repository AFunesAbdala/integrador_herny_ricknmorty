import { useState } from "react";
import style from "./formSignIn.module.css"
import {ValidateEmail , ValidatePass} from "./validations/signInValidate";


const FormSignIn = (props) => {

    const { signIn } = props

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

        if (property === "email") {
            setErrors({ ...errors, email: ValidateEmail({...userData, [property]: value}) });
        } else if (property === "password") {
            setErrors({ ...errors, password: ValidatePass({...userData, [property]: value}) });
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!errors.email && !errors.password) {
            signIn(userData);
        }
    }

    return(
        <div className={style.logInContainer}>
            <div className={style.titleContainer}>
                <h1>Join Us!</h1>
            </div>
            <form className={style.formContainer} onSubmit={handleSubmit}>
                <label className={style.labelLogIn} htmlFor="email">Email:</label>
                <input className={style.inputLogIn} type="text" name="email" value={userData.email} onChange={handleChange}></input>
                <h4 className={style.errorLogIn}>{errors.email}</h4>
                <label className={style.labelLogIn} htmlFor="password">Password:</label>
                <input className={style.inputLogIn} type="text" name="password" value={userData.password} onChange={handleChange}></input>
                <h4 className={style.errorLogIn}>{errors.password}</h4>
                <button className={style.buttonLogIn} type="submit">Sign In</button>
            </form>
            
            
        </div>
    )
};

export default FormSignIn