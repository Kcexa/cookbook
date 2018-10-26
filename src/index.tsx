import * as firebase from 'firebase/app';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Hello from './components/Hello';

const config = {
    apiKey: 'AIzaSyDxcZVY16ndkmg_Bi0J1gY5svz1gO1l1CE',
    authDomain: 'cookbook-4fb48.firebaseapp.com',
    databaseURL: 'https://cookbook-4fb48.firebaseio.com',
    projectId: 'cookbook-4fb48',
    storageBucket: 'cookbook-4fb48.appspot.com',
    messagingSenderId: '505264871622',
};
const app = firebase.initializeApp(config);

/**
 * id of App root element
 */
const rootElement = 'root';

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById(rootElement),
);
