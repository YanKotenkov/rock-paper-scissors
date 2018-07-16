import React from 'react';

const Result = ({message}) => {
    return (
        <div>
            <span style={{"text": "bold", "marginTop": "20px"}}>{message}</span>
        </div>
    );
}

export default Result;
