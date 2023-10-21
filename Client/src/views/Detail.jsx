import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import DetailInfo from "../components/detail/DetailInfo";
import style from "./Views.module.css"

const Detail = () => {
    const {id , pathname} = useParams(); // Dos puntitos ":"
    const [character , setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
            .then((response) => {
                setCharacter(response.data)
            })
            .catch((error) => {
                console.error('Error al realizar la solicitud:', error);
            });

        return (
            setCharacter({})
        )

    }, [id]);

    if (Object.keys(character).length > 0) {
        return (
            <div className={style.detail}>
                <DetailInfo character={character} pathname={pathname}></DetailInfo>
            </div>
        )
    }            
}

export default Detail