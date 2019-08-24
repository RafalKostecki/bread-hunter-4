import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

//Import configs
import mobsConfig from '../assets/configs/mobsConfig.json';
import gameConfig from '../assets/configs/gameConfig.json';

//Import scripts
import { getRandomNum } from '../assets/scripts/maths';
import { dijkstra } from '../assets/scripts/dijkstra';
import { createBoardGrahp } from '../assets/scripts/boardGraph';
import { cordsToVertexId } from '../assets/scripts/maths';
import { mobMovement } from '../assets/scripts/mobMovement';
import { generatePathToDestination } from '../assets/scripts/pathToDestination';

const usedNames = [];
let canMove = true;

const Mob = ({ sprite }) => {
    const mobPosition = useSelector(state => state.game.mob.position);
    const playerPosition = useSelector(state => state.game.player.position);
    const isRunGame = useSelector(state => state.game.isRunGame);
    const boardMatrix = useSelector(state => state.game.board.matrix);

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

    useEffect(() => {
        if (!isRunGame || boardMatrix.length <= 0 || !canMove) return;
        canMove = false;
        //console.log('Dijkstra have runned');
        
        const startVertex = cordsToVertexId(mobPosition);
        const playerVertex = cordsToVertexId(playerPosition);
        const boardGraph = createBoardGrahp();
        const theShortestPaths = dijkstra(boardGraph, boardGraph.get(startVertex));  
        
        mobMovement(theShortestPaths, playerVertex);

        const pathToDestination = generatePathToDestination(theShortestPaths, playerVertex);
        setTimeout(() => {
            canMove = true;
        }, pathToDestination.length * mobsConfig.speed)
        
    }, [playerPosition])

    const mobStyles = {
        top: `${mobPosition.y*gameConfig.boardFieldSize}px`,
        left: `${mobPosition.x*gameConfig.boardFieldSize}px`,
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