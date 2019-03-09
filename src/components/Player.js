import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Import configs
import gameConfig from '../assets/configs/gameConfig.json';

//Import scripts
import { keyDownHandler, keyUpHandler } from '../assets/scripts/playerMovement';

//Import images
import charKostek from '../assets/images/charKostek.png';
import charMarek from '../assets/images/charMarek.png';
import charMati from '../assets/images/charMati.png';


const Player = ({ currentChar, playerPosition }) => {
    let currentCharPic;

    switch(currentChar.name) {
        case 'Kostek':
            currentCharPic = charKostek;
        break;
        case 'Marek':
            currentCharPic = charMarek;
        break;
        case 'Mati':
            currentCharPic = charMati;
        break;
        case 'Piotr':
            currentCharPic = charMati;
        break;
        default:
            currentCharPic = charKostek;
    }

    console.log("playerPositionRedux", playerPosition);
    const playerStyles = {
        top: `${playerPosition.y*gameConfig.boardFieldSize}px`,
        left: `${playerPosition.x*gameConfig.boardFieldSize}px`,
        width: `${gameConfig.boardFieldSize}px`,
        height: `${gameConfig.boardFieldSize}px`,
        backgroundImage: `url(${currentCharPic})`,
        backgroundPosition: "-50px 0"
    }

    useEffect(() => {
        const body = document.getElementsByTagName("body");

        if (body[0]) body[0].addEventListener("keydown", keyDownHandler);
        if (body[0]) body[0].addEventListener("keyup", keyUpHandler);
    })

    
    return (
        <div className="player" style={playerStyles}>
            P
        </div>
    )
}

Player.propTypes = {
    playerPosition: PropTypes.object.isRequired,
    currentChar: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        playerPosition: state.game.player.position,
        currentChar: state.game.currentChar
    }
}

export default connect(mapStateToProps)(Player);