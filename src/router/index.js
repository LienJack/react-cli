
import React from 'react';
import { HashRouter, Route, Switch, Link} from 'react-router-dom';
import Bundle from './Bundle';
import Home from "bundle-loader?lazy&name=Home!@/views/index/index.jsx";
import Count from "bundle-loader?lazy&name=Count!@/views/count/index.jsx";
const Loading = function () {
  return <div>Loading...</div>
};

// 按需加载
const createComponent = (component) => (props) => (
  <Bundle load={component}>
      {
          (Component) => Component ? <Component {...props} /> : <Loading/>
      }
  </Bundle>
);
const PrimaryLayout = () => (
  <HashRouter>
    <div>
      <header>
        <Link to="/">toHome</Link>&emsp;|&emsp;
        <Link to="/count">toCount</Link>
      </header>
      <div>
        <Switch>
          <Route path="/" exact component={createComponent(Home)} />
          <Route path="/count" exact component={createComponent(Count)} />
        </Switch>
      </div>
    </div>
  </HashRouter>
);

export default PrimaryLayout;
