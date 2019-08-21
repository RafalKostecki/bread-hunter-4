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
        },
        matrix: []
    },
    player: {
        position: {
            x: 6,
            y: 5
        },
        direction: 'down'
    },
    pickingQuantity: 1,
    endStats: false,
    mob: {
        position: {
            x: 0,
            y: 0
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
                    ...state.player,
                    position: {
                        x: state.player.position.x + action.position.x,
                        y: state.player.position.y + action.position.y
                    }
                }
            }
        case 'SET_PLAYER_POSITION':
            return {
                ...state,
                player: {
                    ...state.player,
                    position: {
                        x: action.position.x,
                        y: action.position.y
                    }
                }
            }
        case 'CHANGE_BOARD_POSITION':
            return {
                ...state,
                board: {
                    ...state.board,
                    position: {
                        top: state.board.position.top + action.position.top,
                        left: state.board.position.left + action.position.left
                    }
                }
            }
        case 'CHANGE_PLAYER_DIRECTION':
            return {
                ...state,
                player: {
                    ...state.player,
                    direction: action.direction
                }
            }
        case 'CHANGE_BOARD_MATRIX': 
            return {
                ...state,
                board: {
                    ...state.board,
                    matrix: action.matrix
                }
            }
        case 'SET_PICKING_QUANTITY': 
            return {
                ...state,
                pickingQuantity: action.value
            }
        case 'SET_END_STATS_BOOL':
            return {
                ...state,
                endStats: action.bool
            }
        case 'SET_BOARD_START_POS':
            return {
                ...state,
                ...state,
                board: {
                    ...state.board,
                    position: {
                        top: action.position.top,
                        left: action.position.left
                    }
                }
            }
        case 'SET_MOB_POSITION':
            return {
                ...state,
                mob: {
                    ...state.mob,
                    position: {
                        x: action.position.x,
                        y: action.position.y
                    }
                }
            }
        default:
            return state;
    }
}

export default gameReducer;