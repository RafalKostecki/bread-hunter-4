//Import images
import kostekCharPic from '../assets/images/kostekCharIcon.png';
import marekCharPic from '../assets/images/marekCharIcon.png';
import matiCharPic from '../assets/images/matiCharIcon.png';
import uiBgPic from '../assets/images/settingsTexture.png';


const initState = {
    currentChar: {
        name: "Kostek",
        pic: kostekCharPic
    },
    uiDetails: {
        background: uiBgPic,
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
}

export default initState;