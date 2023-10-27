import { 
    REMOVE_FAV, 
    ADD_FAV, 
    ADD_CHARACTER_ID, 
    REMOVE_CHARACTER, 
    ADD_CHARACTER_RANDOM, 
    REMOVE_ALL,
    FILTER,
    ORDER,
    SHOW_ALL_FAV
} from "./actions_types";
import axios from "axios";


export const remove_fav = (id) => {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
  return (dispatch) => {
     axios.delete(endpoint).then(({ data }) => {
        return dispatch({
           type: REMOVE_FAV,
           payload: data,
     });
     });
  };
};

export const add_fav = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return (dispatch) => {
     axios.post(endpoint, character).then(({ data }) => {
        return dispatch({
           type: ADD_FAV,
           payload: data,
        });
     });
  };
};

export const add_Character = (id) => {
    return function (dispatch) {
        fetch(`http://localhost:3001/rickandmorty/character/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('¡No hay personajes con este ID!');
          }
          return response.json();
        })
        .then((data) => {
          if (data.name) {
            dispatch({type : ADD_CHARACTER_ID, payload : data});
          } else {
            window.alert('¡No hay personajes con este ID!');
          }
        })
        .catch((error) => {
          window.alert(error.message);
        });
    }
}

export const add_Character_Random = (id) => {
    return function (dispatch) {
        fetch(`http://localhost:3001/rickandmorty/character/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('¡No hay personajes con este ID!');
          }
          return response.json();
        })
        .then((data) => {
          if (data.name) {
            dispatch({type : ADD_CHARACTER_RANDOM, payload : data});
          } else {
            window.alert('¡No hay personajes con este ID!');
          }
        })
        .catch((error) => {
          window.alert(error.message);
        });
    }
}

export const remove_character = (id) => {
  return {
    type : REMOVE_CHARACTER, payload : id
  }
}

export const remove_all = () => {
  return {
    type : REMOVE_ALL
  }
}

export const filterCards = (gender) => {
  return {
    type : FILTER, payload : gender
  }
}

export const orderCards = (order) => {
  return {
    type : ORDER, payload : order
  }
}

export const show_all_fav = () => {
  return {
    type : SHOW_ALL_FAV
  }
}
