/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from "react";
import PropTypes from 'prop-types';
import { StyledDivWrapper, StyledH2, StyledButton } from "../styled/SuccessForm.styled";

const SuccessForm = (props) => {
    const {onClick,text} = props;

    return (
        <StyledDivWrapper>
            <StyledH2>{text}</StyledH2>
            <StyledButton type='button' onClick={e => onClick(e)}>Go Home</StyledButton>
        </StyledDivWrapper>
    )
}

export default SuccessForm;

SuccessForm.propTypes = {
    onClick:PropTypes.func.isRequired,
    text:PropTypes.string.isRequired
}