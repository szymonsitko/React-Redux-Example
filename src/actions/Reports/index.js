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

export const selectCurrencyReport = (report) => {
    return dispatch => {
        dispatch({
            type: types.SELECT_REPORT,
            payload: report
        });
    }
}

export const deleteSelectedReport = () => {
    return dispatch => {
        dispatch({
            type: types.DELETE_REPORT
        })
    }
}