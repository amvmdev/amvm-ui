import React from 'react';
import Dropzone from 'react-dropzone';
import Spinner from './Spinner';

const DropZone = (props) => {
    let {
        value,
        width,
        height,
        onDrop,
        onRemove,
        multiple,
        accept,
        uploading,
        ...other
    } = props;

    // width: 200px; height: 200px; border-width: 2px; border-color: rgb(102, 102, 102); border-style: dashed; border-radius: 5px;
    let dzStyle = {
        width,
        height,
        borderWidth: '2px',
        borderColor: 'rgb(102, 102, 102)',
        borderStyle: 'dashed',
        borderRadius: '5px',
        cursor: 'pointer'
    };

    let closeBtnStyle = {
        position: 'absolute',
        display: 'block',
        top: '0',
        left: '18px',
        cursor: 'pointer'
    };

    let plusStyle = {
        paddingTop: '60px',
        textAlign: 'center',
        fontSize: '18px',
        opacity: '0.5'
    };

    let spinStyle = {
        width,
        height,
        padding: '20px 30px'

    };

    return (
        <div>
            {uploading ? (
                    <div style={spinStyle}>
                        <Spinner spinning={uploading}/>
                    </div>
                ) : (

            value && value.content && value.content !== '' ? (
                <div>
                    <img src={value.content} style={{
                        maxWidth: width,
                        maxHeight: height
                    }}/>
                    <a style={closeBtnStyle} onClick={onRemove} title="Remove logo">
                        <i className="fa fa-window-close" />
                    </a>
                </div>
                ) : (
                    <Dropzone style={dzStyle} onDrop={onDrop} multiple={multiple} accept={accept}>
                        <div style={plusStyle}>
                            <i className="fa fa-plus" /> Add logo
                        </div>
                    </Dropzone>
                )
                )}
        </div>
    );
};

DropZone.propTypes = {
    disabled: React.PropTypes.bool,
    value: React.PropTypes.object,
    width: React.PropTypes.string,
    height: React.PropTypes.string,
    onDrop: React.PropTypes.func.isRequired,
    onRemove: React.PropTypes.func.isRequired,
    multiple: React.PropTypes.bool,
    accept: React.PropTypes.string,
    uploading: React.PropTypes.bool
};

DropZone.defaultProps = {
    multiple: false,
    uploading: false
};

export default DropZone;