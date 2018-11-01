import * as firebase from 'firebase/app';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import MainLayouts from './layouts/main';
import store from './store';
import { env } from './configuration';
import { config } from './firebase';
import theme from './theme';

declare global {
    interface Window {
        store: any;
    }
}

const app = firebase.initializeApp(config);
if (env !== 'production') {
    window.firebase = app;
    window.store = store;
}

/**
 * id of App root element
 */
const rootElement = 'root';

render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme()}>
            <MainLayouts />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById(rootElement),
);
