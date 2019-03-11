export const setCurrentCharacter = char => {
    return {
        type: 'CHANGE_CURRENT_CHAR',
        char
    }
}

export const runGame = () => {
    return {
        type: 'RUN_GAME'
    }
}

export const stopGame = () => {
    return {
        type: 'STOP_GAME'
    }
}

export const setPlayerPos = position => {
    return {
        type: 'CHANGE_PLAYER_POSITION',
        position
    }
}

export const setBoardPos = position => {
    console.log(position)
    return {
        type: 'CHANGE_BOARD_POSITION',
        position
    }
}
