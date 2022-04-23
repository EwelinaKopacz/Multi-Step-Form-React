/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { StyledInputDiv,StyledInputField,StyledLabel,StyledErrors} from './styled/Input.styled';

const Input = (props) => {
    const {type,label,onChange,errorMessage,...inputProps} = props;
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        setFocused(true);
    };

    return (
        <StyledInputDiv>
            <StyledLabel htmlFor={type}>{label}</StyledLabel>
            <StyledInputField 
                {...inputProps} 
                onChange={(e)=> onChange(e.target.name,e.target.value)}
                onFocus={handleFocus}
                focused={focused}
            />
            <StyledErrors>{errorMessage}</StyledErrors>
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