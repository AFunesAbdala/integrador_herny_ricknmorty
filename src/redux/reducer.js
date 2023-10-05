import { 
    ADD_CHARACTER_ID,
    ADD_CHARACTER_RANDOM,
    REMOVE_CHARACTER,
    ADD_FAV, 
    REMOVE_FAV, 
    REMOVE_ALL,
    FILTER,
    ORDER,
    SHOW_ALL_FAV
} from "./actions_types";

const initialState = {
    characters : [],
    myFavorites : [],
    allCharactersFav : []
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        default:
            return {...state};
        case ADD_FAV:
            return {...state, allCharactersFav : [...state.allCharactersFav, payload], myFavorites : [...state.myFavorites, payload]};
        case FILTER:
            return {...state, myFavorites : state.allCharactersFav.filter((char) => char.gender == payload)}
        case ORDER:
            const updatedMyFavorites = [...state.allCharactersFav]
            if (payload === 'A') {
                updatedMyFavorites.sort((a, b) => a.id - b.id);
            } else if (payload === 'D') {
                updatedMyFavorites.sort((a, b) => b.id - a.id);
            }
            return {...state, myFavorites : updatedMyFavorites}
        case REMOVE_FAV:
            return {...state, myFavorites: state.myFavorites.filter((char) => char.id !== Number(payload)), allCharactersFav : state.myFavorites.filter((char) => char.id !== Number(payload))};
        case SHOW_ALL_FAV:
            return {...state, myFavorites: [...state.allCharactersFav]}
        case ADD_CHARACTER_ID:
            return {...state, characters: [...state.characters, payload]}
        case ADD_CHARACTER_RANDOM:
            return {...state, characters: [...state.characters, payload]}
        case REMOVE_CHARACTER:
            return {...state, characters: state.characters.filter((char) => char.id !== Number(payload))};
        case REMOVE_ALL:
            return {...state, characters: []}
    }
};

export default rootReducer;