import React, { Component } from 'react';
import { connect } from 'react-redux';
import NiceDate from "./niceDate";

const mapStateToProps = store => {
    return {
        weatherData: store.weatherData,
        weatherDaysData: store.weatherDaysData,
        iconUrl: store.iconUrl,
        currDate: store.currDate,
    }
};
class FiveDays extends Component {
    render() {
        return (
            <div className="rowDays">
                {
                    this.props.currDate !== '' &&
                    this.props.weatherDaysData &&
                    this.props.weatherDaysData.list &&
                    this.props.weatherDaysData.list.map(item =>
                        <div key={item.id} className="cardDay">
                            <img alt={item.weather.map(w => w.main)}
                                 src={this.props.iconUrl + item.weather.map(w => w.icon)+'.png'}/>
                            <div className="data_temp">
                                <NiceDate date={item.dt_txt}/>
                                <span>{Math.round(item.main.temp)}&#8451;</span>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}
export default connect(mapStateToProps)(FiveDays);