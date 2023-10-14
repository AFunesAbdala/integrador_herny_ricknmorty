import CardsFavorites from '../components/favorites/CardsContainer'
import style from './Views.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {remove_fav} from '../redux/actions';

const Favorites = () => {

    const myFavorites = useSelector(state => state.myFavorites);

    const dispatch = useDispatch();

    const onClose = (id) => {
        dispatch(remove_fav(id))
    };

    return(
        <div className={style.favorites}>
            <CardsFavorites myFavorites={myFavorites} onClose={onClose}></CardsFavorites>
        </div>
    )   
}

export default Favorites