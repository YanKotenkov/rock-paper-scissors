import React from 'react';
import Main from './Main';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';

describe('<Main />', () => {
    it('renders without crashing', () => {
        shallow(<Main />);
    });

    it('allows us to set props', () => {
        const wrapper = mount(<Main enemyChoice={1} />);
        expect(wrapper.props().enemyChoice).to.equal(1);
        wrapper.setProps({enemyChoice: 0});
        expect(wrapper.props().enemyChoice).to.equal(0);
    });
});
