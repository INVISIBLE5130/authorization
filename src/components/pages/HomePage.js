import Menu from '../Menu';
import {Component} from "react";
import React from "react";

class App extends Component {
    render() {
        return (
            <div className="HomePage">
                <Menu/>
                <div className="text">
                    <h1>HOME PAGE</h1>
                    <br/>
                    <h2>Welcome!!!</h2>
                </div>
            </div>
        );
    }
}

export default App;