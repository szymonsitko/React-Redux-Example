import * as types from '@constants/Types';

const INITIAL_STATE = {
    fetchingReport: false,
    reportsList: [],
    activeIndex: -1
}

export default (state = INITIAL_STATE, action) => {
    console.log(action.payload)
    switch (action.type) {
        case types.TOGGLE_FETCHING_STATUS: return { ...state, fetchingReport: !state.fetchingReport }
        case types.SET_CURRENCIES_DATA: return { ...state, reportsList: state.reportsList.concat(action.payload) }
        case types.SET_ACTIVE_INDEX: return { ...state, activeIndex: action.payload }
        case types.DELETE_REPORT: return {
            ...state,
            reportsList: state.reportsList.filter((report, index) => index !== state.activeIndex),
            activeIndex: -1
        }
        default: return state;
    }
}
