import initState from '../initState';


const gameReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CHANGE_CURRENT_CHAR':
            return {
                ...state,
                currentChar: action.char
            }
        default:
            return state;
    }
}

export default gameReducer;