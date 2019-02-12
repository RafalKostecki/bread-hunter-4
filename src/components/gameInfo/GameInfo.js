import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Import other components


const GameInfo = ({uiBgPic}) => {
  const styles = {
    backgroundImage: `url(${uiBgPic})`
  }

  return (
    <aside className="gameInfo" style={styles}>
        GameInfo component works!
    </aside>
  )
}


GameInfo.propTypes = {
  uiBgPic: PropTypes.string.isRequired
}


const mapStateToProps = state => {
  return {
    uiBgPic: state.uiDetails.panelBg
  }
}


export default connect(mapStateToProps)(GameInfo);
