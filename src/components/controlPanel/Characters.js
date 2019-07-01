import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

//Import actions 
import { setCurrentCharacter } from '../../redux/actions/gameActions';

//Import other components
import Char from './Char';


const Characters = () => {
    const dispatch = useDispatch();
    const isRunGame = useSelector(state => state.game.isRunGame);
    const currentChar = useSelector(state => state.game.currentChar);
    const characters = useSelector(state => state.ui.characters);
    

    const chooseChar = char => {
        if (isRunGame || char.name === currentChar.name) return; 
        //cannot change char during the game || cannot change char at the same

        dispatch(setCurrentCharacter(char));
    }
 
    return (
        <div role="presentation" className="characters">
            {characters.map((char, index) => {
                return (
                    <Char 
                        name={char.name} 
                        pic={char.pic}
                        selected={currentChar.name}
                        key={index}
                        chooseChar={chooseChar}
                    />
                )
            })}
        </div>
    )
}


Characters.propTypes = {
    currentChar: PropTypes.object.isRequired,
    characters: PropTypes.array.isRequired
}


export default Characters;
