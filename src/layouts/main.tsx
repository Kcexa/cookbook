import * as React from 'react';
import { withStyles, createStyles, WithStyles, Theme } from '@material-ui/core/styles';
import AppHeader from '../components/AppHeader';

const styles = (theme: Theme) => createStyles({});

export interface AppProps extends WithStyles<typeof styles> {}

/**
 * Main layouts of App
 * @param props
 * @constructor
 */
const App = (props: AppProps) => (
    <>
        <AppHeader/>
    </>
);

export default withStyles(styles)(App);
