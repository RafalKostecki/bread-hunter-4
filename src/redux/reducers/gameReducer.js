//Import images
import kostekCharPic from '../../assets/images/kostekCharIcon.png';

const initState = {
    isRunGame: false,
    currentChar: {
        name: "Kostek",
        pic: kostekCharPic
    },
    board: {
        position: {
            top: 0,
            left: 0
        }
    },
    player: {
        position: {
            x: 10,
            y: 7
        }
    }
};


const gameReducer = (state = initState, action) => {
    switch(action.type) {
        case 'STOP_GAME':
            return {
                ...state,
                isRunGame: false
            }
        case 'RUN_GAME':
            return {
                ...state,
                isRunGame: true
            }
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