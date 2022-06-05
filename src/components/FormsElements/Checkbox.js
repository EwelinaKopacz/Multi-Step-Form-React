/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';
import {CheckboxWrapper,CheckboxLabel,CheckboxInput,StyledErrors} from '../styled/Checkbox.styled';

const Checkbox = (props)=>{
    const {type,name,label,value,onChange,error}=props;

    return (
        <CheckboxWrapper>
            <CheckboxLabel>{label}</CheckboxLabel>
            <CheckboxInput type={type} name={name} value={value} onChange={onChange} />
            <StyledErrors>{error}</StyledErrors>
        </CheckboxWrapper>
    )
}

export default Checkbox;

Checkbox.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.bool,
    error: PropTypes.string
}

Checkbox.defaultProps = {
    error: '',
    value: null
};