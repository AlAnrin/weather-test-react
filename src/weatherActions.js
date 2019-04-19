export const SET_TOKEN = 'SET_TOKEN';
export const SET_WEATHER = 'SET_WEATHER';

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