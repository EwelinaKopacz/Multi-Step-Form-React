/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
/* eslint-disable react/function-component-definition */

import React,{useState} from 'react';
import StepOne from './Forms/StepOne';
import StepTwo from './Forms/StepTwo';
import StepThree from './Forms/StepThree';
import SuccessForm from './Others/SuccessForm';

const init = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    gender:'',
    birthday:'',
    phone:'',
    interests:'',
    street:``,
    zip:``,
    city:``,
    country:``,
}

const App = () => {
    const [step, setStep] = useState(1);
    const [values, setValues] = useState(init)

    const handleInputs = (name,value) =>{
        setValues({ ...values, [name]: value });
    }

    const clearInputs = ()=>{
        setValues(init)
    }

    const nextStep = () => setStep(step + 1);

    const prevStep = () => setStep(step - 1);

    const goBack = () => setStep(1)

    switch (step) {
    case 1:
        return (
            <StepOne
                onChange={handleInputs}
                nextStep={nextStep}
                state={values}
                step={step}
            />
        )
    case 2:
        return (
            <StepTwo
                onChange={handleInputs}
                prevStep={prevStep}
                nextStep={nextStep}
                state={values}
                step={step}
            />

        )
    case 3:
        return (
            <StepThree
                onChange={handleInputs}
                prevStep={prevStep}
                nextStep={nextStep}
                state={values}
                clearInputs={clearInputs}
                step={step}
            />
        )
    case 4:
        return <SuccessForm onClick={goBack} text='Message was send!' />
    default:
    }
}

export default App;