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

    //     it('Should start a new game', () => {
    //         let state = {
    //             guesses: [],
    //             feedback: 'Make your guess!',
    //             auralStatus: '',
    //             correctAnswer: Math.round(Math.random() * 100) + 1
    //         };
    //         state = gameReducer(state, restartGame(/*something here*/));

    //         expect(state).toEqual({
    //             /* something here*/
    //             guesses: [],
    //             feedback: 'Make your guess!',
    //             auralStatus: '',
    //             correctAnswer: Math.round(Math.random() * 100) + 1
    //         });
    //     });


     // it('Can start a new game', () => {
    //     // const dispatch = jest.fn();
    //     const wrapper = shallow(<Game />); /*dispatch={dispatch}*/
    //     wrapper.setState({
    //         guesses: [1, 5, 20, 69],
    //         feedback: "You did it, man!",
    //         correctAnswer: 20
    //     });
    //     wrapper.instance().restartGame();
    //     expect(wrapper.state('guesses')).toEqual([]);
    //     expect(wrapper.state('feedback')).toEqual('Make your guess!');
    //     expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
    //     expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);




    // describe('generateAuralUpdate', () => {
    //     it('Should generate an aural update', () => {
    //         let state;
    //         state = gameReducer(state, generateAuralUpdate());
    //         expect(state).toEqual({
    //            /*something*/
    //         });
    //     });
    // });
        
    //       it('Can generate aural updates', () => {
    //           // const dispatch = jest.fn();
    //         const wrapper = shallow(<Game />); /*dispatch={dispatch}*/
        
    //         wrapper.setState({
    //           correctAnswer: 100
    //         });
        
    //         wrapper.instance().makeGuess(25);
    //         wrapper.instance().makeGuess(3);
    //         wrapper.instance().makeGuess(90);
        
    //         wrapper.instance().generateAuralUpdate();
        
    //         expect(wrapper.state('auralStatus')).toEqual('Here\'s the status of the game right now: You\'re Warm. You\'ve made 3 guesses. In order of most- to least-recent, they are: 90, 3, 25');
    //       });
    // });



});