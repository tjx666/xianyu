const {
    createActions
} = require('redux-actions');

const { switchTabPage, resetTabPage } = createActions({
    SWITCH_TAB_PAGE: newTab => ({
        newTab
    }),
    RESET_TAB_PAGE: () => {}
});


export {
    switchTabPage,
    resetTabPage
};