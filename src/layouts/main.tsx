import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import * as React from 'react';
import AppHeader from '../components/AppHeader';
import AppMenu from '../components/AppMenu';

const styles = (theme: Theme) => createStyles({});

export interface IAppProps extends WithStyles<typeof styles> {}
export interface IAppState {
    openMenu: boolean;
}

/**
 * Main layouts of the App
 */
class App extends React.Component<IAppProps, IAppState> {
    state = {
        openMenu: false,
    };

    toggleMenu = () => {
        const openMenuBefore = this.state.openMenu;
        this.setState({ openMenu: !openMenuBefore });
    };

    render() {
        const { openMenu }: IAppState = this.state;
        return (
            <>
                <AppHeader handleMenuOpen={this.toggleMenu} isMenuOpen={openMenu} />
                <AppMenu open={openMenu} handleMenuClose={this.toggleMenu} />
            </>
        );
    }
}

export default withStyles(styles)(App);
