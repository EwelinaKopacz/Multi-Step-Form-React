/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper,StyledRadioWrapper,StyledRadioItem,StyledRadio,StyledRadioLabel,StyledRadioLegend } from '../styled/InputRadio.styled';

const InputRadio = (props) => {
    const {type,onChange,name,label} = props;
    const [gender, setGender] = useState('');
    const [interests, setInterests] = useState('');

    const handleGender = (nameGender,pickedGender) => {
        setGender(pickedGender);
        onChange(nameGender,pickedGender)
    };

    const handleInterests = (nameInterests, pickedInterests) => {
        setInterests(pickedInterests);
        onChange(nameInterests, pickedInterests)
    }

    if(name === "gender") {
        return (
            <StyledWrapper>
                <StyledRadioLegend>{label}</StyledRadioLegend>
                <StyledRadioWrapper>
                    <StyledRadio type={type} name={name} value='male' checked={gender === 'male'} onChange={(e) => handleGender(e.target.name, e.target.value)}/>
                    <StyledRadioItem/>
                    <StyledRadioLabel>Male</StyledRadioLabel>
                </StyledRadioWrapper>
                <StyledRadioWrapper>
                    <StyledRadio type={type} name={name} value='female' checked={gender === 'female'} onChange={(e) => handleGender(e.target.name, e.target.value)}/>
                    <StyledRadioItem/>
                    <StyledRadioLabel>Female</StyledRadioLabel>
                </StyledRadioWrapper>
            </StyledWrapper>

        )
    }
    return (
        <StyledWrapper>
            <StyledRadioLegend>{label}</StyledRadioLegend>
            <StyledRadioWrapper>
                <StyledRadio type={type} name={name} value='men fashion' checked={interests === 'men fashion'} onChange={(e) => handleInterests(e.target.name, e.target.value)}/>
                <StyledRadioItem/>
                <StyledRadioLabel>Men Fashion</StyledRadioLabel>
            </StyledRadioWrapper>
            <StyledRadioWrapper>
                <StyledRadio type={type} name={name} value='women fashion' checked={interests === 'women fashion'} onChange={(e) => handleInterests(e.target.name, e.target.value)}/>
                <StyledRadioItem/>
                <StyledRadioLabel>Women Fashion</StyledRadioLabel>
            </StyledRadioWrapper>
            <StyledRadioWrapper>
                <StyledRadio type={type} name={name} value='children fashion' checked={interests === 'children fashion'} onChange={(e) => handleInterests(e.target.name, e.target.value)}/>
                <StyledRadioItem/>
                <StyledRadioLabel>Children Fashion</StyledRadioLabel>
            </StyledRadioWrapper>
        </StyledWrapper>
    )
}

export default InputRadio;

InputRadio.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    // onBlur:PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
}

