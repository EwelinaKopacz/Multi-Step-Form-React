/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React,{useState} from 'react';
import PropTypes from 'prop-types';
import inputsStep2 from '../../data/inputsStep2.json'
import formValidation from '../Function/formValidation';
import {StyledButtonWrapper} from '../styled/Button.styled'

import Form from '../FormsElements/Form';
import Button from '../FormsElements/Button';
import Headers from '../Others/Headers';
import Input from '../FormsElements/Input';
import InputRadio from '../FormsElements/InputRadio';


const StepTwo = (props) => {
    const {onChange,nextStep, prevStep, state} = props;
    const [errors, setErrors] = useState({});
    // const [disabled, isDisabled] = useState(true);

    // const isButtonDisabled = () => {
    //     if(Object.keys(errors).length > 0){
    //         return true
    //     }
    //     return false
    // }

    const validation = ()=> {
        setErrors(formValidation(state,inputsStep2))
        // if(isButtonDisabled()){
        //     isDisabled(false)
        // }
    }

    const handleBlur = () => {
        setErrors(formValidation(state,inputsStep2))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        validation();
    }

    return (
        <Form title="Personal information" onSubmit={handleSubmit} >
            {inputsStep2.map((input) => {
                if(input.type === "radio" && input.name === "gender"){
                    return (
                        <InputRadio
                            key={input.id}
                            {...input}
                            value={state[input.name]}
                            onChange={onChange}
                        />
                    )
                }
            })}
            {inputsStep2.map((input) => {
                if(input.type !== "radio"){
                    return (
                        <Input
                            key={input.id}
                            {...input}
                            value={state[input.name]}
                            onChange={onChange}
                            error={errors[input.name]}
                            onBlur={handleBlur}
                        />
                    )
                }
            })}
            <Headers headerH3="Interests:"/>
            {inputsStep2.map((input) => {
                if(input.type === "radio" && input.name !== "gender"){
                    return (
                        <InputRadio
                            key={input.id}
                            {...input}
                            value={state[input.name]}
                            onChange={onChange}
                        />
                    )
                }
            })}
            <StyledButtonWrapper>
                <Button onClick={prevStep}>Prev Step</Button>
                <Button onClick={nextStep}>Next Step</Button>
            </StyledButtonWrapper>
        </Form>
    )

}

export default StepTwo;

StepTwo.propTypes = {
    onChange:PropTypes.func.isRequired,
    nextStep:PropTypes.func.isRequired,
    prevStep:PropTypes.func.isRequired,
    state:PropTypes.objectOf(PropTypes.string).isRequired
}
