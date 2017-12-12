import React from 'react';
import {shallow, mount} from 'enzyme';

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
        const callback = jest.fn();
        const wrapper = mount(<TopNav onNewGame={callback} />);
        // wrapper.instance().setEditing(true);
        // wrapper.update();
        // wrapper.find('input[type="text"]').instance().value = value;
        wrapper.simulate('click');
        expect(callback).toHaveBeenCalledWith();
    });
    /* not sure what to do here. The state should  */



});