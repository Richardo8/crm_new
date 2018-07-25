import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Button } from 'antd';
import logo from './logo.svg';
import './App.css';
import asyncComponent from './components/common/AsyncComponent'

const AsyncAdminA = asyncComponent(() => import("./components/console/ConsoleA"))
const AsyncAdminB = asyncComponent(() => import("./components/console/ConsoleB"))
const AsyncAdminC = asyncComponent(() => import("./components/console/ConsoleC"))

class App2 extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React 1</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Button type="primary">
              App1 确认
          </Button>
          <Router>
              <div>
                  <ul>
                      <li><Link to="/console/consoleA">consoleA</Link></li>
                      <li><Link to="/console/consoleB">consoleB</Link></li>
                      <li><Link to="/console/consoleC">consoleC</Link></li>
                  </ul>
                  <hr/>
                  <Route exact path="/console/consoleA" component={AsyncAdminA}/>
                  <Route path="/console/consoleB" component={AsyncAdminB}/>
                  <Route path="/console/consoleC" component={AsyncAdminC}/>
              </div>
          </Router>
      </div>
    );
  }
}

export default App2;
