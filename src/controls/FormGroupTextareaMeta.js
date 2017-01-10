import React from 'react';
import FormGroupTextarea from './FormGroupTextarea';

const FormGroupTextareaMeta = (props) => {
    const {
        meta, 
        cols, 
        rows, 
        onChange, 
        onBlur,
        ...other
    } = props;

    return (
        <FormGroupTextarea
            label={meta.title}
            name={meta.name}
            value={meta.value}
            errors={meta.errors}
            required={meta.required}
            rows={rows}
            cols={cols}
            onChange={onChange}
            onBlur={onBlur}
            {...other}
        />
    );
}

FormGroupTextareaMeta.propTypes = {
    meta: React.PropTypes.object.isRequired,
    cols: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,    
    ]),
    rows: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,    
    ]),
    onChange: React.PropTypes.func.isRequired, 
    onBlur: React.PropTypes.func,   
};

export default FormGroupTextareaMeta;