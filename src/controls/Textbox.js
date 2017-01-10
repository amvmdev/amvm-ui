import React from 'react';

const Textbox = (props) => {
    let {
        name,
        value,
        password,        
        disabled,
        maxLength,
        onChange,
        onBlur,
        onKeyPress,
        refFn,
        ...other
    } = props;

    let type = password === true ? 'password' : 'text';
    
    return (
        <input
            ref={refFn}
            type={type}
            name={name}
            id={name}
            value={value}
            maxLength={maxLength}
            onChange={onChange}
            onBlur={onBlur}
            onKeyPress={onKeyPress}
            disabled={disabled}
            className="form-control"
            {...other}
            />
    );
}

Textbox.propTypes = {
    password: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string,
    maxLength: React.PropTypes.number,    
    onChange: React.PropTypes.func.isRequired,
    onBlur: React.PropTypes.func,
    onKeyPress: React.PropTypes.func,
    refFn: React.PropTypes.func,
};

Textbox.defaultProps = {
    password: false,
    disabled: false
};

export default Textbox;