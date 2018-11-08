import createMuiTheme, { PaletteOptions } from '@material-ui/core/styles/createMuiTheme';
import typography from './typography';
import palette from './palette';
import defaultColorScheme from './colors';

export function createMyTheme(options: PaletteOptions) {
    return createMuiTheme({
        ...options,
    });
}

const theme = (colorScheme = defaultColorScheme) =>
    createMyTheme({
        palette: palette(colorScheme),
        typography: typography(),
    });

export default theme;
