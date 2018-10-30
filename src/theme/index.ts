import { createMuiTheme } from '@material-ui/core/styles';
import typography from './typography';
import palette from './palette';
import defaultColorScheme from './colors';

const theme = (colorScheme = defaultColorScheme) =>
    createMuiTheme({
        palette: palette(colorScheme),
        typography: typography(),
    });

export type themeType = typeof theme;

export default theme;
