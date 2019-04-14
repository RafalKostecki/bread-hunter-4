import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Import configs
import gameConfig from '../assets/configs/gameConfig.json';

//Import scripts
import { keyDownHandler, keyUpHandler } from '../assets/scripts/playerMovement';
import { chooseBread } from '../assets/scripts/chooseBread';
import buffDispatcher from '../assets/scripts/buffs';

//Import images
import charKostek from '../assets/images/charKostek.png';
import charMarek from '../assets/images/charMarek.png';
import charMati from '../assets/images/charMati.png';
import charPiotr from '../assets/images/charPiotr.png';


const Player = ({ currentChar, playerPosition, playerDirection }) => {
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
            currentCharPic = charPiotr;
        break;
        default:
            currentCharPic = charKostek;
    }

    const playerStyles = {
        top: `${playerPosition.y*gameConfig.boardFieldSize}px`,
        left: `${playerPosition.x*gameConfig.boardFieldSize}px`,
        width: `${gameConfig.boardFieldSize}px`,
        height: `${gameConfig.boardFieldSize}px`
    }

    const playerBgStyles = {
        backgroundImage: `url(${currentCharPic})`
    }

    useEffect(() => {
        const body = document.getElementsByTagName("body")[0];

        if (!body) return;
        body.addEventListener("keydown", keyDownHandler);
        body.addEventListener("keydown", chooseBread);
        body.addEventListener("keydown", buffDispatcher);
        body.addEventListener("keyup", keyUpHandler);
    }, []);

    
    return (
        <div className='player' style={playerStyles}> 
            <div id='playerBg' className='player__bg' style={playerBgStyles}> </div>
        </div>
    )
}

Player.propTypes = {
    playerPosition: PropTypes.object.isRequired,
    currentChar: PropTypes.object.isRequired,
    playerDirection: PropTypes.string.isRequired
}


const mapStateToProps = state => {
    return {
        playerPosition: state.game.player.position,
        playerDirection: state.game.player.direction,
        currentChar: state.game.currentChar
    }
}


export default connect(mapStateToProps)(Player);