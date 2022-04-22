/* eslint-disable react/function-component-definition */
import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import {CheckboxWrapper,CheckboxLabel,CheckboxInput} from './styled/Checkbox.styled';

const Checkbox = (props)=>{
    const {type,name,label}=props;
    const [checked, setChecked] = useState(false);
    const handleChange =()=> setChecked(!checked)

    useEffect(()=>{
        setChecked(false)
    },[])

    return (
        <CheckboxWrapper>
            <CheckboxLabel>{label}</CheckboxLabel>
            <CheckboxInput type={type} name={name} value={checked} onChange={handleChange}/>
        </CheckboxWrapper>
    )
}

export default Checkbox;

Checkbox.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}