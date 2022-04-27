/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';
import { StyledInputRadioContainer,StyledInputRadioField,StyledInputRadioLegend,StyledInputRadioWrapper} from './styled/InputRadio.styled';
import { StyledInputLabel} from './styled/Input.styled';

const InputRadio = (props) => {
    const {type,label,onChange,value,name, ...inputProps} = props;

    if(name === "gender") {
        return (
            <StyledInputRadioField>
                <StyledInputRadioLegend>Gender:</StyledInputRadioLegend>
                <StyledInputRadioWrapper>
                    <StyledInputLabel> Male</StyledInputLabel>
                    <input type='radio' name={name} value='male' onChange={(e)=> onChange(e.target.name,e.target.value)}/>
                </StyledInputRadioWrapper>
                <StyledInputRadioWrapper>
                    <StyledInputLabel> Female</StyledInputLabel>
                    <input type='radio' name={name} value='female' onChange={(e)=> onChange(e.target.name,e.target.value)}/>
                </StyledInputRadioWrapper>
            </StyledInputRadioField>
        )
    }
    return (
        <StyledInputRadioContainer>
            <StyledInputLabel htmlFor={type}>{label}</StyledInputLabel>
            <input
                {...inputProps}
                onChange={(e)=> onChange(e.target.name,e.target.value)}
                type={type}
                name={name}
            />
        </StyledInputRadioContainer>
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
