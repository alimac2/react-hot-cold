import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Should render the guess count', () => {
        const wrapper = shallow(<GuessCount guessCount={not sure what goes here} />);
        expect(wrapper.find('#guessCount')).toEqual(`{guessCount}`)
    });

});