import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Button } from 'antd'
import logo from './logo.svg';
import './App.css';
import asyncComponent from './components/common/AsyncComponent'

const AsyncIndexA = asyncComponent(() => import("./components/index/IndexA"))
const AsyncIndexB = asyncComponent(() => import("./components/index/IndexB"))
const AsyncIndexC = asyncComponent(() => import("./components/index/IndexC"))

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Button type='primary'>
              确定
          </Button>
          <Router>
              <div>
                  <ul>
                      <li><Link to="/Index/indexA">IndexA</Link></li>
                      <li><Link to="/Index/indexB">IndexB</Link></li>
                      <li><Link to="/Index/indexC">IndexC</Link></li>
                  </ul>
                  <hr/>
                  <Route exact path="/Index/indexA" component={AsyncIndexA}/>
                  <Route path="/Index/indexB" component={AsyncIndexB}/>
                  <Route path="/Index/indexC" component={AsyncIndexC}/>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
