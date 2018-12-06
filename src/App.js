import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Contact';
import About from './components/About';
import Contact from './components/Contact';
import Signin from './components/Signin';
import Nav from './components/Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Test from './components/Test';
class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/logout" component={Signin} />
          <Route path="/test" component={Test} />
        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;
