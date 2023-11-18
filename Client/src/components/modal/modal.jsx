import style from "./modal.module.css"

const ModalError = (props) => {
    const { isLogin, message, active, handler } = props

    return (
        active &&
        <div className={style.wrapper}>
            <div className={ isLogin ? style.modalSuccess : style.modalwrapper}>
                {isLogin ? <h3 className={style.title}>¡Yey!</h3> : <h3 className={style.title}>¡Ups!</h3> }
                <p className={style.error}>{message}</p>
                <button className={style.button} onClick={()=>{handler()}}>Ok!</button>
            </div>
        </div>
    )
}

export default ModalError