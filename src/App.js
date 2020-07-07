import React, { Component } from 'react';

import HomePage from './components/pages/HomePage';
import Authorization from './components/pages/Authorization';

import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <div className="App">
          <BrowserRouter>
            <Route exact path={"/"} component={Authorization}/>
            <Route exact path={"/home"} component={HomePage}/>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;