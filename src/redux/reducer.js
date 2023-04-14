import { ADD_FAV, REMOVE_FAV } from './actions'
import { FILTER, ORDER } from "../redux/actions";

export const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharacters],
                allCharacters: [...state.allCharacters, payload]
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((character) => character.id !== payload)
            }
        case FILTER:
            const filteredCharacters = state.allCharacters.filter((character) => character.gender === payload);
            return {
                ...state,
                myFavorites: filteredCharacters
            }
        case ORDER:
            const sortedCharacters = [...state.allCharacters].sort((a, b) => {
                if (payload === "A") {
                  return a.id - b.id;
                } else if (payload === "D") {
                  return b.id - a.id;
                } else {
                  return 0;
                }
              });
              return {
                ...state,
                myFavorites: sortedCharacters
              }
        default:
            return {...state}
    }
}

export default rootReducer;