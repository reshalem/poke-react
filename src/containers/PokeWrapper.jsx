import React, { Component } from 'react';
import Pokemon from '../components/Pokemon';
import { connect } from 'react-redux';
import { fetchPokemons, setPokemons, setPokemonsToDefault, fetchBasedOnSubtype } from '../actions/fetchPokemons';
import '../styles/loadingSpinner.css';
import SearchBar from '../components/SearchBar';
import Select from 'react-select';

const options = [
    {value: 'Level%20Up', label: 'Level Up'} ,
    {value: 'Stage%201', label: 'Stage 1'},
    {value: 'Stage%202', label: 'Stage 2'} ,
    {value: 'Legend', label: 'Legend'}
];

class PokeWrapper extends Component {
    state = {
        selectedOption: {
            value: '',
            label: 'Level Up'
        }
    }

    handleSelectChange = (selectedOption) => {
        this.setState({ selectedOption }, function(){
            console.log('option', this.state.selectedOption)
        });
    
        console.log(`Option selected:`, selectedOption);
        this.props.fetchBasedOnSubtype(selectedOption.value);
    }

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
        const { selectedOption } = this.state;

        return (
            <div>
                {this.props.loading ? 
                    <div className="lds-hourglass d-flex mt-5 justify-content-center align-items-center mx-auto"></div> : 
                    <div className="mt-5">
                        <Select value={selectedOption} onChange={this.handleSelectChange} options={options} />
                        <div className="mt-3 d-flex justify-content-between align-items-center">
                            <h1 className="display-4">Subtype: {this.state.selectedOption.label}</h1>
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
        fetchBasedOnSubtype: (subtype) => {dispatch(fetchBasedOnSubtype(subtype))},
        setPokemons: (filteredPokemons) => dispatch(setPokemons(filteredPokemons)),
        setPokemonsToDefault: () => dispatch(setPokemonsToDefault())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokeWrapper);