import { Link } from "react-router-dom"
import style from "./detailInfo.module.css"
import { useSelector } from 'react-redux'

const DetailInfo = (props) => {
    const {character, pathname} = props;
    
    const characterStatePath = () => {
        if (pathname === "home") {
            return useSelector(state => state.characters);
        }
        if (pathname === "favorites") {
            return useSelector(state => state.myFavorites);
        }
    }

    const characterState =  characterStatePath();
    
    const actualIndex = characterState.findIndex(object => object.id === character.id);

    const nextIndex = actualIndex + 1;
    const previousIndex = actualIndex - 1;

    return(
        <div className={style.container}>
            <div className={style.imgContainer1}>
                <div className={style.imgContainer2}>
                    <div className={style.imgContainer3}>
                        <img className={style.img} src={character.image}></img>
                    </div>
                </div>
            </div>
            <div className={style.nameContainer}>
                <h1 className={style.name}>{character.name}</h1>
            </div>
            <div className={style.infoContainer}>
                <div className={style.info}>
                    <div className={style.infoBox}>
                        <h5>Status:</h5>
                        <p>{character.status}</p>
                    </div>
                    <div className={style.infoBox}>
                        <h5>Specie:</h5>
                        <p>{character.species}</p>
                    </div>
                    <div className={style.infoBox}>
                        <h5>Gender:</h5>
                        <p>{character.gender}</p>
                    </div>
                    <div className={style.infoBox}>
                        <h5>First seen in:</h5>
                        <p>{character.origin}</p>
                    </div>                    
                    <div className={style.infoBox}>
                        <h5>Last known location:</h5>
                        <p>{character.location}</p>
                    </div>                   
                </div>
                <div className={style.btnContainer}>
                    <Link to={`/detail/${previousIndex >= 0 ? characterState[previousIndex].id : character.id}/${pathname}`}className={previousIndex == -1? style.btnHide : style.btnLeft}></Link>
                    <Link to={`/detail/${nextIndex < characterState.length ? characterState[nextIndex].id : character.id}/${pathname}`} className={nextIndex == characterState.length ? style.btnHide : style.btnRight}></Link>
                </div>
            </div>
        </div>
    )
}

export default DetailInfo