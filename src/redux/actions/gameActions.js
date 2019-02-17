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
