import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import Capstone from './components/Capstone';
import App from './App'

import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
        <App />
        <Capstone />
        </div>
    </Router>
    ,document.getElementById('root'));

registerServiceWorker();