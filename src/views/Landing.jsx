import FormLogIn from "../components/forms/formLogIn"
import style from "./Views.module.css"


const Landing = (props) => {

    const { login } = props

    return (
        <div className={style.land}>
            <div className={style.logoLand}></div>
            <FormLogIn login={login}></FormLogIn>
        </div>
    )
}

export default Landing