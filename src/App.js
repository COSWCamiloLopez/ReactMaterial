import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoApp} from './TodoApp';
import {Login} from "./component/Login";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoggedIn: localStorage.getItem("isLoggedIn")}
        this.handleIsLoggedChange = this.handleIsLoggedChange.bind(this);
    }

    render() {

        const LoginView = () => (
            <Login/>
        );

        const TodoView = () => (
            <TodoApp/>
        );

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>

                    <ul>
                        <li><Link
                            to="/"
                        >Login</Link></li>
                        <li><Link
                            to="/todo"
                        >Todo</Link></li>
                    </ul>

                    <div>
                        <Route
                            exact
                            path={this.state.isLoggedIn === "true" ? '/todo' : '/'}
                            component={this.state.isLoggedIn === "true" ? TodoView : LoginView}
                        />
                    </div>
                </div>
            </Router>
        );
    }

    handleIsLoggedChange(){
        this.setState({
           isLoggedIn: localStorage.getItem("isLoggedIn")
        });
    }
}

export default App;
