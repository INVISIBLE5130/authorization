import {Component} from "react";
import React from "react";

class App extends Component {
    render() {
        return (
            <div className="HomePage">
                <div className="registration">
                    <input type='text' placeholder='Enter login:' value=''/>
                    <input type='text' placeholder='Enter password:' value=''/>
                    <br/>
                    <input type='submit' placeholder='Register'/>
                </div>
            </div>
        );
    }
}

export default App;