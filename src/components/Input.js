/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';
import { StyledInputDiv,StyledInputField,StyledLabel,StyledErrors} from './styled/Input.styled';

const Input = (props) => {
    const {type,label,onChange,error,onBlur, ...inputProps} = props;

    return (
        <StyledInputDiv>
            <StyledLabel htmlFor={type}>{label}</StyledLabel>
            <StyledInputField
                {...inputProps}
                onChange={(e)=> onChange(e.target.name,e.target.value)}
                onBlur={onBlur}
            />
            <StyledErrors>{error}</StyledErrors>
        </StyledInputDiv>
    )
}

export default Input;

Input.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange:PropTypes.func.isRequired,
    onBlur:PropTypes.func.isRequired,
}

Input.defaultProps = {
    error: ''
};
