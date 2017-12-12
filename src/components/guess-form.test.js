import React from 'react';
import {shallow} from 'enzyme';

import GuessForn from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });
});