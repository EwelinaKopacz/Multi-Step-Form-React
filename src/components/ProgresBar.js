/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = (props) => {
    const {value, max} = props;
    return (
        <div>
            <div>
                <progress value={value} max={max}/>
                <span>{(value/max) * 100}%</span>
            </div>
        </div>
    )
}

export default ProgressBar;

ProgressBar.propTypes = {
    value:PropTypes.number.isRequired,
    max:PropTypes.number
};

ProgressBar.defaultProps = {
    max:100
}


