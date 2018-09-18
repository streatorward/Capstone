import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import Capstone from './components/Capstone';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Capstone />
    </Router>
    ,document.getElementById('root'));

registerServiceWorker();