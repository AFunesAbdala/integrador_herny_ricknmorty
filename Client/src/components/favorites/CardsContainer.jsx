import CardFav from './CardFav'
import style from './CardsContainer.module.css';
import { useDispatch } from 'react-redux'
import { filterCards, orderCards, show_all_fav } from '../../redux/actions';
import { useState } from 'react';

const CardsFav = (props) => {
   const {myFavorites, onClose} = props;

   const [isOnA , setisOnA] = useState(false)
   const [isOnB , setisOnB] = useState(false)

   const dispatch = useDispatch()

   const handleOrder = (order) => {
      if (order === "A") {
         setisOnA(true)
         setisOnB(false)
      } else {
         setisOnB(true)
         setisOnA(false)
      }
      dispatch(orderCards(order))
   }

   const handleFilter = (event) => {
      if (event.target.value === 'All') {
         dispatch(show_all_fav())
      } else {
         dispatch(filterCards(event.target.value))
      }
   }

   return (
      <div className={style.container}>
         <div className={style.selectContainer}>
            <div className={style.boxSelect}>
               <h3>Order:</h3>
               <div className={isOnA ? style.selectAon : style.selectA} onClick={()=>{handleOrder("A")}} data-tooltip="Ascending"></div>
               <div className={isOnB ? style.selectBon : style.selectB} onClick={()=>{handleOrder("D")}} data-tooltip="Descending"></div>
            </div>
            <div className={style.boxSelect}>
               <h3>Gender:</h3>
               <select className={style.select} onChange={handleFilter}>
                  <option value="All">All</option>
                  <option value="Male">Male</option>
                  <option value="Female">female</option>
                  <option value="unknown">unknown</option>
                  <option value="Genderless">Genderless</option>
               </select>
            </div>
         </div>
         <div className={style.cards}>
            
            {myFavorites.map((character)=> {
               return (
                  <CardFav 
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin}
                  image={character.image}
                  onClose={onClose}
                  />
               );
            })}
         </div>
      </div>
   );
}

export default CardsFav