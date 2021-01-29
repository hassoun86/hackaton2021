import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { App } from './App';
import { createBrowserHistory, History } from 'history';
export const history: History = createBrowserHistory();
const app: JSX.Element = (
<Router history={ history } >
    <App />
</Router>
);

ReactDOM.render( app, document.getElementById( 'root' ) );

// If you want your app to work offline and load faster, you can change
// Unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
