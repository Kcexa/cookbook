import * as React from 'react';
import { connect } from 'react-redux';
import { createStyles, MuiThemeProvider, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import AppHeader from '../components/AppHeader';
import AppMenu from '../components/AppMenu';
import theme from '../theme';
import { IThemes } from '../store/reducers/themes';

const styles = (theme: Theme) => createStyles({});

interface StateFromProps {
    themes: IThemes;
}
interface DispatchFromProps {}

interface IAppProps extends WithStyles<typeof styles> {
    themes: IThemes;
}
interface IAppState {
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
        const { openMenu } = this.state;
        const { themes } = this.props;

        return (
            <MuiThemeProvider theme={theme(themes.allUiThemes[themes.currentTheme])}>
                <AppHeader handleMenuOpen={this.toggleMenu} isMenuOpen={openMenu} />
                <AppMenu handleMenuClose={this.toggleMenu} open={openMenu} />
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        themes: state.themes,
    };
};

export default connect<StateFromProps, DispatchFromProps, void>(
    mapStateToProps,
    null,
)(withStyles(styles)(App));
