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

export const changePlayerPos = position => {
    return {
        type: 'CHANGE_PLAYER_POSITION',
        position
    }
}

export const setPlayerPos = position => {
    return {
        type: 'SET_PLAYER_POSITION',
        position
    }
}

export const setBoardPos = position => {
    return {
        type: 'CHANGE_BOARD_POSITION',
        position
    }
}

export const setBoardStartPos = position => {
    return {
        type: 'SET_BOARD_START_POS',
        position
    }
}

export const setPlayerDirection = direction => {
    return {
        type: 'CHANGE_PLAYER_DIRECTION',
        direction
    }
}

export const changeBoardMatrix = matrix => {
    return {
        type: 'CHANGE_BOARD_MATRIX',
        matrix
    }
}

export const setPickingQuantity = value => {
    return {
        type: 'SET_PICKING_QUANTITY',
        value
    }
}

export const setEndStatsBool= bool => {
    return {
        type: 'SET_END_STATS_BOOL',
        bool
    }
}
