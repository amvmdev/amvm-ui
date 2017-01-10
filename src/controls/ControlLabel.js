import React from 'react';
const ControlLabelMeta = (props) => {
    const {
        meta,    
        ...other
    } = props;

    return (
        <label className="control-label" htmlFor={meta.name} {...other}>
            {meta.title}
            {meta.required === true ? <span className="required"> *</span> : null} 
        </label>
    );
}

ControlLabelMeta.propTypes = {
    meta: React.PropTypes.object.isRequired    
};
export default ControlLabelMeta;