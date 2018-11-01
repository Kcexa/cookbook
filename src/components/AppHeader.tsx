import * as React from 'react';
import classNames from 'classnames';
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
import Typography from '@material-ui/core/Typography/Typography';

export interface AppHeaderProps extends WithStyles<typeof styles> {
    handleMenuOpen: () => void;
    isMenuOpen: boolean;
}

/**
 * Main header of the App
 * @param classes
 * @param handleMenuOpen
 * @constructor
 */
const AppHeader = ({ classes, handleMenuOpen, isMenuOpen }: AppHeaderProps) => (
    <AppBar
        position="static"
        className={classNames(classes.appBar, {
            [classes.appBarShift]: isMenuOpen,
        })}
    >
        <Toolbar>
            <IconButton
                className={classNames(classes.menuButton, isMenuOpen && classes.hide)}
                color="inherit"
                aria-label="Menu"
                onClick={handleMenuOpen}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap className={classes.grow} />
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
