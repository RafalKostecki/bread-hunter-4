import React from 'react';

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


const Characters = () => {
  return (
    <div role="presentation" className="characters">
        {characters.map((char, index) => {
            return <Char 
                    name={char.name} 
                    pic={char.pic}
                    key={index}
                    />
        })}
    </div>
  )
}


export default Characters;
