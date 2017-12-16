import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForn from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should fire the onMakeGuess callback when user submits form', () => {
        const callback = jest.fn();
        const wrapper = shallow(<GuessForm onMakeGuess={not sure what goes here} />);
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalled();
    });



});