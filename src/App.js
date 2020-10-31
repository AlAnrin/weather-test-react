import React, { Component } from 'react';
import DayDetail from "./DayDetail";
import { connect } from 'react-redux';
import {setWeather, setCurrentDate, setCity} from "./weatherActions";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import NiceDate from "./niceDate";

const mapStateToProps = store => {
    return {
        weatherData: store.weatherData,
        token: store.token,
        baseUrl: store.baseUrl,
        idCity: store.idCity,
        weatherDaysData: store.weatherDaysData,
        iconUrl: store.iconUrl,
        currDate: store.currDate,
        Cities: store.Cities
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setCityAction: city => dispatch(setCity(city)),
        setWeatherAction: weather => dispatch(setWeather(weather)),
        setCurrentDateAction: date => dispatch(setCurrentDate(date))
    }
};
class App extends Component {
    getWeather = async (city) => {
        if (city === this.props.idCity) {
            this.props.setWeatherAction({list: []});
            this.props.setCityAction(null);
        }
        else {
            const api_call = await fetch(`${this.props.baseUrl}?id=${city}&units=metric&appid=${this.props.token}`);

            const response = await api_call.json();

            this.props.setWeatherAction(response);
            this.props.setCityAction(city);
        }
    };

    compareTxtData(curData, data) {
        const arrCur = curData.split('-');
        const arr = data.split('-');
        if (arrCur.length !== arr.length)
            return false;
        for (let i = 0; i < arr.length; i++) {
            if (arrCur[i] !== arr[i])
                return false;
        }
        return true;
    }

    setDate(item) {
        let date = item.dt_txt.split(' ')[0];
        if (this.compareTxtData(this.props.currDate, date))
            date = '';
        this.props.setCurrentDateAction(date)
    }

    render() {
        return (
            <div className="App">
                <div className="city-header">
                    {
                        this.props.Cities.map(city =>
                            <button key={city.code}
                                    className={city.code === this.props.idCity ? 'city-button-active city-button' : 'city-button'}
                                    onClick={() => this.getWeather(city.code)}>{city.name}</button>
                        )
                    }
                </div>
                <Router>
                    <div className="content">
                        <div className="rowDays">
                            {
                                this.props.weatherDaysData &&
                                this.props.weatherDaysData.list &&
                                this.props.weatherDaysData.list.map(item =>
                                    <NavLink key={item.dt} to={item.dt_txt.split(' ')[0]}
                                             onClick={() => this.setDate(item)}>
                                        <div key={item.dt} className={item.dt_txt.split(' ')[0] === this.props.currDate ? 'activeCardDay' : 'cardDay'}>
                                            <img alt={item.weather.map(w => w.main)}
                                                 src={this.props.iconUrl + item.weather.map(w => w.icon) + '.png'}/>
                                            <div className="data_temp">
                                                <NiceDate date={item.dt_txt}/>
                                                <span>{Math.round(item.main.temp)}&#8451;</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                )
                            }
                        </div>
                        <Route path="/:id" component={DayDetail}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
