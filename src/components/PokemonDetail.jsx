import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDetail } from '../actions/fetchDetail';

class PokemonDetail extends Component {
    componentDidMount() {
        this.props.fetchDetail(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <h1>AAAAAAAAA</h1>
                <h2>{ this.props.pokemon.setCode }</h2>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.detailPokemon.loading,
        error: state.detailPokemon.error,
        pokemon: state.detailPokemon.pokemon
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDetail: (pokemonId) => {dispatch(fetchDetail(pokemonId))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);