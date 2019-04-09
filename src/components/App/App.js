import React, { Component } from "react";
import { Provider } from "react-redux";
import { Switch } from "react-router-dom";
import { ConnectedRouter as Router } from "react-router-redux";

import { routes } from "../../routes";
import paths from "../../paths";

import store from "../../store";
import { history } from "../../history";
import AppRoute from "../AppRoute/AppRoute";

import "./style.less";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Switch>
              {routes.map(route => (
                <AppRoute
                  key={route.path}
                  exact={route.isExact}
                  path={route.path}
                  component={route.component}
                />
              ))}
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
