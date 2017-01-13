import React from 'react';
import InputError from './InputError';
import Dropdown from './Dropdown';

const FormGroupDropdown = (props) => {
    const {
        meta,
        refFn,
        children,        
        parentStyle,
        labelText,
        ...sourceProps
    } = props;
    
    let targetProps = Object.assign({}, sourceProps);     
    
    let formGroupState = (meta && meta.errors && meta.errors.length > 0) ? 'has-error' : ''; // can be has-error, has-warning, has-success
    let htmlFor = targetProps.id ? targetProps.id : (meta && meta.name ? meta.name : '');
    let labelTextToDisplay = labelText ? labelText : (meta && meta.title ? meta.title : '');


      
    return (
        <div className={'form-group ' + formGroupState} style={parentStyle}>
            <label htmlFor={htmlFor} className="control-label">{labelTextToDisplay}</label>
            {(meta && meta.required) ? <span className="required"> *</span> : null}
            <Dropdown meta={meta} refFn={refFn} {...targetProps}>{children}</Dropdown>
            <InputError error={meta ? meta.errors : null} />
        </div>
    );
}

FormGroupDropdown.propTypes = {
    meta: React.PropTypes.object,  
    source: React.PropTypes.array,
    valueField: React.PropTypes.string,
    textField: React.PropTypes.string,
    optionsLabel: React.PropTypes.string,
    labelText: React.PropTypes.string,
    parentStyle: React.PropTypes.object,
    refFn: React.PropTypes.func,
};


export default FormGroupDropdown;