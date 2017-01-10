import React from 'react';
import FormGroupTextbox from './FormGroupTextbox';

const FormGroupTextboxMeta = (props) => {

    let {
        meta, 
        onChange, 
        onBlur, 
        onKeyPress,
        password, 
        refFn,
        ...other
    } = props;
    
    return (
        <FormGroupTextbox        
            label={meta.title}
            name={meta.name}
            value={meta.value}
            errors={meta.errors}
            maxLength={meta.maxLength}
            required={meta.required}            
            onChange={onChange}
            onBlur={onBlur}
            onKeyPress={onKeyPress}
            password={password}
            refFn={refFn}
            {...other}
        />
    );
}

FormGroupTextboxMeta.propTypes = {
    meta: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onBlur: React.PropTypes.func,
    password: React.PropTypes.bool,
    refFn: React.PropTypes.func
};
FormGroupTextboxMeta.defaultProps = {    
    password: false
};

export default FormGroupTextboxMeta;