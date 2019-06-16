import React from 'react';

//Import scripts
import { keyDownHandler, keyUpHandler } from '../assets/scripts/playerMovement';
import { chooseBread } from '../assets/scripts/chooseBread';

const ManualMovementPanel = () => {
    return (
        <div className="manualMovement noSelect">
            <div className="manualMovement__top" 
                onTouchStart={() => keyDownHandler(87)}
                onTouchEnd={() => keyUpHandler(87)}
            >
                <div className="arrow"> </div>
            </div>
            <div className="manualMovement__right" 
                onTouchStart={() => keyDownHandler(68)}
                onTouchEnd={() => keyUpHandler(68)}
            >
                <div className="arrow arrow--right"> </div>
            </div>
            <div className="manualMovement__down" 
                onTouchStart={() => keyDownHandler(83)}
                onTouchEnd={() => keyUpHandler(83)}
            >
                <div className="arrow arrow--down"> </div>
            </div>
            <div className="manualMovement__left" 
                onTouchStart={() => keyDownHandler(65)}
                onTouchEnd={() => keyUpHandler(65)}
            >
                <div className="arrow arrow--left"> </div>
            </div>
        </div>
    )
}

export default ManualMovementPanel;