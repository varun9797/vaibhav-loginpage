import React from 'react';
import './App.css';
import Login from "./UI/login/login"
import Home from "./UI/home/home"
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login}></Route>
            <Route path="/home" component={Home}></Route>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
