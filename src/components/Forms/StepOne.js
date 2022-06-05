/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import React,{useState} from 'react';
import PropTypes from 'prop-types';
import formValidation from '../Function/formValidation';
import inputsStep1 from '../../data/inputsStep1.json';

import Form from '../FormsElements/Form';
import Button from '../FormsElements/Button';
import Input from '../FormsElements/Input';
import Checkbox from '../FormsElements/Checkbox';

const StepOne = (props) => {
    const {onChange,nextStep,state} = props;
    const [errors, setErrors] = useState({});
    const [checked, setChecked] = useState(false);
    const [checkboxError,setCheckboxError] = useState('');

    const handleCheckbox = () => setChecked(!checked);

    const checkCheckbox = (checkboxValue) => {
        if(checkboxValue === false){
            setCheckboxError('You have to accept terms')
        }
        else {
            setCheckboxError('')
        }
    }

    const validation = ()=> {
        checkCheckbox(checked);
        const err = formValidation(state,inputsStep1);
        if(Object.keys(err).length === 0 && checked === true){
            return true
        }
        setErrors(err);
    }

    const handleBlur = () => {
        validation()
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(validation()){
            nextStep()
        }
    }

    return (
        <Form title="Register">
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
            <Button type="submit" onClick={handleSubmit}>Next Step</Button>
        </Form>

    )
}

export default StepOne;

StepOne.propTypes = {
    onChange:PropTypes.func.isRequired,
    nextStep:PropTypes.func.isRequired,
    state:PropTypes.objectOf(PropTypes.string).isRequired
}