//Import images
import kostekChar from '../assets/images/kostekCharIcon.png';
import marekChar from '../assets/images/marekCharIcon.png';
import matiChar from '../assets/images/matiCharIcon.png';


const initState = {
    currentChar: {
        name: "Kostek",
        pic: "picPath"
    },
    uiDetails: {
        background: "bgPicPath",
        characters: [
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
    }
}

export default initState;