import React from 'react';
import { useSelector } from 'react-redux';

//Import other components
import Item from './Item';
import Timer from './Timer';


const GameInfo = () => {
  const uiBgPic = useSelector(state => state.ui.panelBg);
  const gameInfoItems = useSelector(state => state.ui.gameInfoItems);
  const isRunGame = useSelector(state => state.game.isRunGame);

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


export default GameInfo;
