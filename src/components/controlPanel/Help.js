import React from 'react';

//Import configs
import gameConfig from '../../assets/configs/gameConfig.json';
import buffConfig from '../../assets/configs/buffConfig.json';


const Help = ({ closeHelp }) => {

    return (
        <div className="helpWrapper">
            <article className="help" onClick={() => closeHelp()}>
                <header className="help__header"> Help </header>
                <section className="help__box">
                    <h3>Mission</h3>
                    <ul>
                        <li>Gain { gameConfig.requiredBreads } loaf of breads</li>
                        <li>Be as speed as possible</li>
                    </ul>
                </section>
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
                        <li>{`Greeky Koste (1) - increase by 3 count of gained loaf of breads (${buffConfig.greekyKoste.time / 1000} sec)`}</li>
                        <li>{`Bannana juice (2) - increase player speed (${buffConfig.juice.time / 1000} sec)`}</li>
                    </ul>
                </section>
            </article>
        </div>
    )
}


export default Help;