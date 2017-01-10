import React from 'react';

const Dropdown = (props) => {
    const {
        name,
        value,
        disabled,
        onChange,
        onBlur,
        refFn,
        children,
        ...other
    } = props;


    return (
        <select
            ref={refFn}            
            name={name}
            id={name}
            value={value}            
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            className="form-control"
            {...other}
        >
        {children}
        </select>
    );
}

Dropdown.propTypes = {    
    disabled: React.PropTypes.bool,
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string,    
    onChange: React.PropTypes.func.isRequired,
    onBlur: React.PropTypes.func,    
    refFn: React.PropTypes.func,
};

Dropdown.defaultProps = {    
    disabled: false
};

export default Dropdown;