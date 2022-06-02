/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import formValidation from '../Function/fromValidation';
import inputsStep1 from '../../data/inputsStep1.json';

import Form from '../FormsElements/Form';
import Button from '../FormsElements/Button';
import Input from '../FormsElements/Input';
import Checkbox from '../FormsElements/Checkbox';

const StepOne = (props) => {
    const {onChange,nextStep,state} = props;

    const [errors, setErrors] = useState({});
    const [checked, setChecked] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [checkboxError,setCheckboxError] = useState('');
    console.log('disabled',isDisabled)
    console.log('checked',checked)

    const checkCheckbox = (checkboxValue) => {
        if(checkboxValue === false){
            setCheckboxError('You have to accept terms')
        }
        else {
            setCheckboxError('')
        }
    }

    const validation = () => {
        checkCheckbox(checked);
        const err = formValidation(state,inputsStep1);
        // if(Object.keys(err) === 0 && checkboxVal === true){
        //     setIsDisabled(false) // disabled nie zmienia swojej wartości na false
        // }
        setErrors(err);
    }


    const handleCheckbox = () => {
        setChecked(!checked);
        validation()
    }

    const handleBlur = () => {
        setErrors(formValidation(state,inputsStep1))
    }

    

    const isButtonDisabled = ()=> errors.length > 0 || checked === false
    
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        validation()
        
    }

    // useEffect(()=>{
    //     validation()
    // },[checked])

    return (
        <Form title="Register" onSubmit={handleSubmit}>
            {inputsStep1.map((input) => (
                <Input
                    key={input.id}
                    {...input}
                    value={state[input.name]}
                    error={errors[input.name]}
                    onChange={onChange}
                    onBlur={handleBlur}
                />
            ))}
            <Checkbox label="I agree to the terms and conditions"
                value={checked} type="checkbox" name="checkbox"
                onChange={handleCheckbox}
                error={checkboxError} />
            <Button type="submit" onClick={nextStep} disabled={isButtonDisabled()}>Next Step</Button>
        </Form>

    )

}

export default StepOne;

StepOne.propTypes = {
    onChange:PropTypes.func.isRequired,
    nextStep:PropTypes.func.isRequired,
    state:PropTypes.objectOf(PropTypes.string).isRequired
}