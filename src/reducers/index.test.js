import {gameReducer} from './index';
import {makeGuess, restartGame, generateAuralUpdate} from '../actions';

describe('gameReducer', () => {
    // Set up some dummy data
    const guess1 = 54;
    const guess2 = 43;
    const correctAnswer = 23;

    it('Should set the initial state when nothing is passed in', () => {
        const state = gameReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            /* game */
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = gameReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('makeGuess', () => {
        it('Should add new guess', () => {
            let state;
            state = gameReducer(state, makeGuess(guess1));
            state = gameReducer(state, makeGuess(guess2));
            expect(state).toEqual({
                guess: number
            });
        });
    });

    describe('restartGame', () => {
        it('Should reset game', () => {
            let state = {
                guesses: [],
                feedback: 'Make your guess!',
                auralStatus: '',
                correctAnswer: Math.round(Math.random() * 100) + 1
            };
            state = gameReducer(state, restartGame(/*something here*/));

            expect(state).toEqual({
                /* something here*/
                guesses: [],
                feedback: 'Make your guess!',
                auralStatus: '',
                correctAnswer: Math.round(Math.random() * 100) + 1
            });
        });
    });

    describe('generateAuralUpdate', () => {
        it('Should generate an aural update', () => {
            let state;
            state = gameReducer(state, generateAuralUpdate());
            expect(state).toEqual({
               /*something*/
            });
        });
    });




});