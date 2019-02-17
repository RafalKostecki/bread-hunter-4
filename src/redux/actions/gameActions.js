const setCurrentCharacter = char => {
    return {
        type: 'CHANGE_CURRENT_CHAR',
        char
    }
}

export default setCurrentCharacter;