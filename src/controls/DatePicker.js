import React, { Component } from 'react';

class DatePicker extends Component {

    render() {
        return (
            <div className="input-group">
                <span className="input-group-addon"><span className="fa fa-calendar"></span></span>
                <input type="text" className="form-control" onChange={() => {}} value={this.props.value} onClick={this.props.onClick} />
            </div>
        );
    }
}

DatePicker.propTypes = {
    onClick: React.PropTypes.func,
    value: React.PropTypes.string,
};

export default DatePicker;