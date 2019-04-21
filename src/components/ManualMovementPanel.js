import React from 'react';

//Import scripts
import { keyDownHandler, keyUpHandler } from '../assets/scripts/playerMovement';


const ManualMovementPanel = () => {
    return (
        <div className="manualMovement">
            <div className="manualMovement__top" onClick={() => keyDownHandler()}>
                <div className="arrow"> </div>
            </div>
            <div className="manualMovement__right" onClick={() => keyDownHandler()}>
                <div className="arrow arrow--right"> </div>
            </div>
            <div className="manualMovement__down" onClick={() => keyDownHandler()}>
                <div className="arrow arrow--down"> </div>
            </div>
            <div className="manualMovement__left" onClick={() => keyDownHandler()}>
                <div className="arrow arrow--left"> </div>
            </div>
        </div>
    )
}

export default ManualMovementPanel;