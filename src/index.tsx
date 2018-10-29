import * as firebase from 'firebase/app';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Hello from './components/Hello';
import store from './store';
import { env } from './configuration';
import { config } from './firebase';

const app = firebase.initializeApp(config);

if (env !== 'production') {
    window.firebase = app;
}

/**
 * id of App root element
 */
const rootElement = 'root';

render(
    <Provider store={store}>
        <Hello compiler="TypeScript" framework="React" />
    </Provider>,
    document.getElementById(rootElement),
);
