/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';
import { StyledInputDiv,StyledInputField,StyledLabel} from './styled/Input.styled';

// eslint-disable-next-line arrow-body-style
const Input = (props) => {
    const {type,label,name} = props;

    return (
        <StyledInputDiv>
            <StyledLabel htmlFor={type}>{label}</StyledLabel>
            <StyledInputField type={type} name={name}/>
        </StyledInputDiv>
    )
}

export default Input;

Input.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}