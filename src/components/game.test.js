import React from 'react';
import {shallow} from 'enzyme';
// import {makeGuess, restartGame, generateAuralUpdate} from '../actions';
import Game from './game';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });

    // it('Renders without crashing', () => {
    //     const dispatch = jest.fn();
    //     shallow(<Game dispatch={dispatch} />);
    // });


});


/* when use expect(dispatch)?*/