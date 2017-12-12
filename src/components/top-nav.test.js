import React from 'react';
import {shallow} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('Renders the top links initially', () => {
        const wrapper = shallow(<TopNav />);
        expect(wrapper.hasClass('clearfix')).toEqual(true);
    });

    it('Should restart the game when the New Game link is clicked', () => {
        const wrapper = shallow(<TopNav />);
        wrapper.simulate('click');
        expect(wrapper.state('editing')).toEqual(true);
    });

    /* not sure what to do here */



});