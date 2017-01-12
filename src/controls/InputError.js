import React from 'react';

const styles = {
    'position': 'absolute',
    'bottom': '-28px',
    'top': 'auto',
    'zIndex': '1000'
}
function displaySingleMessage(error) {
    return (<li className="parsley-required" key={error}>{error}</li>);
};

const InputError = ({error}) => {
    if (error && typeof (error) === "string") {
        // this is single error message        
        return (<ul className="parsley-error-list filled" style={styles}>{displaySingleMessage(error)}</ul>)
    } else if (error && error.length > 0) {
        // this is array of messages                
        return (<ul className="parsley-error-list filled" style={styles}>{error.map(displaySingleMessage)}</ul>);
    }
    return null;
};

InputError.propTypes = {
    error: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.array
    ])
}

export default InputError;