import React from 'react';

//Import images
import poytersLogo from '../../assets/images/poytersLogo.png';

const Credits = () => {
  return (
    <footer className="credits">
        <div role="img" className="credits__logo">
            <img src={poytersLogo} alt="Poyters" />
        </div>
        <div role="presentation" className="credits__desc">
            <a href="http://poyters.pl" target="blank">
              Created by Poyters @2019
            </a>
        </div>
    </footer>
  )
}


export default Credits;
