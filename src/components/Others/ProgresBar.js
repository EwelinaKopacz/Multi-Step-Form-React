/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';
import {StyledProgressBar,StyledProgressBarValue,StyledProgressBarWrapper,StyledProgressBarContainer} from '../styled/ProgressBar.styled'

const ProgressBar = (props) => {
    const {step} = props;
    const max = 100;

    const completedSteps = {'1': 0, '2': 40, '3': 80}
    const completed = completedSteps[step];

    return (
        <StyledProgressBarWrapper>
            <StyledProgressBarContainer value={completed}>
                <StyledProgressBar value={completed} max={max} />
            </StyledProgressBarContainer>
            <StyledProgressBarValue>{(completed/max) * 100}%</StyledProgressBarValue>
        </StyledProgressBarWrapper>
    )
}

export default ProgressBar;

ProgressBar.propTypes = {
    step:PropTypes.number.isRequired,
};




