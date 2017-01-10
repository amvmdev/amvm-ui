import React from 'react';
import FormFieldError from './FormFieldError';

const Checkbox = (props) => {

    const {
        name,     
        checked,        
        onChange, 
        ...other
    } = props;    

    return (<input type="checkbox" name={name} id={name} checked={checked} onChange={onChange} {...other} />);
}

Checkbox.propTypes = {
    name: React.PropTypes.string.isRequired,
    checked: React.PropTypes.bool.isRequired,
    onChange: React.PropTypes.func.isRequired,       
};

export default Checkbox;