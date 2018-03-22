import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppOne from './App1';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppOne />, document.getElementById('root'));
registerServiceWorker();
