import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import Loading from "./components/misc/Loading";
import NotFound from "./components/misc/NotFound";

import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from "react-router-dom";

import "./scss/style.scss"


const Root = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/load" component={Loading} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)


ReactDOM.render(
<Root />,
document.getElementById('root'));