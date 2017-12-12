import React from 'react';
import {shallow} from 'enzyme';

import InfoSection from './info-section';

describe('<InfoSection/>', () => {
    it('Renders without crashing', () => {
        shallow(<InfoSection />);
    });

    it('Renders the game information', () => {
        const wrapper = shallow(<InfoSection />);
        expect(wrapper.hasId('what')).toEqual(true);
    });

});