import React from 'react';

const Dropdown = (props) => {
    const {
        meta,
        refFn,
        children,
        source,
        valueField,
        textField,
        optionsLabel,
        ...sourceProps
    } = props;

    // this object will have all props for input html element
    let targetProps = Object.assign({}, sourceProps);
    if (typeof (sourceProps.className) === 'undefined') {
        // by default, add 'form-control' class to select tag
        targetProps.className = 'form-control';
    }

    // first get values from meta if it exists
    if (meta) {
        targetProps.name = meta.name;
        targetProps.id = meta.name;
        targetProps.value = meta.value;
    }
    // other props can overwrite meta values
    targetProps.name = sourceProps.name ? sourceProps.name : targetProps.name;
    targetProps.id = sourceProps.id ? sourceProps.id : targetProps.id;
    targetProps.value = sourceProps.value ? sourceProps.value : targetProps.value;

    if (children) {
        return (<select ref={refFn} {...targetProps}>{children}</select>);
    } else if (source && valueField && textField) {
        let options = [];
        if (optionsLabel) {
            // WARNING: value of 'set-null' will be processed in base-component.js
            options.push(<option value='set-null' key={-99999}>{optionsLabel}</option>);
        }
        source.forEach(item => {
            options.push(<option value={item[valueField]} key={item[valueField]}>{item[textField]}</option>);
        });
        
        return (<select ref={refFn} {...targetProps}>{options}</select>);
    }
    else
        return null;
}

Dropdown.propTypes = {
    meta: React.PropTypes.object,
    refFn: React.PropTypes.func,
    source: React.PropTypes.array,
    valueField: React.PropTypes.string,
    textField: React.PropTypes.string,
    optionsLabel: React.PropTypes.string,
};

export default Dropdown;