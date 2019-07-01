import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

//Import components
import Header from './Header';
import Credits from './Credits';
import Characters from './Characters';
import Button from '../Button.js';
import Help from './Help';

//Import scripts
import { setStartPosition } from '../../assets/scripts/board';

//Import actions
import { runGame } from '../../redux/actions/gameActions';

//Import configs
import gameConfig from '../../assets/configs/gameConfig';


const ControlPanel = ({ runGame }) => {
    const cpVisibility = document.body.clientWidth < 750 ? false : true;
    const [cpIsActive, setCpIsActive] = useState(cpVisibility);
    const [helpIsActive, setHelpIsActive] = useState(false);
    const isRunGame = useSelector(state => state.game.isRunGame);
    const uiBgPic = useSelector(state => state.ui.panelBg);
    const endStats = useSelector(state => state.game.endStats);
    const dispatch = useDispatch();

    const bgStyle = {
        backgroundImage: `url(${uiBgPic})`
    }

    const runGameHandler = () => {
        if (isRunGame || endStats) return; //Cannot run game twice or more times

        dispatch(runGame())
    }

    useEffect(() => {
        setStartPosition(true, false);
    }, [cpIsActive])


    return (
        <React.Fragment>
            { 
                helpIsActive ? ReactDOM.createPortal(<Help closeHelp={() => setHelpIsActive(false)}/>, document.body) : null
            }
            {
                cpIsActive ? (
                    <aside className="controlPanel" style={bgStyle}>
                        <div className="controlPanel__hidder" style={bgStyle}></div>
                        <div className="controlPanel__hideCpBtn" onMouseOver={() => setCpIsActive(!cpIsActive)}></div>
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