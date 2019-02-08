import React from 'react';

//Import other components
import Header from './Header';
import Credits from './Credits';


const ControlPanel = () => {
    return (
        <aside className="controlPanel">
            <Header />
            ControlPanel component works
            <Credits />
        </aside>
    )
}

export default ControlPanel;