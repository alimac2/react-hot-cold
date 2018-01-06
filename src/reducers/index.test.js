import gameReducer from './index';
import {makeGuess, restartGame, generateAuralUpdate} from '../actions';

describe('gameReducer', () => {
    // Set up some dummy data
    const guess1 = 54;
    const guess2 = 43;
    const correctAnswer = 23;

    it('Should set the initial state when nothing is passed in', () => {
        const state = gameReducer(undefined, {type: '__UNKNOWN'});
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual("Make your guess!");
        expect(state.auralStatus).toEqual("");
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = gameReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState)
    });

    it('should make a guess', () => {
        let state = {
            guesses: [],
            feedback: '',
            correctAnswer: 100
        };
       
        state = gameReducer(state, makeGuess(4));
        expect(state.guesses).toEqual([4]);
        expect(state.feedback).toEqual("You\'re Ice Cold...");

        state = gameReducer(state, makeGuess(60));
        expect(state.guesses).toEqual([4, 60]);
        expect(state.feedback).toEqual("You\'re Cold...");

        state = gameReducer(state, makeGuess(75));
        expect(state.guesses).toEqual([4, 60, 75]);
        expect(state.feedback).toEqual("You\'re Warm.");

        state = gameReducer(state, makeGuess(98));
        expect(state.guesses).toEqual([4, 60, 75, 98]);
        expect(state.feedback).toEqual("You\'re Hot!");

        state = gameReducer(state, makeGuess(100));
        expect(state.guesses).toEqual([4, 60, 75, 98, 100]);
        expect(state.feedback).toEqual("You got it!");



    });

    it('Should start a new game', () => {
        let state = {
            guesses: [6, 20, 65, 83],
            feedback: 'You got it!',
            auralStatus: '',
            correctAnswer: 83
        };
        
        state = gameReducer(state, restartGame(correctAnswer));
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual("Make your guess!");
        expect(state.auralStatus).toEqual("");
        expect(state.correctAnswer).toEqual(correctAnswer);
        
    });

    it('Can generate aural updates', () => {
        let state = {
            guesses: [8, 43, 81, 23],
            feedback: "You're Warm."
        };
        state = gameReducer(state, generateAuralUpdate());
        expect(state.auralStatus).toEqual("Here\'s the status of the game right now: You\'re Warm. You\'ve made 4 guesses. In order of most- to least-recent, they are: 23, 81, 43, 8");
    });
});