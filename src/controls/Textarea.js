import React from 'react';

const Textarea = (props) => {
    let {
        name,
        value,            
        disabled,
        maxLength,
        cols, 
        rows,
        onChange,
        onBlur,
        onKeyPress,
        refFn,
        ...other
    } = props;

    
    
    return (
        <textarea
            ref={refFn}            
            name={name}
            id={name}
            value={value}
            maxLength={maxLength}
            onChange={onChange}
            onBlur={onBlur}
            onKeyPress={onKeyPress}
            disabled={disabled}
            className="form-control"
            cols={cols}
            rows={rows}
            {...other}
            />
    );
}

Textarea.propTypes = {    
    disabled: React.PropTypes.bool,
    cols: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,    
    ]),
    rows: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,    
    ]),
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string,
    maxLength: React.PropTypes.number,    
    onChange: React.PropTypes.func.isRequired,
    onBlur: React.PropTypes.func,
    onKeyPress: React.PropTypes.func,
    refFn: React.PropTypes.func,
};

Textarea.defaultProps = {    
    disabled: false
};

export default Textarea;