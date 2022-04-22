/* eslint-disable react/function-component-definition */
import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { StyledInputDiv,StyledInputField,StyledLabel} from './styled/Input.styled';

// eslint-disable-next-line arrow-body-style
const Input = (props) => {
    const {type,label,name} = props;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <StyledInputDiv>
            <StyledLabel htmlFor={type}>{label}</StyledLabel>
            <StyledInputField type={type} name={name} onChange={e=>setFirstName(e.target.value)}/>
        </StyledInputDiv>
    )
}

export default Input;

Input.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}