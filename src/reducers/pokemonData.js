const defaultState = {
    loading: false,
    error: false,
    errorMsg: '',
    pokemons: [],
    defaultPokemons: []
};

export default function(state=defaultState, action) {
    switch (action.type) {
        case 'FETCH_POKEMON_LOADING':
            return {
                ...state, 
                loading: true
            }
        case 'FETCH_POKEMON_SUCCESS':
            return {
                ...state,
                loading: false,
                pokemons: [...action.payload], 
                defaultPokemons: [...action.payload]
            }
        case 'FETCH_POKEMON_ERROR':
            return {
                ...state,
                loading: false,
                error: true
            }
        case 'SET_POKEMON':
            return {
                ...state,
                loading: false,
                pokemons: [...action.payload]
            }
        case 'SET_DEFAULT':
            return {
                ...state,
                loading: false,
                pokemons: [...state.defaultPokemons]
            }
        default: 
            return state;
    }
};

