import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-2 text-white">
            <div className="container">
                <p className="navbar-brand">PokeList</p>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/pokemons">Pokemons</Link></li>
                    <li className="nav-item">
                        { !props.isLogin ? 
                            <button onClick={props.login} type="submit" className="btn btn-outline-light">Login</button> : 
                            <button onClick={props.logout} type="submit" className="btn btn-outline-light">Logout</button> }
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;