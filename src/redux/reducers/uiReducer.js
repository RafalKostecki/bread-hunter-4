//Import images
import kostekCharPic from '../../assets/images/kostekCharIcon.png';
import marekCharPic from '../../assets/images/marekCharIcon.png';
import matiCharPic from '../../assets/images/matiCharIcon.png';
import piotrCharPic from '../../assets/images/piotrCharIcon.png';

import uiBgPic from '../../assets/images/settingsTexture.png';
import healthIcon from '../../assets/images/healthIcon.png';
import accuracyIcon from '../../assets/images/accuracyIcon.png';
import breadStatIcon from '../../assets/images/breadStatIcon.png';
import greekyKosteIcon from '../../assets/images/greekyKosteIcon.png';
import slowDownBuffIcon from '../../assets/images/slowDownBuffIcon.png';


const initState = {
    panelBg: uiBgPic,
    characters: [
        {
            name: "Kostek",
            pic: kostekCharPic
        },
        {
            name: "Marek",
            pic: marekCharPic
        },
        {
            name: "Mati",
            pic: matiCharPic
        },
        {
            name: "Piotr",
            pic: piotrCharPic
        }
    ],
    gameInfoItems: [
        {
            name: "Lifes",
            value: 5,
            pic: healthIcon
        },
        {
            name: "Breads",
            value: 0,
            pic: breadStatIcon
        },
        {
            name: "Juice",
            value: 3,
            pic: slowDownBuffIcon
        },
        {
            name: "Rusks",
            value: 2,
            pic: greekyKosteIcon
        }
    ]
}



const uiReducer = (state = initState, action) => {
    switch(action.type) {
        case 'SET_STAT':
            return {
                ...state,
                gameInfoItems: [...action.payload]
            }
        default:
            return state;
    }
}

export default uiReducer;