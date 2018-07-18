import React from 'react';

const Choice = ({choices, handleChoice, enemyChoice}) => {
    return (
        <div>
            <div>
                {
                    choices.length ?
                    choices.map((text, value) =>
                        <button type="radio" className="choices" name="choice" key={value} onClick={() => handleChoice(value)}>
                            {text}
                        </button>
                    ) : null
                }
            </div>
            <div>
                <span>Enemy choice: {choices[enemyChoice]}</span>
            </div>
        </div>
    );
}

export default Choice;
