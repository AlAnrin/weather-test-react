import {SET_TOKEN, SET_WEATHER, SET_CURR_DATE, SET_CITY} from './weatherActions';

const Cities = [
    {
        code: '2643741',
        name: 'Лондон'
    },
    {
        code: '498817',
        name: 'Санкт-Петербург'
    },
    {
        code: '524894',
        name: 'Москва'
    },
    {
        code: '2968815',
        name: 'Париж'
    },
    {
        code: '292223',
        name: 'Дубаи'
    },
    {
        code: '491422',
        name: 'Сочи'
    },
    {
        code: '2673722',
        name: 'Стокгольм'
    }
]

const initialState = {
    weatherData: [],
    weatherDaysData: [],
    token: '3bebdda89631980556d5ee2faeee2cce',
    baseUrl: 'https://api.openweathermap.org/data/2.5/forecast',
    idCity: null,
    iconUrl: 'https://openweathermap.org/img/w/',
    currDate: '',
    Cities: Cities
};

export function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload
            };
        case SET_CITY:
            return {
                ...state,
                idCity: action.payload
            };
        case SET_WEATHER:
            let list = [];
            action.payload.list.forEach(item => {
                if (+item.dt_txt.split(' ')[1].split(':')[0] >= 12 && !list.find(x => x.dt_txt.split(' ')[0] === item.dt_txt.split(' ')[0]))
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
        case SET_CURR_DATE:
            return {
                ...state,
                currDate: action.payload
            };
        default:
            return state;
    }
}