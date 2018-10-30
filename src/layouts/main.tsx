import * as React from 'react';
import { withStyles, createStyles, WithStyles, Theme } from '@material-ui/core/styles';
import AppHeader from '../components/AppHeader';
import AppMenu from '../components/AppMenu';

const styles = (theme: Theme) => createStyles({});

export interface AppProps extends WithStyles<typeof styles> {}
export interface AppState {
    openMenu: boolean;
}

/**
 * Main layouts of the App
 */
class App extends React.Component {
    state = {
        openMenu: false,
    };

    toggleMenu = () => {
        const openMenuBefore = this.state.openMenu;
        this.setState({ openMenu: !openMenuBefore });
    };

    render() {
        const { openMenu }: AppState = this.state;
        return (
            <>
                <AppHeader handleMenuOpen={this.toggleMenu} isMenuOpen={openMenu} />
                <AppMenu open={openMenu} handleMenuClose={this.toggleMenu} />
            </>
        );
    }
}

export default withStyles(styles)(App);
