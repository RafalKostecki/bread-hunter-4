import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const Player = ({ playerPosition }) => {
    const playerStyles = {
        top: `${playerPosition.y*50}px`,
        left: `${playerPosition.x*50}px`
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