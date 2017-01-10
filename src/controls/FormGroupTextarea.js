import React from 'react';
import FormFieldError from './FormFieldError';
import Textarea from './Textarea';


const FormGroupTextarea = (props) => {
    let {
        name, 
        label, 
        value, 
        required, 
        cols, 
        rows, 
        onChange, 
        onBlur, 
        errors,
        ...other
    } = props;
    let wrapperClass = 'form-group';
    if (errors && errors.length > 0) {
        wrapperClass += " has-error";
    }

    return (
        <div className={wrapperClass} {...other}>
            <label htmlFor={name}>{label}</label>
            { required === true ? <span className="required"> *</span> : null}
            <Textarea name={name} id={name} onChange={onChange} onBlur={onBlur} value={value} className="form-control" cols={cols} rows={rows}  />
            <FormFieldError msg={errors} />
        </div>
    );
}

FormGroupTextarea.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string,
    required: React.PropTypes.bool,
    cols: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,    
    ]),
    rows: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,    
    ]),
    onChange: React.PropTypes.func.isRequired,
    onBlur: React.PropTypes.func,
    errors: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.array
    ])
};

export default FormGroupTextarea;