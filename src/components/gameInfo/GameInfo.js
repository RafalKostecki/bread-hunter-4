import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Import other components
import Item from './Item';
import Timer from './Timer';


const GameInfo = ({ uiBgPic, gameInfoItems, isRunGame }) => {
  const styles = {
    backgroundImage: `url(${uiBgPic})`
  }

  const items = gameInfoItems.map((item, id) => {
    return <Item name={item.name} value={item.value} pic={item.pic} key={id}/>
  })

  return (
    <aside className="gameInfo" style={styles}>
      <Timer isRunGame={isRunGame}/>
      {items}
    </aside>
  )
}


GameInfo.propTypes = {
  uiBgPic: PropTypes.string.isRequired,
  gameInfoItems: PropTypes.array.isRequired,
  isRunGame: PropTypes.bool.isRequired
}


const mapStateToProps = state => {
  return {
    uiBgPic: state.ui.panelBg,
    gameInfoItems: state.ui.gameInfoItems,
    isRunGame: state.game.isRunGame
  }
}


export default connect(mapStateToProps)(GameInfo);
