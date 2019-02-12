import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Import other components
import Header from './Header';
import Credits from './Credits';
import Characters from './Characters';


const ControlPanel = ({uiBgPic}) => {
    const styles = {
        backgroundImage: `url(${uiBgPic})`
    }

    return (
        <aside className="controlPanel" style={styles}>
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
        uiBgPic: state.uiDetails.background
    }
}


export default connect(mapStateToProps)(ControlPanel);