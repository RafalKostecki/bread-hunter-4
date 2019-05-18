import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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


const ControlPanel = ({uiBgPic, isRunGame, runGame, endStats }) => {
    const cpVisibility = document.body.clientWidth < 750 ? false : true;
    const [cpIsActive, setCpIsActive] = useState(cpVisibility);
    const [helpIsActive, setHelpIsActive] = useState(false);

    const bgStyle = {
        backgroundImage: `url(${uiBgPic})`
    }

    const runGameHandler = () => {
        if (isRunGame || endStats) return; //Cannot run game twice or more times

        runGame();
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


ControlPanel.propTypes = {
    uiBgPic: PropTypes.string.isRequired,
    isRunGame: PropTypes.bool.isRequired,
    runGame: PropTypes.func.isRequired
}


const mapStateToProps = state => {
    return {
        isRunGame: state.game.isRunGame,
        uiBgPic: state.ui.panelBg,
        endStats: state.game.endStats
    }
}

const mapDispatchToProps = dispatch => {
    return {
        runGame: () => {dispatch(runGame())}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);