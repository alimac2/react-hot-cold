import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('Should restart the game when the New Game link is clicked', () => {
        const callback = jest.fn();
        const wrapper = mount(<TopNav onRestartGame={callback} />);
        const link = wrapper.find(".new");
        link.simulate('click', {preventDefault(){}});
        expect(callback).toHaveBeenCalled();
    });
    /* not sure what to do here. The state should  */
    it('Should generate an aural update', () => {
        const callback = jest.fn();
        const wrapper = mount(<TopNav onGenerateAuralUpdate={callback} />);
        const link = wrapper.find(".status-link");
        link.simulate('click', {preventDefault(){}});
        expect(callback).toHaveBeenCalled();
    });
});