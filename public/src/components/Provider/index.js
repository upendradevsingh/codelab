import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../Home';
import Plp from '../Plp';
import Pdp from '../Pdp';

export default class Provider extends Component {
    constructor(props) {
        super();
        console.log(props);
        this.state = {
            home: {
                widgets: []
            },
            plp: {},
            pdp: {},
            ...props
        }
    }

    render() {
        return (
            <Router>
                <Route
                    exact
                    path="/"
                    render={(props) => <Home {...this.state} {...props} />} />
                <Route
                    path="/listing"
                    render={(props) => <Plp {...this.state} {...props} />} />
                <Route
                    path="/product/:id"
                    render={(props) => <Pdp {...this.state} {...props} />} />
            </Router>
        )
    }
}
