import * as types from '@constants/Types';

const INITIAL_STATE = {
    fetchingReport: false,
    reportsList: [],
    selected: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.TOGGLE_FETCHING_STATUS: return { ...state, fetchingReport: !state.fetchingReport };
        case types.SET_CURRENCIES_DATA: return { ...state, reportsList: state.reportsList.concat(action.payload) };
        case types.SELECT_REPORT: return { ...state,  selected: action.payload };
        case types.DELETE_REPORT: return { ...state, reportsList: state.reportsList.filter(v => v !== state.selected), selected: null };
        default: return state;
    }
}
