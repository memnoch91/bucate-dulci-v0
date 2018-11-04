import React, { Component } from "react";

//Components
import Portfolio from "./components/stateful/Portfolio/Portfolio";
import MainContent from "./components/stateful/MainContent/MainContent"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={MainContent} />
            <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
    );
  }
}

export default App;
