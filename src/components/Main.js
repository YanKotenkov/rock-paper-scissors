import React, {Component} from 'react';
import Choice from './Choice';
import Result from './Result';

const CHOICES = [
    'Scissors',
    'Paper',
    'Rock'
];

class Main extends Component {
    state = {
        resultMessage: null,
        enemyChoice: null
    }

    handleChoice = (playerChoice) => {
        const enemyChoice = Math.floor(Math.random() * (CHOICES.length));
        const resultMessage = this.getResult(playerChoice, enemyChoice);
        
        this.setState({
            resultMessage: resultMessage,
            enemyChoice: enemyChoice
        });
    }

    getResult = (playerChoice, enemyChoice) => {
        if (playerChoice === enemyChoice) {
            return 'Draw';
        }

        if (playerChoice +1 === enemyChoice || (playerChoice === 2 && enemyChoice === 0)) {
            return 'Win!';
        } else {
            return 'Loose';
        }
    }

    render() {
        return (
            <div>
                <Choice handleChoice={this.handleChoice} choices={CHOICES} enemyChoice={this.state.enemyChoice} />
                <Result message={this.state.resultMessage}/>
            </div>
        );
    }
}

export default Main;
