import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Import components
import Header from './Header';
import Credits from './Credits';
import Characters from './Characters';
import Button from '../Button.js';

//Import actions
import { runGame } from '../../redux/actions/gameActions';

//Import configs
import config from '../../assets/configs/gameConfig';


const ControlPanel = ({uiBgPic, isRunGame, runGame, breads }) => {
    const cpVisibility = document.body.clientWidth < 750 ? false : true;
    const [cpIsActive, setCpIsActive] = useState(cpVisibility);

    const bgStyle = {
        backgroundImage: `url(${uiBgPic})`
    }

    const runGameHandler = () => {
        if (isRunGame || breads >= config.requiredBreads) return; //Cannot run game twice or more times

        runGame();
    }

    return (
        <React.Fragment>
            {
                cpIsActive ? (
                    <aside className="controlPanel" style={bgStyle}>
                        <div className="controlPanel__hidder" style={bgStyle}></div>
                        <div className="controlPanel__hideCpBtn" onClick={() => setCpIsActive(!cpIsActive)}></div>
                        <Header />
                        <Characters />
                        <Button text='start' modifier='start' click={runGameHandler} disable={isRunGame}></Button>
                        <Credits />
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
    breads: PropTypes.number.isRequired,
    runGame: PropTypes.func.isRequired
}


const mapStateToProps = state => {
    return {
        isRunGame: state.game.isRunGame,
        uiBgPic: state.ui.panelBg,
        breads: state.ui.gameInfoItems[1].value
    }
}

const mapDispatchToProps = dispatch => {
    return {
        runGame: () => {dispatch(runGame())}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);