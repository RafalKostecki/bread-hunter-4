import React from 'react';

//Import other components
import Header from './Header';
import Credits from './Credits';
import Characters from './Characters';


const ControlPanel = () => {
    return (
        <aside className="controlPanel">
            <Header />
            <Characters />
            ControlPanel component works
            <Credits />
        </aside>
    )
}

export default ControlPanel;