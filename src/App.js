import React, { Component } from 'react';
import FiveDays from "./FiveDays";
import DayDetail from "./DayDetail";
import { connect } from 'react-redux';
import {setWeather} from "./weatherActions";

const mapStateToProps = store => {
    return {
        weatherData: store.data,
        token: store.token,
        baseUrl: store.baseUrl,
        idCity: store.idCity
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setWeatherAction: weather => dispatch(setWeather(weather))
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
                    <FiveDays/>
                    <DayDetail/>
                </header>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
