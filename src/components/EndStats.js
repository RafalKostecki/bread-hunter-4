import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Import actions
import { setEndStatsBool } from '../redux/actions/gameActions';
import { setStat } from '../redux/actions/uiActions';
import { getSpecificStat } from '../assets/scripts/getSpecificStat';


const EndStats = () => {
    const stats =  useSelector(state => state.ui.gameInfoItems);
    const dispatch = useDispatch();

	const generateStats = () => {
		const statsToRender = stats.map((item, index) => {
			return (
				<li key={index}>{`${item.name}: ${item.value}`}</li>
			)
		});

		return statsToRender;
    }

    
    const closeStats = () => {
        const statsBasicValues = [5, 0, 3, 2, 0];

        const clearStats = stats.map((stat, index) => {
            return {
                ...stat,
                "value": statsBasicValues[index]
            }
        })
        
        dispatch(setStat(clearStats));
        dispatch(setEndStatsBool(false))
    }

    const getScore = () => {
        const time = document.getElementById('tmr').innerHTML.split(":");
        const initialPoints = 80000;
        const min = parseInt(time[0]) * 6000 ;
        const sec = parseInt(time[1]) * 100;
        const msec = parseInt(time[2]);
        const lifes = getSpecificStat(stats, "Lifes");
        const rusksBuff = getSpecificStat(stats, "Rusks");
        const points = initialPoints - min - sec - msec + (500*lifes.value) + (100*rusksBuff.value); 

        return points;
    }

	return (
    <div className="endStats" onClick={closeStats}>
        <div className="endStatsWindow">
            <div className="endStatsWindow__content">
                <h2>stats</h2>
                
                <ul>
                    { generateStats() }
                </ul>
                <p>Your score: { getScore() } </p>
            </div>
            <div className="endStatsWindow__info">
                *To close the window, click anywhere.
            </div>
        </div>
    </div>
  )
}


export default EndStats;
