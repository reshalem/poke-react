const defaultState = {
    loading: false,
    error: false,
    pokemon: {
        name: '',
        series: '',
        set: '',
        setCode: '',
        weaknesses: [{
            type: ''
        }],
        types: [],
        rarity: '',
        nationalPokedexNumber: 0,
        imageUrlHiRes: '',
        hp: '',
        ability: {
            name: '',
            text: ''
        }
    }
};

export default function(state=defaultState, action) {
    switch(action.type) {
        case 'FETCH_DETAIL_LOADING': 
            return {
                ...state,
                loading: true
            }
        case 'FETCH_DETAIL_SUCCESS':
            return {
                ...state,
                loading: false,
                pokemon: {
                    ...action.payload
                }
            }
        case 'FETCH_DETAIL_ERROR':
            return {
                ...state,
                error: true,
                loading: false
            }
        default: 
            return state
    }
};