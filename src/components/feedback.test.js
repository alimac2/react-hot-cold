import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback />);
    });

    it('Should render feedback to user', () => {
        const TEST_FEEDBACK ="This is a test";
        const wrapper = shallow(<Feedback feedback={TEST_FEEDBACK} />);
        expect(wrapper.contains(TEST_FEEDBACK)).toEqual(true);
    });

});