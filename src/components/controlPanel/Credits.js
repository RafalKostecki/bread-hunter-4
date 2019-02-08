import React from 'react';

//Import images
import poytersLogo from '../../assets/images/majorIcon.png';

const Credits = () => {
  return (
    <footer className="credits">
        <div role="img" className="credits__logo">
            <img src={poytersLogo} alt="Poyters" />
        </div>
        <div role="presentation" className="credits__desc">
            <span>Created by Poyters @2019</span>
        </div>
    </footer>
  )
}


export default Credits;
