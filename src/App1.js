import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Button } from 'antd';
import logo from './logo.svg';
import './App.css';
import asyncComponent from './components/common/AsyncComponent'

const AsyncAdminA = asyncComponent(() => import("./components/admin/AdminA"))
const AsyncAdminB = asyncComponent(() => import("./components/admin/AdminB"))
const AsyncAdminC = asyncComponent(() => import("./components/admin/AdminC"))

class AppOne extends Component {
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
                      <li><Link to="/admin/adminA">adminA</Link></li>
                      <li><Link to="/admin/adminB">adminB</Link></li>
                      <li><Link to="/admin/adminC">adminC</Link></li>
                  </ul>
                  <hr/>
                  <Route exact path="/admin/adminA" component={AsyncAdminA}/>
                  <Route path="/admin/adminB" component={AsyncAdminB}/>
                  <Route path="/admin/adminC" component={AsyncAdminC}/>
              </div>
          </Router>
      </div>
    );
  }
}

export default AppOne;
