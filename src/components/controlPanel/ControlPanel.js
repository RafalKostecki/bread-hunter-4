import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Import other components
import Header from './Header';
import Credits from './Credits';
import Characters from './Characters';


const ControlPanel = ({uiBgPic}) => {
    const [cpIsActive, setCpIsActive] = useState(false);
    const [showCpBtn, setShowCpBtn] = useState(false);

    const styles = {
        backgroundImage: `url(${uiBgPic})`
    }

    const showButton = () => {
        if (!showCpBtn) setShowCpBtn(true);
    }

    const hideButton = () => {
        if (showCpBtn) setShowCpBtn(false);
    }

    return (
        <aside className="controlPanel" style={styles} onMouseOver={showButton} onMouseLeave={hideButton}>
            {
                showCpBtn ? (
                    <div className="controlPanel__showCpBtn"></div>
                ) : null
            }
            <Header />
            <Characters />
            <Credits />
        </aside>
    )
}


ControlPanel.propTypes = {
    uiBgPic: PropTypes.string.isRequired
}


const mapStateToProps = state => {
    return {
        uiBgPic: state.uiDetails.panelBg
    }
}


export default connect(mapStateToProps)(ControlPanel);