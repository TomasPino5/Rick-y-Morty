import { ADD_FAV, REMOVE_FAV } from './actions'
import { FILTER, ORDER } from "./actions";

export const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case ADD_FAV:
            return { ...state, myFavorites: payload, allCharacters: payload };
        case REMOVE_FAV:
            return { ...state, myFavorites: payload };
        case FILTER:
            const filteredCharacters = state.allCharacters.filter(character => character.gender === payload);
            return {
                ...state,
                myFavorites:
                    payload === 'all'
                    ? [...state.allCharacters]
                    : filteredCharacters
            }
        case ORDER:
            const sortedCharacters = [...state.allCharacters]
              return {
                ...state,
                myFavorites:
                    payload === 'A'
                    ? sortedCharacters.sort((a, b) => a.id - b.id)
                    : sortedCharacters.sort((a, b) => b.id - a.id)
              }
        default:
            return {...state}
    }
}

export default rootReducer;