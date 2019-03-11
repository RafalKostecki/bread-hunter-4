import React from 'react';
import PropTypes from 'prop-types';

//Import configs
import gameConfig from '../../assets/configs/gameConfig.json';


export const BoardField = ({id}) => {
    const boardFieldStyle = {
        minHeight: `${gameConfig.boardFieldSize}px`,
        minWidth: `${gameConfig.boardFieldSize}px`
    }

    return (
        <div className="boardField" id={id} style={boardFieldStyle}>
            
        </div>
    )
}

BoardField.propTypes = {
    id: PropTypes.string.isRequired
}

export default BoardField;