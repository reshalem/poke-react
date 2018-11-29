import React, { Component } from 'react';
import Pokemon from '../components/Pokemon';
import { connect } from 'react-redux';
import { fetchPokemons, setPokemons, setPokemonsToDefault } from '../actions/fetchPokemons';
import '../styles/loadingSpinner.css';
import SearchBar from '../components/SearchBar';

class PokeWrapper extends Component {
    componentDidMount() {
        this.props.fetchPokemons();
    }

    searchPokemon = (e) => {
        const filteredPokemons = this.props.defaultPokemons.filter(function (pokemon) {
            const testCase = new RegExp(e.target.value, 'i');
            const regexTest = testCase.test(pokemon.name);
            return regexTest;
        });

        if (e.target.value === '') {
            this.props.setPokemonsToDefault();
        } else {
            this.props.setPokemons(filteredPokemons);
        }
    }

    render() {
        return (
            <div>
                {this.props.loading ? 
                    <div className="lds-hourglass d-flex mt-5 justify-content-center align-items-center mx-auto"></div> : 
                    <div className="mt-5">
                        <div className="d-flex justify-content-between align-items-center">
                            <h1 className="display-4">Level Up Pokemons</h1>
                            <SearchBar searchPokemon={e => this.searchPokemon(e)} />
                        </div>
                        <div className="card-columns mt-2">
                            {this.props.pokemons.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.id} />)}
                        </div>
                    </div>
                }
                {this.props.error && <h1 className="text-danger display-4">Error Fetching From API</h1>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.pokemonData.loading,
        pokemons: state.pokemonData.pokemons,
        error: state.pokemonData.error,
        defaultPokemons: state.pokemonData.defaultPokemons
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPokemons: () => {dispatch(fetchPokemons())},
        setPokemons: (filteredPokemons) => dispatch(setPokemons(filteredPokemons)),
        setPokemonsToDefault: () => dispatch(setPokemonsToDefault())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokeWrapper);