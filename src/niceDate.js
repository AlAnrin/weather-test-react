import React, { Component } from 'react';

class NiceDate extends Component {
    niceDate = '';
    month = ['Янв.', 'Фев.', 'Март.', 'Апр.', 'Май.', 'Июнь.', 'Июль.', 'Авг.', 'Сент.', 'Окт.', 'Нояб.', 'Дек.'];
    constructor(props) {
        super(props);

        let date = this.props.date.split(' ')[0].split('-');

        this.niceDate = `${date[2]} ${this.month[+date[1] - 1]}`;
    }

    render() {
        return (
            <div>{this.niceDate}</div>
        )
    }
}

export default NiceDate;