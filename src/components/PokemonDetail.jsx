import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDetail } from '../actions/fetchDetail';
import '../styles/loadingSpinner.css';

class PokemonDetail extends Component {
    componentDidMount() {
        this.props.fetchDetail(this.props.match.params.id);
    }

    render() {
        return (
            <div className="mt-5">
                {this.props.loading ? 
                    <div className="lds-hourglass d-flex mt-5 justify-content-center align-items-center mx-auto"></div> : 
                <div>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-center align-items-center">
                            <img src="https://www.freeiconspng.com/uploads/pokeball-pokemon-ball-png-images-4.png" id="img-poke-name" className="mr-2" alt=""/>
                            <h1 className="text-left" id="title">{this.props.pokemon.name}</h1>
                        </div>
                        <div className="d-flex justify-content-end align-items-center" id="set-code">
                            <h1 className="text-right" id="title" title="set">{this.props.pokemon.set} |</h1>
                            <h1 className="text-right" id="title" title="set-code">| {this.props.pokemon.setCode}</h1>
                        </div>
                    </div>
                    <div className="border mt-4 mx-auto d-flex justify-content-between" id="poke-detail">
                        <img id="img-detail" src={this.props.pokemon.imageUrlHiRes} alt=""/>
                        <div className="d-flex flex-column align-items-start justify-content-center ml-4 px-4" id="detail-p">
                            <div className="d-flex justify-content-between">
                                <p style={{color: "#e82a4b"}} className="mr-2">Type: </p>
                                <p>{ this.props.pokemon.types[0] }</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p style={{color: "#e82a4b"}} className="mr-2">National Pokedex Number: </p>
                                <p>{ this.props.pokemon.nationalPokedexNumber }</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p style={{color: "#e82a4b"}} className="mr-2">Series: </p>
                                <p>{ this.props.pokemon.series }</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p style={{color: "#e82a4b"}} className="mr-2">Rarity: </p>
                                <p>{ this.props.pokemon.rarity }</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p style={{color: "#e82a4b"}} className="mr-2">HP: </p>
                                <p>{ this.props.pokemon.hp }</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p style={{color: "#e82a4b"}} className="mr-2">Weak to Type: </p>
                                <p>{ this.props.pokemon.weaknesses[0].type }</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p style={{color: "#e82a4b"}} className="mr-2">Ability: </p>
                                <p>{ this.props.pokemon.ability.name }</p>
                            </div>
                            <p className="text-justify">{ this.props.pokemon.ability.text }</p>
                        </div>
                    </div>
                </div> }
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