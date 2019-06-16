import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Import configs
import mobsConfig from '../assets/configs/mobsConfig.json';
import gameConfig from '../assets/configs/gameConfig.json';

//Import images
import charKostek from '../assets/images/charKostek.png'; //TODO: replace it via cashiers sprites
import charMarek from '../assets/images/charMarek.png';
import charMati from '../assets/images/charMati.png';


const usedNames = [];

const Mob = () => {
    useEffect(() => {

    }, [])

    const mobStyles = {
        top: `${mobPosition[mobIndex].y*gameConfig.boardFieldSize}px`,
        left: `${mobPosition[mobIndex].x*gameConfig.boardFieldSize}px`,
        width: `${gameConfig.boardFieldSize}px`,
        height: `${gameConfig.boardFieldSize}px`
    }

    const mobBgStyles = {
        backgroundImage: `url(${currentCharPic})`
    }
    
    return (
        <div className='mob' style={mobStyles}> 
            <div id='mobBg' className='player__bg' style={mobBgStyles}> </div>
        </div>
    )
}

Mob.propTypes = {}


const mapStateToProps = state => {
    return {}
}


export default connect(mapStateToProps)(Mob);