import style from '../card/Card.module.css';
import { Link } from 'react-router-dom';

const CardFav = (props) => {

    const {id, name, status, species, gender, origin, image, onClose} = props;
    
    const pathname = "favorites";

    return (
        <div className = {style.card}>
            <div className={style.cardFront}>
               <img className={style.img} src={image} alt='' />
               <h3 className={style.titulo}>{name}</h3>
               
            </div>
            <div className={style.cardBack}>
               <div className={style.btns}>
                  <Link to={`/detail/${id}/${pathname}`} className={style.btnMore}>+</Link>
                  <button className={style.btnClose} onClick={() => onClose(id)}><span>x</span></button>
               </div>
               <div className={status == "Alive" ? style.imgAlive : status == "Dead" ? style.imgDead : style.imgUnknowStatus}></div>
               <h4 className={style.cuerpo12}>Specie:</h4>
               <h4 className={style.cuerpo15}>{species}</h4>
               <h4 className={style.cuerpo12}>Origin:</h4>
               <p className={style.cuerpo15}>{origin}</p>
               <h5 className={gender == "Female" ? style.genderFemale : gender == "Male" ? style.genderMale : gender == "Genderless" ? style.genderLess : style.genderUnknow}></h5>
               
            </div>
         </div>
    )
}

export default CardFav