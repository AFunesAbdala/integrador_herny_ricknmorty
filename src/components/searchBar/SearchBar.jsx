import style from './searchBar.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { remove_all } from '../../redux/actions';

export default function SearchBar(props) {
   const {onSearch, onRandom} = props;

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   }

   const handleSubmit = () => {
      onSearch(id);
      setId("");
   }

   const dispatch = useDispatch()

   const remove_all_characters = () => {
      dispatch(remove_all())   
   }

   return (
      <div className={style.wrapper}>
         <button className={style.btnRemove} onClick={remove_all_characters}></button>
         <input className={style.input} placeholder="Ingresa un número del 1 al 826" type='text' onChange={handleChange} value={id}/>
         <button className={style.button} onClick={handleSubmit}>Agregar</button>
         <button className={style.buttonRandom} onClick={() => {onRandom(826)}}></button>
      </div>
   );
}
