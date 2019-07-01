import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

//Import configs
import mobsConfig from '../assets/configs/mobsConfig.json';
import gameConfig from '../assets/configs/gameConfig.json';

//Import scripts
import { getRandomNum } from '../assets/scripts/maths';

//Import images
import charKostek from '../assets/images/charKostek.png'; //TODO: replace it via cashiers sprites
import charMarek from '../assets/images/charMarek.png';
import charMati from '../assets/images/charMati.png';


const usedNames = [];

const Mob = () => {
    const mobData = {
        name: '',
        speed: -1,
        preferSide: {x: '', y: ''}
    }

    useEffect(() => {
        let availableNames = mobsConfig.names;
        availableNames = availableNames.filter(name => {
            if (!usedNames.includes(name)) return name;
        });

        const randomIndex = getRandomNum(0, availableNames.length);
        const name = availableNames[randomIndex];
        usedNames.push(name);
        mobData.name = name;
    }, [])

    const mobStyles = {
        // top: `${mobPosition[mobIndex].y*gameConfig.boardFieldSize}px`,
        // left: `${mobPosition[mobIndex].x*gameConfig.boardFieldSize}px`,
        // width: `${gameConfig.boardFieldSize}px`,
        // height: `${gameConfig.boardFieldSize}px`
    }

    const mobBgStyles = {
        // backgroundImage: `url(${currentCharPic})`
    }
    
    return (
        <div className='mob' style={mobStyles}> 
            <div id='mobBg' className='mob__bg' style={mobBgStyles}> </div>
        </div>
    )
}

Mob.propTypes = {}


export default Mob;