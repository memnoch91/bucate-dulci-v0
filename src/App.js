import React, { Component } from 'react';
import './App.scss';


//Components
import Home from './components/stateful/Home/Home.js'
import Portfolio from './components/stateful/Portfolio/Portfolio'


import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

class App extends Component {
  render() {


    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/portfolio" component={Portfolio}></Route>
        </Switch>
      </Router>

    );
  }
}

// const mapStateToProps = state => {
//   return {
//     admin: state.admin
//   };
// };


export default App;
