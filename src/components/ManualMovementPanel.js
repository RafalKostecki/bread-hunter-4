import React from 'react';

//Import scripts
import { keyDownHandler, keyUpHandler } from '../assets/scripts/playerMovement';
import { chooseBread } from '../assets/scripts/chooseBread';

const ManualMovementPanel = () => {
    return (
        <div className="manualMovement noSelect">
            <div className="manualMovement__top" 
                onTouchStart={() => keyDownHandler('KeyW')}
                onTouchEnd={() => keyUpHandler('KeyW')}
            >
                <div className="arrow"> </div>
            </div>
            <div className="manualMovement__right" 
                onTouchStart={() => keyDownHandler('KeyD')}
                onTouchEnd={() => keyUpHandler('KeyD')}
            >
                <div className="arrow arrow--right"> </div>
            </div>
            <div className="manualMovement__down" 
                onTouchStart={() => keyDownHandler('KeyS')}
                onTouchEnd={() => keyUpHandler('KeyS')}
            >
                <div className="arrow arrow--down"> </div>
            </div>
            <div className="manualMovement__left" 
                onTouchStart={() => keyDownHandler('KeyA')}
                onTouchEnd={() => keyUpHandler('KeyA')}
            >
                <div className="arrow arrow--left"> </div>
            </div>
        </div>
    )
}

export default ManualMovementPanel;