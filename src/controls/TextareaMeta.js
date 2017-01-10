import React from 'react';
import Textarea from './Textarea';
import FormFieldError from './FormFieldError';

const TextareaMeta = (props) => {
    let {
        meta,
        onChange,
        onBlur,
        onKeyPress,
        disabled,
        cols,
        rows,
        refFn,
        ...other
    } = props;

    return (
        <div>
            <Textarea
                name={meta.name}
                value={meta.value}
                maxLength={meta.maxLength}
                disabled={disabled}
                required={meta.required}
                cols={cols}
                rows={rows}
                onChange={onChange}
                onBlur={onBlur}
                onKeyPress={onKeyPress}
                refFn={refFn}
                {...other}
                />
            <FormFieldError msg={meta.errors} />
        </div>
    );
}

TextareaMeta.propTypes = {
    meta: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onBlur: React.PropTypes.func,
    onKeyPress: React.PropTypes.func,
    refFn: React.PropTypes.func
};
TextareaMeta.defaultProps = {
};

export default TextareaMeta;