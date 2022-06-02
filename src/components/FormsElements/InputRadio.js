/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { StyledInputRadioContainer,StyledInputRadioField,StyledInputRadioLegend,StyledInputRadioWrapper,StyledInputRadioInput,StyledInputRadioLabel,StyledInputRadioParent} from '../styled/InputRadio.styled';
import { StyledInputLabel} from '../styled/Input.styled';

const InputRadio = (props) => {
    const {type,label,onChange,value,name, ...inputProps} = props;
    const [select, setSelect] = useState(" ");

    const handleSelectChange = (pickedGender) => {
        setSelect(pickedGender);
        onChange('gender', select)
    };

    if(name === "gender") {
        return (
            // nie moge nalozyc ::before na pole input radio, poddaje sie, nie mam juz siły do tego;/
            <StyledInputRadioField>
                <StyledInputRadioLegend>Gender:</StyledInputRadioLegend>
                <StyledInputRadioWrapper>
                    <StyledInputRadioLabel>
                        <StyledInputRadioInput type='radio' name={name} value='male' checked={select === "male"} onChange={(e) => handleSelectChange(e.target.value)} />
                        Male</StyledInputRadioLabel>
                </StyledInputRadioWrapper>
                <StyledInputRadioWrapper>
                    <StyledInputRadioInput type='radio' name={name} value='female' checked={select === "female"} onChange={(e) => handleSelectChange(e.target.value)}  />
                    <StyledInputRadioLabel> Female</StyledInputRadioLabel>
                </StyledInputRadioWrapper>
            </StyledInputRadioField>
        )
    }
    return (
        // problem mam z tym polem, nie mogę go odkliknąć
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

