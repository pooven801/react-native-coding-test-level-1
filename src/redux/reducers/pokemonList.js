import * as ActionTypes from "../actions/ActionTypes";

const initialState = {
    data: { results: [] }
};

export default function getPokemonList(state = initialState, action = {}) {
    switch (action.type) {
        case ActionTypes.GET_POKEMON_DATA:
            return {
                ...state,
                data: action.data,
            };
        default:
            return state;
    }
};
