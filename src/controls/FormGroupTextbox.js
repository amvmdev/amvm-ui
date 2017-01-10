import React from 'react';
import FormFieldError from './FormFieldError';
import Textbox from './Textbox';

const FormGroupTextbox = (props) => {
    let {
        name, 
        label, 
        value, 
        password, 
        required, 
        maxLength, 
        onChange, 
        onBlur, 
        onKeyPress,
        errors, 
        refFn,
        ...other
    } = props;

    let wrapperClass = 'form-group';
    if (errors && errors.length > 0) {
        wrapperClass += " has-error";
    }    

    return (
        <div className={wrapperClass} {...other}>
            <label htmlFor={name}>{label}</label>
            {required === true ? <span className="required"> *</span> : null}            
            <Textbox
                refFn={refFn}
                password={password}
                name={name}
                id={name}
                value={value}
                maxLength={maxLength}
                onChange={onChange}
                onBlur={onBlur}
                onKeyPress={onKeyPress}
                className="form-control"                
                />
            <FormFieldError msg={errors} />
        </div>
    );
}

FormGroupTextbox.propTypes = {
    password: React.PropTypes.bool,
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string,
    maxLength: React.PropTypes.number,
    required: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired,
    onBlur: React.PropTypes.func,
    errors: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.array
    ]),
    refFn: React.PropTypes.func,
};

FormGroupTextbox.defaultProps = {
    password: false
};

export default FormGroupTextbox;