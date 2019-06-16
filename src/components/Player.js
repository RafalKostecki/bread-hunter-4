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
        body.addEventListener("keydown", buffDispatcher);
        body.addEventListener("keyup", keyUpHandler);

        if (document.body.clientWidth < 750) {
            setInterval(() => {
                chooseBread(32); //32 is a space button key code
            }, gameConfig.autoBreadGainingDelay);
        }
        else {
            body.addEventListener("keydown", chooseBread);
        }

    }, []);

    
    return (
        <div className='player' style={playerStyles}> 
            <div id='playerBg' className='player__bg' style={playerBgStyles}> </div>
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