//Import images
import kostekCharPic from '../../assets/images/kostekCharIcon.png';
import marekCharPic from '../../assets/images/marekCharIcon.png';
import matiCharPic from '../../assets/images/matiCharIcon.png';
import uiBgPic from '../../assets/images/settingsTexture.png';


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
    ]
}



const uiReducer = (state = initState, action) => {
    switch(action.type) {
        case 'example':
            return {
                ...state
            }
        default:
            return state;
    }
}

export default uiReducer;