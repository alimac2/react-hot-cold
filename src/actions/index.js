export const MAKE_GUESS = "MAKE_GUESS";
export const makeGuess = (guess) => ({
    type: MAKE_GUESS,
    guess,
});
/* should feeback be a property of makeGuess? Where is guess being used if the state has guesses as a property?

Should all properties of the state be included in actions? what about correctAnswer?
*/


export const RESTART_GAME = "RESTART_GAME";
export const restartGame = () => ({
    type: RESTART_GAME
});
/*I'm not sure if restart game should have another property. */


export const GENERATE_AURAL_UPDATE  = "GENERATE_AURAL_UPDATE";
export const generateAuralUpdate = () => ({
    type: GENERATE_AURAL_UPDATE,
    auralStatus
});
/* should auralStatus be here? I don't understand why? */