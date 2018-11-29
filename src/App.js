import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import PokeWrapper from './containers/PokeWrapper';
import PokemonDetail from './components/PokemonDetail';
import Home from './containers/Home';
import PrivateRoute from './components/PrivateRoute';
import { Provider } from 'react-redux';
import store from './store';
import NavBar from './components/Navbar';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <div className="challenge"></div>
                            <img src={logo} className="App-logo" alt="logo" />
                        </header>
                        <Route path="/" component={NavBar}/>
                        <div className="container mb-5">
                            <Switch>
                                <PrivateRoute exact path="/pokemons/:id" component={PokemonDetail} />
                                <Route exact path="/pokemons" component={PokeWrapper} />
                                <Route path="/" exact component={Home} />
                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
