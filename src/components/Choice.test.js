import React from 'react';
import Choice from './Choice';
import {shallow, render} from 'enzyme';
import {expect} from 'chai';

describe('<Choice />', () => {
    it('renders without crashing', () => {
        shallow(<Choice choices={[]} handleChoice={() => {}} enemyChoice={1} />);
    });

    it('renders three `.choices`s', () => {
        const CHOICES = [
            'Scissors',
            'Paper',
            'Rock'
        ];
        const wrapper = render(<Choice  choices={CHOICES}/>);
        expect(wrapper.find('.choices').length).to.equal(CHOICES.length);
    });
});
