import React from 'react';

const Choice = ({choices, handleChoice, enemyChoice}) => {
    return (
        <div>
            <div>
                {
                    choices.map((text, value) =>
                        <button type="radio" name="choice" key={value} onClick={() => handleChoice(value)}>
                            {text}
                        </button>
                    )
                }
            </div>
            <div>
                <span>Enemy choice: {choices[enemyChoice]}</span>
            </div>
        </div>
    );
}

export default Choice;
