
import axios from 'axios';
import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
// We have two hooks we are importing from react.
import { useEffect, useState } from 'react';
import './App.css';
import HomePage from '../homePage/todoHome';
function App() {

    return (
    <Router>
        <Redirect exact from="/" to="/home" />
        <Route exact path="/home">
            <HomePage/>
        </Route>





    </Router>


    )

}

export default App;
