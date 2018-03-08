import * as types from '@constants/Types';
import extendObject from '@lib/extendObject';

export const toggleFetchingStatus = () => {
    return {
        type: types.TOGGLE_FETCHING_STATUS
    }
}

export const deleteSeletedReport = () => {
    return {
        type: types.DELETE_REPORT
    }
}

export const setActiveIndex = (index) => {
    return {
        type: types.SET_ACTIVE_INDEX,
        payload: index
    }
}

export const setCurrenciesReport = (curr, data) => {
    return {
        type: types.SET_CURRENCIES_DATA,
        payload: extendObject(curr, {
            "created": Date.now(),
            "rate": data.rates[curr.secondCurrency]
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