import React from 'react';
import Textbox from './Textbox';
import FormFieldError from './FormFieldError';

const TextboxMeta = ({
    meta,
    onChange,
    onBlur,
    onKeyPress,
    password,
    disabled,
    refFn,
    ...other}) => {

    return (
        <div className="form-group">
            <Textbox
                name={meta.name}
                value={meta.value}                
                maxLength={meta.maxLength}
                disabled={disabled}
                required={meta.required}
                onChange={onChange}
                onBlur={onBlur}
                onKeyPress={onKeyPress}
                password={password}
                refFn={refFn}
                {...other}
                />
            <FormFieldError msg={meta.errors} />
        </div>
    );
}

TextboxMeta.propTypes = {
    meta: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onBlur: React.PropTypes.func,
    onKeyPress: React.PropTypes.func,
    password: React.PropTypes.bool,
    refFn: React.PropTypes.func
};
TextboxMeta.defaultProps = {
    password: false
};

export default TextboxMeta;