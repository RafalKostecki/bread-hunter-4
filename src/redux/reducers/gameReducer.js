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
        case 'CHANGE_PLAYER_POSITION':
            return {
                ...state,
                player: {
                    position: {
                        x: state.player.position.x + action.position.x,
                        y: state.player.position.y + action.position.y
                    }
                }
            }
        case 'CHANGE_BOARD_POSITION':
            console.log("here")
            return {
                ...state,
                board: {
                    position: {
                        top: state.board.position.top + action.position.top,
                        left: state.board.position.left + action.position.left
                    }
                }
            }
        default:
            return state;
    }
}

export default gameReducer;