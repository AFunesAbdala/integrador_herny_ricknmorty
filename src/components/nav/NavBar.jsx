import { NavLink } from "react-router-dom"
import style from "./NavBar.module.css"
import Helpers from "../../helper/Routes.helper"

const NavBar = (props) => {

    const {logOut} = props

    return(
        <div className={style.nav}>
            <div className={style.container}>
                <NavLink to={Helpers.Home}>
                    <div className={style.logo}></div>
                </NavLink>
                <div className={style.navLinks}>
                    <button onClick={()=>{logOut()}} className={style.logOut} ></button>
                    <NavLink to={Helpers.Home} className={style.Link} activeclassname={style.activeLink}>Home</NavLink>
                    <NavLink to={Helpers.About} className={style.Link} activeclassname={style.activeLink}>About</NavLink>
                    <NavLink to={Helpers.Favorites} className={style.LinkF} activeclassname={style.activeLink}>Favorites</NavLink>
                </div>
            </div>
        </div>
    )
}

export default NavBar