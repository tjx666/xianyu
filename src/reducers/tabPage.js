import { handleActions } from 'redux-actions';
import {
    switchTabPage,
    resetTabPage
} from '../actions/tabPage';

const DEFAULT_TAB_PAGE = '咸鱼';

const handleSwitchNavbar = (navTab, { payload: { newTab } }) => {
    return newTab;
};


const handleResetNavTab = navTab => {
    return DEFAULT_TAB_PAGE;
}

export default  handleActions({
    [switchTabPage]: handleSwitchNavbar,
    [resetTabPage]: handleResetNavTab,
}, DEFAULT_TAB_PAGE);