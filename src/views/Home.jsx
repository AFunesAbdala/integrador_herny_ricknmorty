import style from './Views.module.css';
import Cards from '../components/cards/Cards.jsx';
import SearchBar from '../components/searchBar/SearchBar.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { add_Character , add_Character_Random, remove_character } from '../redux/actions';

function Home() {

   const characters = useSelector(state => state.characters)
   const dispatch = useDispatch();

   const searchCharacters = (id) => {
      if (characters.some((character) => character.id === Number(id))) {
        window.alert('¡Este personaje ya está en la lista!');
        return;
      }

      dispatch(add_Character(id));
    };

   const onClose = (id) => {
      dispatch(remove_character(id))
   };

   const randomCharacter = (totalCharacters) => {
      const randomId = Math.floor(Math.random() * totalCharacters) + 1;

      if (characters.some((character) => character.id === randomId)) {
         window.alert('¡Este personaje ya está en la lista!');
        return;
      }

      dispatch(add_Character_Random(randomId));
   }

   return (
      <div className={style.homeBack}>
         <div className={style.home}>
            <SearchBar onSearch={searchCharacters} onRandom={randomCharacter} />
            <Cards characters={characters} onClose={onClose} />
         </div>
      </div>
   );
}

export default Home;