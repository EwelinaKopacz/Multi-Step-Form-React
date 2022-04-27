/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';
import { StyledInputWrapper,StyledInputField,StyledInputLabel,StyledInputErrors} from './styled/Input.styled';

const Input = (props) => {
    const {type,label,value,onChange,error,onBlur, ...inputProps} = props;

    return (
        <StyledInputWrapper>
            <StyledInputLabel htmlFor={type}>{label}</StyledInputLabel>
            <StyledInputField
                {...inputProps}
                onChange={(e)=> onChange(e.target.name,e.target.value)}
                onBlur={onBlur}
                type={type}
            />
            <StyledInputErrors>{error}</StyledInputErrors>
        </StyledInputWrapper>
    )
}

export default Input;

Input.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange:PropTypes.func.isRequired,
    onBlur:PropTypes.func.isRequired,
    value:PropTypes.string.isRequired
}

Input.defaultProps = {
    error: ''
};
