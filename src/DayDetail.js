import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = store => {
    return {
        currDate: store.currDate,
        weatherData: store.weatherData,
        iconUrl: store.iconUrl,
    };
};

class DayDetail extends Component {
    degWind = ['с', 'с-в', 'в', 'ю-в', 'ю', 'ю-з', 'з', 'с-з', 'с'];

    render() {
        console.log(this.props);
        let list = [];
        if (this.props.currDate !== "") {
            if (this.props.weatherData && this.props.weatherData.list)
                this.props.weatherData.list.forEach(item => {
                    if (item.dt_txt.split(' ')[0] === this.props.match.params.id)
                        list.push(item);
                });
        }
        return (
            <div>
                {
                    list.map(item =>
                        <div key={item.dt} className="rowTimeDay">
                            <span className="rowTimeDayVal">{item.dt_txt.split(' ')[1].slice(0, 5)}</span>
                            <div className="spacer"/>
                            <span className="rowTimeDayVal">{Math.round(item.main.temp)}&#8451;</span>
                            <img alt={item.weather.map(w => w.main)} src={this.props.iconUrl + item.weather.map(w => w.icon)+'.png'}/>
                            <div className="spacer"/>
                            <div className="rowTimeDayVal">{item.main.humidity}%</div>
                            <div className="spacer"/>
                            <div className="rowTimeDayVal">{Math.round(item.main.grnd_level * 7.5006) / 10} мм рт.ст.</div>
                            <div className="spacer"/>
                            <div className="rowTimeDayVal">Ветер {Math.round(item.wind.speed)}м/с ({this.degWind[Math.round(item.wind.deg/45)]})</div>
                        </div>
                    )
                }
            </div>
        )
    }
}
export default connect(mapStateToProps)(DayDetail);