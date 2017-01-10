import React from 'react';
import FormGroupCheckbox from './FormGroupCheckbox';

const FormGroupCheckboxMeta = (props) => {
    const {
        meta, 
        onChange, 
        inline,
        ...other
    } = props;
    
    return (
        <FormGroupCheckbox
            label={meta.title}
            name={meta.name}
            checked={meta.value}
            errors={meta.errors}            
            required={meta.required}            
            onChange={onChange}
            inline={inline}            
            {...other}
        />
    );
}

FormGroupCheckboxMeta.propTypes = {
    meta: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
};

export default FormGroupCheckboxMeta;