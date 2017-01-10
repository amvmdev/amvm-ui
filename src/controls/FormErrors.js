import React from 'react';


function displaySingleMessage(msg) {
    return (<li className="text-danger2" key={msg}>{msg}</li>);
};

const FormErrors = (props) => {
    
    const {
        msg
    } = props;


    let errorList = null;
    if (msg) {

        if (typeof (msg) === "string") {
            // this is single error message        
            //errorList = (<ul className="">{displaySingleMessage(msg)}</ul>)
            errorList = msg;

        } else if (msg.length > 0) {
            // this is array of messages
            if (msg.length > 1) {
                errorList = (<ul className="" style={{paddingLeft: '15px'}}>{msg.map(displaySingleMessage)}</ul>);
            } else {
                errorList = msg[0];
            }
        }
        //return errorList;
    }

    if (errorList) {
        return (
            <div style={{ padding: '6px 8px', backgroundColor: '#ED665F', color: '#ffffff', textShadow: 'none', borderWidth: 0 }} className="alert alert-danger">
                <div className="glyphicon glyphicon-exclamation-sign" style={{display: 'table-cell', paddingRight:'10px'}}></div>
                <div style={{paddingLeft: '5px', display: 'table-cell'}}>
                    {errorList}
                </div>
            </div>
        )
    }
    else
        return null;
};


FormErrors.propTypes = {
    msg: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.array
    ])
}

export default FormErrors;