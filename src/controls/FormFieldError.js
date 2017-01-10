import React from 'react';

const styles = {
    'position': 'absolute',
    'bottom': '-28px',
    'top': 'auto',
    'zIndex': '1000'
}

function displaySingleMessage(msg) {
    return (<li className="parsley-required" key={msg}>{msg}</li>);
};

const FormFieldError = (props) => {
    const {
        msg,
        ...other
    } = props;

    if (msg && typeof (msg) === "string") {
        // this is single error message        
        return (<ul className="parsley-error-list filled" style={styles}>{displaySingleMessage(msg)}</ul>)
    } else if (msg) {
        if (msg.length > 0)
            // this is array of messages                
            return (<ul className="parsley-error-list filled" style={styles}>{msg.map(displaySingleMessage)}</ul>);
    }
    return null;
};

FormFieldError.propTypes = {
    msg: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.array
    ])
}

export default FormFieldError;