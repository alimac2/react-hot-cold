import { MAKE_GUESS, RESTART_GAME, GENERATE_AURAL_UPDATE } from '../actions';

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

    // if (action.type === RESTART_GAME) {
    //     return Object.assign({}, state, {
    //         guesses: [],
    //         feedback: 'Make your guess!',
    //         auralStatus: '',
    //         correctAnswer: Math.round(Math.random() * 100) + 1
    //     });
    // }

    if (action.type === GENERATE_AURAL_UPDATE) {
        const pluralize = action.guesses.length !== 1;

        let  auralStatus = `Here's the status of the game right now: [action.feedback] You've made [action.guesses.lengt] ${pluralize ? 'guesses' : 'guess'}.`;

        if (action.guesses.length > 0) {
            auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
        }

        this.setState({ auralStatus });
        return Object.assign({}, state, {
            
        });
    }


    return state;
};