import FormLogIn from "../components/forms/formLogIn"
import style from "./Views.module.css"
import ModalError from "../components/modal/modal"
import FormSignIn from "../components/forms/formSignIn"


const Landing = (props) => {

    const { isLogin, login, signIn, active, message, handler, handlerFragment } = props

    return (
        <div className={style.land}>
            { !isLogin ? 
            <div className={style.formWrap}> 
                <div className={style.linksWrap}>
                    <p> Already have an account? <b onClick={handlerFragment}>Log In</b></p>
                </div>
                <FormSignIn signIn={signIn} ></FormSignIn>  
            </div>
            : 
            <div className={style.formWrap}> 
                <div className={style.linksWrap}>
                    <p> Want to join us? <b onClick={handlerFragment}>Sign In</b></p>
                </div>
                <FormLogIn login={login}></FormLogIn> 
            </div>
            }
            <ModalError isLogin={isLogin} message={message} active={active} handler={handler}></ModalError>
        </div>
    )
}

export default Landing