import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';

//Import components
import Header from './Header';
import Credits from './Credits';
import Characters from './Characters';
import Button from '../Button';
import Help from './Help';
import Info from '../Info'

//Import scripts
import { setStartPosition } from '../../assets/scripts/board';

//Import actions
import { runGame } from '../../redux/actions/gameActions';

//Import configs
import gameConfig from '../../assets/configs/gameConfig';


const ControlPanel = () => {
    const cpVisibility = document.body.clientWidth < 750 ? false : true;
    const [cpIsActive, setCpIsActive] = useState(cpVisibility);
    const [isStartinfo, setIsStartInfo] = useState(false);
    const [isStarted, setIsStarted] = useState(false);
    const [helpIsActive, setHelpIsActive] = useState(false);
    const isRunGame = useSelector(state => state.game.isRunGame);
    const uiBgPic = useSelector(state => state.ui.panelBg);
    const endStats = useSelector(state => state.game.endStats);
    const dispatch = useDispatch();
    const boardWindow = document.getElementById('boardWindow');

    const bgStyle = {
        backgroundImage: `url(${uiBgPic})`
    }

    const startInfo = `
        ${gameConfig.startGameDelay/1000} seconds to
        START
    `;

    const runGameHandler = () => {
        if (isRunGame || endStats || isStartinfo) return; //Cannot run game twice or more times

        setIsStartInfo(true);

        setTimeout(() => {
            setIsStartInfo(false);
            dispatch(runGame());
        }, gameConfig.startGameDelay);
    }

    useEffect(() => {
        setStartPosition(true, false);
    }, [cpIsActive])

    useEffect(() => {
        if (cpVisibility) return;

        setCpIsActive(false);  
    }, [isRunGame])

    useEffect(() => {
        if (!isRunGame) return;

        setIsStarted(true);

        setTimeout(() => {
            setIsStarted(false);
        }, gameConfig.startGameDelay);
    }, [isRunGame]);


    return (
        <React.Fragment>
            { 
                helpIsActive ? ReactDOM.createPortal(<Help closeHelp={() => setHelpIsActive(false)}/>, document.body) : null
            }
            { 
                isStartinfo ? ReactDOM.createPortal(<Info text={startInfo}/>, boardWindow) : null
            }
            { 
                isStarted ? ReactDOM.createPortal(<Info text={'START!'}/>, boardWindow) : null
            }
            {
                cpIsActive ? (
                    <aside className="controlPanel" style={bgStyle}>
                        <div className="controlPanel__hidder" style={bgStyle}></div>
                        <div className="controlPanel__hideCpBtn" onClick={() => setCpIsActive(!cpIsActive)}></div>
                        <Header />
                        <Characters />
                        <Button text='start' modifier='start' click={runGameHandler} disable={isRunGame}></Button>
                        <div role="button" 
                            className="controlPanel__help" 
                            onClick={() => setHelpIsActive(!helpIsActive)}>
                            Help
                        </div>
                        <Credits />
                        <aside className="controlPanel__version">
                            <span> { gameConfig.gameVersion } </span>
                        </aside>
                    </aside>
                ) : (
                    <div className="controlPanel__showCpBtn" onClick={() => setCpIsActive(!cpIsActive)}></div>
                )
            }
        </React.Fragment>
    )
}


export default ControlPanel;