import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route } from "react-router-dom";
import "./normalize.css";
import "./index.css";
import AppRoutes from "src/router"
ReactDOM.render(
    (<BrowserRouter>
        <Route path="/" component={AppRoutes}/>
    </BrowserRouter>),
    document.getElementById('root')
)
