import {SET_TOKEN, SET_WEATHER} from './weatherActions';

const initialState = {
    weatherData: [],
    weatherDaysData: [],
    token: '3bebdda89631980556d5ee2faeee2cce',
    baseUrl: 'http://api.openweathermap.org/data/2.5/forecast',
    idCity: '498817',
    iconUrl: 'http://openweathermap.org/img/w/'
};

export function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload
            };
        case SET_WEATHER:
            let list = [];
            action.payload.list.forEach(item => {
                if (item.dt_txt.split(' ')[1].split(':')[0] === '12')
                    list.push(item);
            });
            return {
                ...state,
                weatherData: Object.assign({}, action.payload),
                weatherDaysData: Object.assign({},
                    {
                        ...action.payload,
                        list: list
                    })
            };
        default:
            return state;
    }
}