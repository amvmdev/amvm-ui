import React from 'react';
import FormGroupDropdown from './FormGroupDropdown';

/*
    values parameter must be array of objects of following shape:
    { value: xxxx, text: 'yyyy'}
    Where value should be uniqure value in array
*/
const FormGroupDropdownMeta = (props) => {
    let {
        meta, 
        onChange, 
        onBlur, 
        value, 
        values, 
        optionsLabel,
        ...other
    } = props;
    
    return (
        <FormGroupDropdown        
            label={meta.title}
            name={meta.name}
            value={value}
            values={values}
            optionsLabel={optionsLabel}
            errors={meta.errors}           
            required={meta.required}            
            onChange={onChange}
            onBlur={onBlur} 
            {...other}          
        />
    );
}

FormGroupDropdownMeta.propTypes = {
    meta: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onBlur: React.PropTypes.func,
    value: React.PropTypes.string,
    values: React.PropTypes.array.isRequired,
    optionsLabel: React.PropTypes.string,
};
FormGroupDropdownMeta.defaultProps = {    
};

export default FormGroupDropdownMeta;