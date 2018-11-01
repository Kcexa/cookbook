import { lighten, darken } from '@material-ui/core/styles/colorManipulator';

export interface IPaletteSet {
    primary: string;
    secondary: string;
    error: string;
    text: string;
}

declare module '@material-ui/core/styles/createMuiTheme' {
    interface PaletteOptions {}
}

export default ({ primary, secondary, error, text }: IPaletteSet) => ({
    type: 'light',
    common: {
        white: '#ffffff',
    },
    primary: {
        light: lighten(primary, 0.85),
        main: primary,
        dark: darken(primary, 0.85),
        contrastText: text,
    },
    secondary: {
        light: lighten(secondary, 0.85),
        main: secondary,
        dark: darken(secondary, 0.85),
        contrastText: text,
    },
    error: {
        light: lighten(error, 0.85),
        main: error,
        dark: darken(error, 0.85),
        contrastText: text,
    },
});
