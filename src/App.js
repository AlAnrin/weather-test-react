import React, { Component } from 'react';
import DayDetail from "./DayDetail";
import { connect } from 'react-redux';
import {setWeather, setCurrentDate} from "./weatherActions";
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
        currDate: store.currDate
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setWeatherAction: weather => dispatch(setWeather(weather)),
        setCurrentDateAction: date => dispatch(setCurrentDate(date))
    }
};
class App extends Component {
    constructor(props) {
        super(props);

        this.getWeather();
    }

    getWeather = async () => {
        const api_call = await fetch(`${this.props.baseUrl}?id=${this.props.idCity}&units=metric&appid=${this.props.token}`);

        const response = await api_call.json();

        this.props.setWeatherAction(response);
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Router>
                        <div>
                            <div className="rowDays">
                                {
                                    this.props.weatherDaysData &&
                                    this.props.weatherDaysData.list &&
                                    this.props.weatherDaysData.list.map(item =>
                                        <NavLink to={item.dt_txt.split(' ')[0]}
                                              onClick={() => this.props.setCurrentDateAction(item.dt_txt.split(' ')[0])}>
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
                            <hr/>
                            <Route path="/:id" component={DayDetail}/>
                        </div>
                    </Router>
                </header>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
