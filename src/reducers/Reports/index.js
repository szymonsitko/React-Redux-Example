import * as types from '@constants/Types';

const INITIAL_STATE = {
    fetchingReport: false,
    reportsList: []
}

const setSelectedReport = (state, action) => {
    let newState = {...state};
    //reset previously selected item
    newState.reportsList.forEach(
        report => {report.selected = false}
    );
    //find index item to select 
    let index = newState.reportsList.findIndex(
        report => report.created == action.id
    );
    newState.reportsList[index].selected = true;    
    return newState;
}

const deleteSelectedReport = (state, action) => {
    let newState = {...state};
    //find index item to remove 
    let index = newState.reportsList.findIndex(
        report => report.created == action.id
    );
    newState.reportsList.splice(index, 1);
    return newState;
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.TOGGLE_FETCHING_STATUS: return { ...state, fetchingReport: !state.fetchingReport }
        case types.SET_CURRENCIES_DATA: return { ...state, reportsList: state.reportsList.concat(action.payload) }
        case types.SET_SELECTED_REPORT: return setSelectedReport(state, action)
        case types.DELETE_SELECTED_REPORT: return deleteSelectedReport(state, action)
        default: return state;
    }
}
