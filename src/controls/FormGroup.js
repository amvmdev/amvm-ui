import React from 'react';

const FormGroup = (props) => {

    const {
        success,
        error,
        warning,
        children,
        ...sourceProps
    } = props;
    

    
    let className = "";
    if (success)
        className = "has-success";
    else if (warning)
        className = "has-warning";
    else if (error)
        className = "has-error";

    if(sourceProps.className) {
        className += ' ' + sourceProps.className;
        delete sourceProps.className;
    }

    return (
        <div className={"form-group " + className} {...sourceProps}>{children}</div>
    );
}

FormGroup.propTypes = {
    success: React.PropTypes.bool,
    warning: React.PropTypes.bool,
    error: React.PropTypes.bool
};
FormGroup.defaultProps = {
    success: false,
    warning: false,
    error: false
};

export default FormGroup;