import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase, { auth, provider, facebook } from '../config';
import { connect } from 'react-redux';
import { login, logout, setUser } from '../actions/authentication';

class NavBar extends Component {
    gLogin = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                localStorage.setItem('token', 'test-react');
                this.props.setUser(user);
                this.props.login();
            })
            .catch((error) => {
                console.log('Google Firebase Auth Error: ', error);
            });
    }

    fLogin = () => {
        auth.signInWithPopup(facebook)
            .then((result) => {
                const user = result.user;
                localStorage.setItem('token', 'test-react');
                this.props.setUser(user);
                this.props.login();
            })
            .catch((error) => {
                console.log('Facebook Firebase Auth Error: ', error);
            });
    }

    logout = () => {
        auth.signOut()
            .then(() => {
                localStorage.removeItem('token');
                this.props.logout();
                this.props.history.push('/');
            })
            .catch((error) => {
                console.log('Firebase SignOut Error: ', error);
            });
    }

    checkToken = () => {
        const token = localStorage.getItem('token');
        
        if (token) {
            this.props.login();
        } else {
            this.props.logout();
        }
    }

    componentDidMount() {
        this.checkToken();
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.props.setUser(user);
                this.checkToken();
            }
        });
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-2 text-white" id="main-nav">
                <div className="container d-flex align-items-center">
                    <div className="navbar-brand App-learn">PokeReact</div>
                    <ul className="navbar-nav ml-auto d-flex align-items-center justify-content-end" id="ul-nav">
                        <li className="nav-item mr-3"><Link className="nav-item" to="/">Home</Link></li>
                        <li className="nav-item mr-3"><Link className="nav-item" to="/pokemons">Pokemons</Link></li>
                        <li className="nav-btn">
                            { !this.props.isLogin ? 
                                <div className="d-flex justify-content-between align-items-center">
                                    <button onClick={this.gLogin} type="submit" className="btn btn-outline-light mr-3"><i className="fab fa-google mr-2"></i>Login with Google</button>
                                    <button onClick={this.fLogin} type="submit" className="btn btn-outline-light"><i className="fab fa-facebook-square mr-3"></i>Login with Facebook</button>
                                </div> : 
                                <button onClick={this.logout} type="submit" className="btn btn-outline-light">Logout</button> }
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.login.isLogin,
        user: state.login.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch(login()),
        logout: () => dispatch(logout()),
        setUser: (user) => dispatch(setUser(user))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);