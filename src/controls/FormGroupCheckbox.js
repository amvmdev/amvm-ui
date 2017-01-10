import React from 'react';
import FormFieldError from './FormFieldError';
import Checkbox from './Checkbox';

const FormGroupCheckbox = (props) => {
    const {
        name, 
        label, 
        checked, 
        required, 
        inline, 
        onChange, 
        errors,
        ...other
    } = props;
    
    let wrapperClass = inline ? 'checkbox-inline' : 'checkbox';
    if (errors && errors.length > 0) {
        wrapperClass += " has-error";
    }

    return (
        <div className="form-group" {...other}>
            <div className={wrapperClass}>
                <label htmlFor={name}>                
                    <Checkbox name={name} id={name} checked={checked} onChange={onChange} />
                    {label}
                    { required === true ? <span className="required"> *</span> : null}
                </label>
                <FormFieldError msg={errors} />
            </div>
        </div>
    );
}

FormGroupCheckbox.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string,    
    required: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired,   
    errors: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array
    ])
};

export default FormGroupCheckbox;