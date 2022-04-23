/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';
import {CheckboxWrapper,CheckboxLabel,CheckboxInput} from './styled/Checkbox.styled';

const Checkbox = (props)=>{
    const {type,name,label,value,onChange}=props;

    return (
        <CheckboxWrapper>
            <CheckboxLabel>{label}</CheckboxLabel>
            <CheckboxInput type={type} name={name} value={value} onChange={onChange}/>
        </CheckboxWrapper>
    )
}

export default Checkbox;

Checkbox.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
}