import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Import other components
import Header from './Header';
import Credits from './Credits';
import Characters from './Characters';
import Button from '../button.js';


const ControlPanel = ({uiBgPic}) => {
    const [cpIsActive, setCpIsActive] = useState(true);

    const bgStyle = {
        backgroundImage: `url(${uiBgPic})`
    }

    const hideShowCp = () => {
        setCpIsActive(!cpIsActive);

    }

    const runGame = () => {
        console.log("xd")
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
                        <Button text='start' modifier='start' click={runGame}></Button>
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
        uiBgPic: state.ui.panelBg
    }
}


export default connect(mapStateToProps)(ControlPanel);