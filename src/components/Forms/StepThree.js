/* eslint-disable consistent-return */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React,{useState} from 'react';
import PropTypes from 'prop-types';
import inputsStep3 from '../../data/inputsStep3.json'
import formValidation from '../Function/formValidation';
import {StyledButtonWrapper} from '../styled/Button.styled'

import Form from '../FormsElements/Form';
import Button from '../FormsElements/Button';
import Input from '../FormsElements/Input';


const StepThree = (props) => {
    const {onChange, nextStep, prevStep, state,clearInputs,step} = props;
    const [errors, setErrors] = useState({});

    const validation = () => {
        const err = formValidation(state,inputsStep3);
        if(Object.keys(err).length === 0){
            return true
        }
        setErrors(err);
    }

    const handleBlur = () => {
        validation();
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(validation()){
            clearInputs();
            nextStep();
        }
    }

    return (
        <Form title="Delivery Adress" onSubmit={handleSubmit} step={step}>
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
                <Button onClick={handleSubmit}>Finish</Button>
            </StyledButtonWrapper>
        </Form>
    )
}

export default StepThree;

StepThree.propTypes = {
    onChange:PropTypes.func.isRequired,
    prevStep:PropTypes.func.isRequired,
    nextStep:PropTypes.func.isRequired,
    state:PropTypes.objectOf(PropTypes.string).isRequired,
    clearInputs:PropTypes.func.isRequired,
    step:PropTypes.number.isRequired
}
