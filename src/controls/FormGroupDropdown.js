import React from 'react';
import FormFieldError from './FormFieldError';
import Dropdown from './Dropdown';


/*
    values parameter must be array of objects of following shape:
    { value: xxxx, text: 'yyyy'}
    Where value should be uniqure value in array
*/
const FormGroupDropdown = (props) => {
    const {
        name,
        label,
        value,
        values,
        optionsLabel,
        required,        
        onChange,
        onBlur,
        errors,
        ...other
    } = props;


    let wrapperClass = 'form-group';
    if (errors && errors.length > 0) {
        wrapperClass += " has-error";
    }

    let options = [];
    // if there is options label, add it to the list
    if(optionsLabel) {
        // WARNING: value of 'set-null' will be processed in base-component.js
        options.push(<option value='set-null' key={-99999}>{optionsLabel}</option>);
    }
    values.forEach((value) => {
        options.push(<option value={value.value} key={value.value}>{value.text}</option>);
    });


    return (
        <div className={wrapperClass} {...other}>
            <label htmlFor={name}>{label}</label>
            {required === true ? <span className="required"> *</span> : null}
            <Dropdown value={value} name={name} onChange={onChange} onBlur={onBlur}>{options}</Dropdown>
            <FormFieldError msg={errors} />
        </div>
    );
}

FormGroupDropdown.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string,
    values: React.PropTypes.array.isRequired,
    optionsLabel: React.PropTypes.string,
    required: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired,
    onBlur: React.PropTypes.func,
    errors: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.array
    ])
};

FormGroupDropdown.defaultProps = {
};

export default FormGroupDropdown;