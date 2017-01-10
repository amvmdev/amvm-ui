import React from 'react';

const Spinner = (props) => {
    let {
        name,
        spinning
    } = props;

    return (
        spinning ? (<i className="fa fa-spinner fa-spin fa-3x fa-fw" name={name}/>) : null
    );
};

Spinner.propTypes = {
    name: React.PropTypes.string,
    spinning: React.PropTypes.bool
};

Spinner.defaultProps = {
    spinning: false
};

export default Spinner;