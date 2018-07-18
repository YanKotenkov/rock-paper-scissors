import React from 'react';

const Result = ({message}) => {
    return (
        <div>
            <span style={{"text": "bold", "marginTop": "20px"}} className="message">{message}</span>
        </div>
    );
}

export default Result;
