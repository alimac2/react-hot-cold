import { MAKE_GUESS } from '../actions';

const initialState = {
    guesses: [1, 50, 30],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
};



export default function gameReducer(state=initialState, action) {
    if (action.type === MAKE_GUESS ) {
        const guessArr = [...state.guesses, action.guess];
        return Object.assign({}, state, { 
            guesses: guessArr
        });
    }
//     else if (action.type === ) {
//         return Object.assign({}, state, {
            
//         });
//     }
//     else if (action.type === ) {
//         return Object.assign({}, state, {
            
//         });
//     }
    return state;
};