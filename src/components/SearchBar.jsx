import React from 'react';

const SearchBar = (props) => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="form-inline d-flex justify-content-center p-0">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                    <input type="text" onChange={(e) => props.searchPokemon(e)} className="form-control" placeholder="Type Pokemon Name"></input>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;