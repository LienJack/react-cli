/**
 * Created by mac on 2019/6/5.
 */
import React, {Component} from "react";
import {Route} from "react-router-dom";
import {Demo,Demo2} from "src/pages"
class AppRoutes extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <Route exact path='/' component={Demo}/>
                <Route path='/demo2' component={Demo2}/>
            </div>
        );
    }
}
export default AppRoutes
