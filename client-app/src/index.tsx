import React from 'react';
import ReactDOM from 'react-dom';
import './app/layout/style.css';
import 'react-toastify/dist/ReactToastify.min.css';
import {createBrowserHistory} from 'history';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'
import {Router} from 'react-router-dom';
import ScrollToTop from './app/layout/ScrollToTop';

export const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
    <ScrollToTop>
    <App />
    </ScrollToTop>
    </Router>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
