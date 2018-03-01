import * as types from '@constants/Types';

const INITIAL_STATE = {
    fetchingReport: false,
    reportsList: [],
    activeReport: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.TOGGLE_FETCHING_STATUS:
            return {...state, fetchingReport: !state.fetchingReport};
        case types.SET_CURRENCIES_DATA:
            return {...state, reportsList: state.reportsList.concat(action.payload)};
        case types.SET_ACTIVE_REPORT:
            return {...state, activeReport: action.payload};
        case types.DELETE_ACTIVE_REPORT:
            return {...state, activeReport: null, reportsList: state.reportsList.filter(k => k !== state.activeReport)}
        default: return state;
    }
}
