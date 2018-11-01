import merge from 'lodash/merge';
import * as allUiThemes from '../../theme/colors';
import { IPaletteSet } from '../../theme/palette';

interface IAction {
    type: string;
    payload: any;
}
interface IAllUiThemes {
    [key:string]: IPaletteSet;
}

export interface IThemes {
    allUiThemes: IAllUiThemes;
    currentTheme: string;
}

const initialState: IThemes = {
    allUiThemes: { ...allUiThemes },
    currentTheme: 'blueTheme',
};

export default (state = initialState, action: IAction) => {
    switch (action.type) {
        case 'CHANGE_UI_THEME':
            return merge({}, state, {
                currentTheme: action.payload.themeName,
            });
        default:
            return state;
    }
};
