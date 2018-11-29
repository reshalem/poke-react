import React from 'react';
import { Link } from 'react-router-dom';

const Pokemon = (props) => {
    const imgStyle = {
        width: '400px',
        height: '400px'
    };

    if (props.pokemon.ability === undefined) {
        props.pokemon.ability = {
            text: '-'
        };
    }

    return (
        <div className="card mt-3 mx-1">
            <img className="card-img-top img-fluid mb-2" style={imgStyle} src={props.pokemon.imageUrl} alt="" />
            <div className="card-body mb-0">
                <div className="d-flex justify-content-between align-items-center">
                    <h4 className="card-title lead font-weight-bold">{props.pokemon.name}</h4>
                    <h4 className="card-title lead">{props.pokemon.nationalPokedexNumber}</h4>
                </div>
                <p className="card-text">{props.pokemon.ability.text}</p>
            </div>
            <p className="btn btn-link mb-4"><Link to={"/pokemons/" + props.pokemon.id}>See Details</Link></p>
        </div>
    );
};

export default Pokemon;