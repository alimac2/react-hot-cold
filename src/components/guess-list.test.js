import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessList />);
    });

    it('Should show a list of guesses made by user', () => {
        const wrapper = shallow(<GuessList guesses={} />);
        expect(wrapper.find('li').length).toEqual(true)
    });
});