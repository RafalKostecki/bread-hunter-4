import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Import actions
import { setEndStatsBool } from '../redux/actions/gameActions';


const EndStats = ({ setEndStatsBool, stats }) => {

	const generateStats = () => {
		const statsToRender = stats.map((item, index) => {
			return (
				<li key={index}>{`${item.name}: ${item.value}`}</li>
			)
		});

		return statsToRender;
	}

	return (
    <div className="endStats" onClick={() => setEndStatsBool(false)}>
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
        setEndStatsBool: () => {dispatch(setEndStatsBool())}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EndStats);
