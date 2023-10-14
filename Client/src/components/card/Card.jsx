import style from './Card.module.css';
import { useState , useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux'
import hoverSound from '../../sounds/flip_card.mp3';
import { Link, useLocation } from 'react-router-dom';
import { add_fav, remove_fav } from '../../redux/actions';

export default function Card(props) {

   const {id, name, status, species, gender, origin, image, onClose} = props;

   const [isFav, setIsFav] = useState(false);

   const dispatch = useDispatch();

   const myFavorites = useSelector(state => state.myFavorites);

   useEffect(() => {
      myFavorites.some((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      if (isFav === false) {
         setIsFav(true)
         dispatch(add_fav(props))
      } else {
         setIsFav(false)
         dispatch(remove_fav(id))
      }
   }

   const pathname = "home";

   /*
   const [isHovered, setIsHovered] = useState(false);
  
   // Función para manejar el hover
   const handleHover = () => {
      setIsHovered(true);
   };
   
   // Función para manejar cuando el mouse sale del elemento
   const handleMouseLeave = () => {
      setIsHovered(false);
      setIsPlaying(false);
   };

   const [isPlaying, setIsPlaying] = useState(false);

   // Función para reproducir el sonido
   const playSound = () => {
      const audio = new Audio(hoverSound);
      audio.play();
      setIsPlaying(true);
   };

   // Lógica para reproducir el sonido cuando el usuario hace hover
   if (isHovered && !isPlaying) {
   playSound();
   }
   */

   return (
      
         <div className = {style.card} /* onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} */>
            <div className={style.cardFront}>
               <img className={style.img} src={image} alt='' />
               <h3 className={style.titulo}>{name}</h3>
               
            </div>
            <div className={style.cardBack}>
               <div className={style.btns}>
                  <Link to={`/detail/${id}/${pathname}`} className={style.btnMore}>+</Link>
                  {
                     isFav ? (
                        <button className={style.btnFavT} onClick={handleFavorite}></button>
                     ) : (
                        <button className={style.btnFavF} onClick={handleFavorite}></button>
                     )
                  }
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
      
   );
}
