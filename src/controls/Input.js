import React from 'react';

const Input = (props) => {
    let {
        meta,
        type,
        refFn,
        ...sourceProps
    } = props;
    
    // this object will have all props for input html element
    let targetProps = Object.assign({}, sourceProps);
    if(typeof(sourceProps.className) === 'undefined') {
        // by default, add 'form-control' class to input except radio and checkbox
        targetProps.className =  (type !== 'radio' && type !== 'checkbox') ? 'form-control' : '';
    }


    // first get values from meta if it exists
    if (meta) {
        targetProps.name = meta.name;
        targetProps.id = meta.name;
        targetProps.value = meta.value;
        targetProps.required = meta.required;
        targetProps.maxLength = meta.maxLength;
    }    
    // other props can overwrite meta values
    targetProps.name = sourceProps.name ? sourceProps.name : targetProps.name;
    targetProps.id = sourceProps.id ? sourceProps.id : targetProps.id;
    targetProps.value = sourceProps.value ? sourceProps.value : targetProps.value;
    targetProps.required = sourceProps.required ? sourceProps.required : targetProps.required;
    targetProps.maxLength = sourceProps.maxLength ? sourceProps.maxLength : targetProps.maxLength;

   
    if (type === 'textarea') {
        return (<textarea {...targetProps} />);
    } else {
        // radio and checkbox cannot have maxLength prop
        if(type === 'radio' || type === 'checkbox') {
            delete targetProps.maxLength;
        }

        // for checkbox, see if value is boolean and set 'checked' prop if it is boolean
        if(type === 'checkbox') {
            if(typeof(targetProps.value) === 'boolean') {
                targetProps.checked = targetProps.value;
            }
        }

        return (<input {...targetProps} type={type} ref={refFn} />);
    }
}

Input.propTypes = {
    meta: React.PropTypes.object,
    type: React.PropTypes.oneOf(['text', 'checkbox', 'radio', 'password', 'textarea']),
    refFn: React.PropTypes.func,
};

Input.defaultProps = {
    type: 'text'    
};

export default Input;