import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// reducers
import login from './reducers/login';
import pokemonData from './reducers/pokemonData';
import detailPokemon from './reducers/detailPokemon';

const rootReducer = combineReducers({
    login,
    pokemonData,
    detailPokemon
});

const store = createStore(
    rootReducer, 
    compose(applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;