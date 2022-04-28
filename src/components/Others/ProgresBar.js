/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';
import {StyledProgressBarContainer,StyledProgressBarWrapper,StyledProgressBarValue} from '../styled/ProgressBar.styled'

const ProgressBar = (props) => {
    const {step} = props;
    let completed = 0;
    const max = 100;

    if(step === 1){
        completed = 0;
    }
    if(step === 2){
        completed = 40;
    }
    if(step === 3){
        completed = 80;
    }

    return (
        <StyledProgressBarWrapper>
            <StyledProgressBarContainer>
                <progress value={completed} max={max} />
                <StyledProgressBarValue>{(completed/max) * 100}%</StyledProgressBarValue>
            </StyledProgressBarContainer>
        </StyledProgressBarWrapper>
    )
}

export default ProgressBar;

ProgressBar.propTypes = {
    step:PropTypes.number.isRequired,
};




