import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import translations from '../translations';
import styles from './AppHeader.styles';

export interface AppProps extends WithStyles<typeof styles> {}

/**
 * Main header of the App
 * @param classes
 * @constructor
 */
const AppHeader = ({ classes }: AppProps) => (
    <AppBar position="static">
        <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton>
            <div className={classes.grow} />
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder={`${translations.search}...`}
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                />
            </div>
            <Button color="inherit">{translations.login}</Button>
        </Toolbar>
    </AppBar>
);

export default withStyles(styles)(AppHeader);
