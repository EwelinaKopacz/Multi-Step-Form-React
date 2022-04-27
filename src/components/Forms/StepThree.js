/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import inputsStep3 from '../../data/inputsStep3.json'
import formValidation from '../fromValidation';
import {StyledButtonWrapper} from '../styled/Button.styled'

import Form from '../Form';
import Input from '../Input';
import Button from '../Button';

const StepThree = (props) => {
    const {onChange, prevStep, state} = props;
    const [errors, setErrors] = useState({});

    const handleBlur = () => {
        setErrors(formValidation(state,inputsStep3))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setErrors(formValidation(state,inputsStep3));
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0) {
        }
    }, [errors]);

    return (
        <Form title="Delivery Adress" onSubmit={handleSubmit}>
            {inputsStep3.map((input) => (
                <Input
                    key={input.id}
                    {...input}
                    value={state[input.name]}
                    error={errors[input.name]}
                    onChange={onChange}
                    onBlur={handleBlur}
                />
            ))}
            <StyledButtonWrapper>
                <Button onClick={prevStep}>Prev Step</Button>
                <Button >Finish</Button>
            </StyledButtonWrapper>
        </Form>
    )
}

export default StepThree;

StepThree.propTypes = {
    onChange:PropTypes.func.isRequired,
    prevStep:PropTypes.func.isRequired,
}
