import React from 'react';
import Input from './Input';
import InputError from './InputError';

const FormGroupInput = (props) => {
    let {
        meta,
        type,
        parentStyle,
        labelText,
        refFn,
        ...sourceProps
    } = props;    
    let targetProps = Object.assign({}, sourceProps);        
    
    let formGroupState = (meta && meta.errors && meta.errors.length > 0) ? 'has-error' : ''; // can be has-error, has-warning, has-success
    let htmlFor = targetProps.id ? targetProps.id : (meta && meta.name ? meta.name : '');
    let labelTextToDisplay = labelText ? labelText : (meta && meta.title ? meta.title : '');

    
    if (type === 'checkbox' || type === 'radio') {
        return (
            <div className={type + ' ' + formGroupState} style={parentStyle}>
                <label className='control-label'>
                    <Input meta={meta} type={type} refFn={refFn} {...targetProps}/> 
                    {labelTextToDisplay}
                    {(meta && meta.required) ? <span className="required"> *</span> : null}
                    <InputError error={meta ? meta.errors : null} />
                </label>
            </div>
        );
    }
    else {        
        return (
            <div className={'form-group ' + formGroupState} style={parentStyle}>
                <label htmlFor={htmlFor} className='control-label'>
                    {labelTextToDisplay}
                    {(meta && meta.required) ? <span className="required"> *</span> : null}
                </label>
                <Input meta={meta} type={type} refFn={refFn} {...targetProps} />
                <InputError error={meta ? meta.errors : null} />
            </div>
        );
    }
};

FormGroupInput.propTypes = {
    meta: React.PropTypes.object,    
    type: React.PropTypes.oneOf(['text', 'checkbox', 'radio', 'password', 'textarea']),
    labelText: React.PropTypes.string,
    parentStyle: React.PropTypes.object,
    refFn: React.PropTypes.func,
};

FormGroupInput.defaultProps = {
    type: 'text'
};

export default FormGroupInput;