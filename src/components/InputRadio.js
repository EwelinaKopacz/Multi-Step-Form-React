/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';
import { StyledInputRadioDiv,StyledInputField,StyledLabel,StyledInputRadioField,StyledInputRadioLegend,StyledInputRadio,StyledInputRadioIndicator } from './styled/InputRadio.styled';

const InputRadio = (props) => {
    const {type,label,onChange,value,name, ...inputProps} = props;

    if(name === "gender") {
        return (
            <StyledInputRadioField>
                <StyledInputRadioLegend>Gender:</StyledInputRadioLegend>
                <StyledInputRadio>
                    <StyledLabel> Male</StyledLabel>
                    <input type='radio' name={name} value='male' onChange={(e)=> onChange(e.target.name,e.target.value)}/>
                </StyledInputRadio>
                <StyledInputRadio>
                    <StyledLabel> Female</StyledLabel>
                    <input type='radio' name={name} value='female' onChange={(e)=> onChange(e.target.name,e.target.value)}/>
                </StyledInputRadio>
            </StyledInputRadioField>
        )
    }
    return (
        <StyledInputRadioDiv>
            <StyledLabel htmlFor={type}>{label}</StyledLabel>
            <input
                {...inputProps}
                onChange={(e)=> onChange(e.target.name,e.target.value)}
                type={type}
                name={name}
            />
        </StyledInputRadioDiv>
    )
}

export default InputRadio;

InputRadio.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    onBlur:PropTypes.func.isRequired,
    value:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}
