
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */

import React,{useState,useReducer} from 'react';
import formValidation from './fromValidation';
import inputsStep1 from '../data/inputsStep1.json';

import ResetStyle from './styled/Reset';
import GlobalStyle from './styled/Global';
import Form from './Form';
import Input from './Input';
import Button from './Button';
import Checkbox from './Checkbox';

const init = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
}

const reducer = (state,action) => {
    const {type, value} = action;
    return {...state, [type]:value}
}

const AppEv = () => {
    const [state, dispatch] = useReducer(reducer,init);
    const [errors, setErrors] = useState({});
    const [checked, setChecked] = useState(false);
    const [checkboxError,setCheckboxError] = useState('');

    const handleCheckbox = () => setChecked(!checked)

    const handleInputs = (nameInput,valueInput)=> {
        const action = {
            type: nameInput,
            value: valueInput,
        }
        dispatch(action)
    }

    const handleBlur = () => {
        setErrors(formValidation(state,inputsStep1))
    }

    const checkCheckbox = (checkboxValue) => {
        if(!checkboxValue){
            setCheckboxError('You have to accept terms')
        }
        else {
            setCheckboxError('')
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setErrors(formValidation(state,inputsStep1))
        checkCheckbox(checked);
    }

    return (
        <>
            <ResetStyle />
            <GlobalStyle />
            <Form title="Register" onSubmit={handleSubmit}>
                {inputsStep1.map((input) => (
                    <Input
                        key={input.id}
                        {...input}
                        value={state[input.name]}
                        error={errors[input.name]}
                        onChange={handleInputs}
                        onBlur={handleBlur}
                    />
                ))}
                <Checkbox label="I agree to the terms and conditions"
                    value={checked} type="checkbox" name="checkbox"
                    onChange={handleCheckbox}
                    error={checkboxError} />
                <Button>Next Step</Button>
            </Form>
        </>
    )
}

export default AppEv;