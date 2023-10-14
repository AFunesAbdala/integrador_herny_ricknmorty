import Card from '../card/Card';
import style from './Cards.module.css';
import { useNavigate } from 'react-router-dom';

export default function Cards(props) {
   const {characters, onClose} = props;

   return (
      <div className={style.cards}>
         {characters.map((character)=> {
            return (
               <Card 
               key={character.id}
               id={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}
               image={character.image}
               onClose={onClose}
               />
            );
         })}
      </div>
   );
}
