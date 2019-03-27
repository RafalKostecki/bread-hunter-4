import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Import other components
import Item from './Item';


const GameInfo = ({ uiBgPic, gameInfoItems }) => {
  const styles = {
    backgroundImage: `url(${uiBgPic})`
  }

  const items = gameInfoItems.map((item, id) => {
    return <Item name={item.name} value={item.value} pic={item.pic} key={id}/>
  })

  return (
    <aside className="gameInfo" style={styles}>
      {items}
    </aside>
  )
}


GameInfo.propTypes = {
  uiBgPic: PropTypes.string.isRequired,
  gameInfoItems: PropTypes.array.isRequired
}


const mapStateToProps = state => {
  return {
    uiBgPic: state.ui.panelBg,
    gameInfoItems: state.ui.gameInfoItems
  }
}


export default connect(mapStateToProps)(GameInfo);
