import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import DetailInfo from "../components/detail/DetailInfo";
import style from "./Views.module.css"

const Detail = () => {
    const {id , pathname} = useParams(); // Dos puntitos ":"
    const [character , setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) setCharacter(data);
        });
        
        return () => {
            setCharacter({});
        }
     }, [id]);

    if (Object.keys(character).length != 0) {
        return (
            <div className={style.detail}>
                <DetailInfo character={character} pathname={pathname}></DetailInfo>
            </div>
            
        )
    }
}

export default Detail