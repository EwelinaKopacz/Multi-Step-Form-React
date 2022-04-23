/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';
import { StyledInputDiv,StyledInputField,StyledLabel} from './styled/Input.styled';

const Input = (props) => {
    const {type,label,value,onChange,errorMessage,...inputProps} = props;

    return (
        <StyledInputDiv>
            <StyledLabel htmlFor={type}>{label}</StyledLabel>
            <StyledInputField {...inputProps} onChange={(e)=> onChange(e.target.name,e.target.value)}/>
            <span>{errorMessage}</span>
        </StyledInputDiv>
    )
}

export default Input;

Input.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    errorMessage:PropTypes.string.isRequired
}