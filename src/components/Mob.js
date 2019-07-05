import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

//Import configs
import mobsConfig from '../assets/configs/mobsConfig.json';
import gameConfig from '../assets/configs/gameConfig.json';

//Import scripts
import { getRandomNum } from '../assets/scripts/maths';

const usedNames = [];

const Mob = ({ sprite, position }) => {
    const mobData = {
        name: '',
        speed: -1,
        preferSide: {x: '', y: ''},
        sprite: sprite
    }

    useEffect(() => {
        let availableNames = mobsConfig.names;
        availableNames = availableNames.filter(name => {
            if (!usedNames.includes(name)) return name;
            return new Error('A lack of available mob names');
        });

        const randomIndex = getRandomNum(0, availableNames.length);
        const name = availableNames[randomIndex];
        usedNames.push(name);
        mobData.name = name;
    }, [])

    const mobStyles = {
        top: `${position.y*gameConfig.boardFieldSize}px`,
        left: `${position.x*gameConfig.boardFieldSize}px`,
        width: `${gameConfig.boardFieldSize}px`,
        height: `${gameConfig.boardFieldSize}px`
    }

    const mobBgStyles = {
        backgroundImage: `url(${mobData.sprite})`
    }
    
    return (
        <div className='mob' style={mobStyles}> 
            <div id='mobBg' className='mob__bg' style={mobBgStyles}> </div>
        </div>
    )
}

Mob.propTypes = {
    position: PropTypes.object.isRequired
}


export default Mob;