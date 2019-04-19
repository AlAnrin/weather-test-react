export const SET_TOKEN = 'SET_TOKEN';
export const SET_WEATHER = 'SET_WEATHER';
export const SET_CURR_DATE = 'SET_CURR_DATE';

export function setToken(token) {
    return {
        type: SET_TOKEN,
        payload: token
    }
}

export function setWeather(data) {
    return {
        type: SET_WEATHER,
        payload: data
    }
}

export function setCurrentDate(date) {
    return {
        type: SET_CURR_DATE,
        payload: date
    }
}