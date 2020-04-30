import React from 'react';

const Message = (props) => {
    return (
        <div>
            {props.verify ? <h3 className="text-center message">Form is Complete</h3> : <h3 className="text-center message">Form is Incomplete!</h3>}
        </div>
    )
}

export default Message;
