import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import firebase, { auth, provider } from '../config';
import { connect } from 'react-redux';
import { login, logout } from '../actions/authentication';

class Home extends Component {
    state = {
        user: null
    }

    login = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                console.log('user', result.user);
                const user = result.user;
                this.setState({
                    user: user
                });
                localStorage.setItem('token', 'test-react');
                this.props.login();
            })
            .catch((error) => {
                console.log('Firebase Auth Error: ', error);
            });
    }

    logout = () => {
        auth.signOut()
            .then(() => {
                this.setState({
                    user: null
                });
                localStorage.removeItem('token');
                this.props.logout();
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
                this.setState({
                    user: user
                });
                this.checkToken();
            }
        });
    }

    render() {
        return (
            <div>
                <Navbar login={this.login} isLogin={this.props.isLogin} logout={this.logout} />
                <h1 className="display-2">HOME</h1>
                {this.state.user ? 
                    <div>
                        <h1>{this.state.user.displayName}</h1>
                        <h2>{this.state.user.email}</h2>
                    </div> : <h1>Error</h1>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.login.isLogin
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch(login()),
        logout: () => dispatch(logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
