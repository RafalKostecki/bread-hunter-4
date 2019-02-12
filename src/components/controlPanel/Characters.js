import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Import other components
import Char from './Char';


const game = false; //get this data from redux store


const Characters = ({characters}) => {
    const [currentChar, setCurrentChar] = useState(characters[0]);
    console.log(characters);

    const chooseChar = char => {
        if (game || char.name === currentChar.name) return; 
        //cannot change char during the game || cannot change char at the same

        setCurrentChar(char);
    }

    useEffect(() => {
        //change current char in redux
        console.log(`U chose ${currentChar.name}`);

     });

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
    characters: PropTypes.array.isRequired
}


const mapStateToProps = state => {
    return {
        characters: state.uiDetails.characters
    }
}


export default connect(mapStateToProps)(Characters);
