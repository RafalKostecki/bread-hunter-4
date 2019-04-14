import React from 'react';

//Import configs
import gameConfig from '../../assets/configs/gameConfig.json';


const Help = ({ closeHelp }) => {

    return (
        <article className="help" onClick={() => closeHelp()}>
            <header className="help__header"> Help </header>
            <section className="help__box">
                <h3>Control</h3>
                <ul>
                    <li>WASD to move player</li>
                    <li>Keys: 1, 2, 3 etc to use buffs</li>
                </ul>
            </section>
            <section className="help__box">
                <h3>Buffs description</h3>
                <ul>
                    <li>{`Greeky Koste (1) - increase by 3 count of gained loaf of breads (${gameConfig.greekyKosteBuff.time})ms`}</li>
                </ul>
            </section>
        </article>
    )
}


export default Help;