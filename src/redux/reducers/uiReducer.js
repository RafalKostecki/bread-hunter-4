//Import images
import kostekCharPic from '../../assets/images/kostekCharIcon.png';
import marekCharPic from '../../assets/images/marekCharIcon.png';
import matiCharPic from '../../assets/images/matiCharIcon.png';

import uiBgPic from '../../assets/images/settingsTexture.png';

import timeIcon from '../../assets/images/timeIcon.png';
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
            pic: matiCharPic
        }
    ],
    gameInfoItems: [
        {
            name: "Time",
            value: "0:00",
            pic: timeIcon
        },
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
        },
        {
            name: "Accuracy",
            value: 0,
            pic: accuracyIcon
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