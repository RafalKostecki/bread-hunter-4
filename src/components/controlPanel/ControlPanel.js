import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Import other components
import Header from './Header';
import Credits from './Credits';
import Characters from './Characters';
import Button from '../button.js';

//Import actions
import { runGame } from '../../redux/actions/gameActions';


const ControlPanel = ({uiBgPic, isRunGame, runGame}) => {
    const [cpIsActive, setCpIsActive] = useState(true);

    const bgStyle = {
        backgroundImage: `url(${uiBgPic})`
    }

    const hideShowCp = () => {
        setCpIsActive(!cpIsActive);

    }

    const runGameHandler = () => {
        if (isRunGame) return; //Cannot run game twice or more times
        runGame();
    }

    return (
        <React.Fragment>
            {
                cpIsActive ? (
                    <aside className="controlPanel" style={bgStyle}>
                        <div className="controlPanel__hidder" style={bgStyle}></div>
                        <div className="controlPanel__hideCpBtn" onClick={hideShowCp}></div>
                        <Header />
                        <Characters />
                        <Button text='start' modifier='start' click={runGameHandler} disable={isRunGame}></Button>
                        <Credits />
                    </aside>
                ) : (
                    <div className="controlPanel__showCpBtn" onClick={hideShowCp}></div>
                )
            }
        </React.Fragment>
    )
}


ControlPanel.propTypes = {
    uiBgPic: PropTypes.string.isRequired
}


const mapStateToProps = state => {
    return {
        isRunGame: state.game.isRunGame,
        uiBgPic: state.ui.panelBg
    }
}

const mapDispatchToProps = dispatch => {
    return {
        runGame: () => {dispatch(runGame())}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);