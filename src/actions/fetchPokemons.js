import axios from 'axios';

export function fetchPokemons() {
    return (dispatch) => {
        dispatch({type: 'FETCH_POKEMON_LOADING'});
        axios({
            method: 'GET',
            url: 'https://api.pokemontcg.io/v1/cards?subtype=Level%20Up'
        })
            .then(({data}) => {
                dispatch({type: 'FETCH_POKEMON_SUCCESS', payload: data.cards});
            })
            .catch((err) => {
                console.log('Fetch Pokemons Error: ', err);
                dispatch({type: 'FETCH_POKEMON_ERROR'});
            });
    };
};

export function setPokemons(filteredPokemons) {
    return {type: 'SET_POKEMON', payload: filteredPokemons};
};

export function setPokemonsToDefault() {
    return {type: 'SET_DEFAULT'};
};