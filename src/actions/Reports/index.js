import * as types from '@constants/Types';
import extendObject from '@lib/extendObject';

export const toggleFetchingStatus = () => {
    return {
        type: types.TOGGLE_FETCHING_STATUS
    }
}

export const setCurrenciesReport = (curr, data) => {
    return {
        type: types.SET_CURRENCIES_DATA,
        payload: extendObject(curr, {
            "created": Date.now(),
            "rate": data.rates[curr.secondCurrency],
            "selected": false
        })
    }
}

export const addCurrencyReport = (curr) => {
    return dispatch => {
        dispatch(toggleFetchingStatus());
        fetch(`https://api.fixer.io/latest?base=${curr.firstCurrency}`)
            .then((resp) => resp.json())
            .then((data) => {
                dispatch(setCurrenciesReport(curr, data));
                dispatch(toggleFetchingStatus());
            });
    }
}

export const setSelectedReport = (report) => {
    return {
        type: types.SET_SELECTED_REPORT,
        id: report.created
    }
}

export const deleteSelectedReport = (report) => {
    return {
        type: types.DELETE_SELECTED_REPORT,
        id: report.created
    }
}