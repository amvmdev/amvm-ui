import React from 'react';

const FormGroup = (props) => {
    const {
        success, 
        error, 
        warning, 
        children,
        ...other
    } = props;

    let className = "";
    if(success) 
        className = "has-success";
    else if(warning)
        className = "has-warning";
    else if(error)
        className = "has-error";
    
    return (
        <div className={"form-group " + className} {...other}>{children}</div>
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