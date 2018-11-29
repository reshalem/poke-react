import axios from 'axios';

export function fetchDetail(pokemonId) {
    return (dispatch) => {
        dispatch({type: 'FETCH_DETAIL_LOADING'});
        axios.get(`https://api.pokemontcg.io/v1/cards/${pokemonId}`)
            .then(({data}) => {
                dispatch({type: 'FETCH_DETAIL_SUCCESS', payload: data.card});
            })
            .catch((err) => {
                console.log('Fetch Pokemon Detail Error: ', err);
                dispatch({type: 'FETCH_DETAIL_ERROR'});
            });
    };   
};