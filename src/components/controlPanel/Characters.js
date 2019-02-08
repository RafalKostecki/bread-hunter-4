import React from 'react';

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
]

const Characters = () => {
  return (
    <div role="presentation" className="characters">
        <div className="characters__char">
            <img src={kostekChar} alt="Kostek" />
        </div>
        <div className="characters__char">
            <img src={kostekChar} alt="Kostek" />
        </div>
        <div className="characters__char">
            <img src={kostekChar} alt="Kostek" />
        </div>
        <div className="characters__char">
            <img src={kostekChar} alt="Kostek" />
        </div>
    </div>
  )
}


export default Characters;
