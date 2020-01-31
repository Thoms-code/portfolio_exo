import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

/* Import Page Component */

/* Page */
import About from "./components/about/About";

/* Misc */
import NotFound from "./components/misc/NotFound";

/* Import Plugins */
import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from "react-router-dom";

/* Import style */
import "./scss/style.scss"


const Root = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)


ReactDOM.render(
<Root />,
document.getElementById('root'));