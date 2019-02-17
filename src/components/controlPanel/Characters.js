import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Import actions 
import { setCurrentCharacter } from '../../redux/actions/gameActions';

//Import other components
import Char from './Char';


const Characters = ({currentChar, characters, setCurrentChar, isRunGame}) => {
    const chooseChar = char => {
        if (isRunGame || char.name === currentChar.name) return; 
        //cannot change char during the game || cannot change char at the same

        setCurrentChar(char);
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


const mapStateToProps = state => {
    return {
        isRunGame: state.game.isRunGame,
        currentChar: state.game.currentChar,
        characters: state.ui.characters
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentChar: char => {dispatch(setCurrentCharacter(char))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Characters);
