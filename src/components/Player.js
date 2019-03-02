import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Import configs
import gameConfig from '../assets/configs/gameConfig.json';


const Player = ({ playerPosition }) => {
    const playerStyles = {
        top: `${playerPosition.y*gameConfig.boardFieldSize}px`,
        left: `${playerPosition.x*gameConfig.boardFieldSize}px`,
        width: `${gameConfig.boardFieldSize}px`,
        height: `${gameConfig.boardFieldSize}px`
    }


    return (
        <div className="player" style={playerStyles}>
            P
        </div>
    )
}

Player.propTypes = {
    playerPosition: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        playerPosition: state.game.player.position,
    }
}

export default connect(mapStateToProps)(Player);