import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Import actions
import { setEndStatsBool } from '../redux/actions/gameActions';
import { setStat } from '../redux/actions/uiActions';


const EndStats = ({ setEndStatsBool, stats, setStat }) => {

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
        
        setStat(clearStats);
        setEndStatsBool(false);
    }

	return (
    <div className="endStats" onClick={closeStats}>
        <div className="endStatsWindow">
            <div className="endStatsWindow__content">
                <h2>stats</h2>
                
                <ul>
                    { generateStats() }
                </ul>
            </div>
            <div className="endStatsWindow__info">
                *To close the window, click anywhere.
            </div>
        </div>
    </div>
  )
}


EndStats.propTypes = {
    setEndStatsBool: PropTypes.func.isRequired,
    stats: PropTypes.array.isRequired
}



const mapStateToProps = state => {
    return {
        stats: state.ui.gameInfoItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setEndStatsBool: bool => {dispatch(setEndStatsBool(bool))},
        setStat: stat => {dispatch(setStat(stat))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EndStats);
