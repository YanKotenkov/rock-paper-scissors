import React from 'react';
import Result from './Result';
import {shallow, render} from 'enzyme';
import {expect} from 'chai';

describe('<Result />', () => {
    it('renders without crashing', () => {
        shallow(<Result message='' />);
    });

    it('renders the message', () => {
        const wrapper = render(<Result message={'Win!'} />);
        expect(wrapper.find('span.message').text()).to.equal('Win!');
    });
});
