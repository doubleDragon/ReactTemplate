import React from 'react';
import {HashRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';

import './lib/flexible/flexible';
import './lib/flexible/flexible_css.js';


import './index.css';
import App from './components/app';



ReactDOM.render(
    (<HashRouter>
        <App/>
    </HashRouter>), document.getElementById('root'));

