import React, { useState, useEffect } from 'react';

//Import other components
import Char from './Char';

//Import images
import kostekChar from '../../assets/images/kostekCharIcon.png';
import marekChar from '../../assets/images/marekCharIcon.png';
import matiChar from '../../assets/images/matiCharIcon.png';


const characters = [
    {
        name: "Kostek",
        pic: kostekChar
    },
    {
        name: "Marek",
        pic: marekChar
    },
    {
        name: "Mati",
        pic: matiChar
    },
    {
        name: "Piotr",
        pic: matiChar
    }
];

const game = false; //get this data from redux store


const Characters = () => {
    const [currentChar, setCurrentChar] = useState(characters[0]);

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
                        key={index}
                        chooseChar={chooseChar}
                    />
                )
            })}
        </div>
    )
}


export default Characters;
