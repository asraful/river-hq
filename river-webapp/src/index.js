import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import Login from './user/login/Login';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Login />
    </Router>, 
    document.getElementById('root')
);

registerServiceWorker();
