/* eslint-disable prefer-destructuring */
/* eslint-disable react/jsx-props-no-spreading */
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

    const stepList =
    [
        {
            component: StepOne,
            props: {
                onChange: handleInputs,
                nextStep,
                state: values,
                step,
            },
        },
        {
            component: StepTwo,
            props: {
                onChange: handleInputs,
                prevStep,
                nextStep,
                state: values,
                step,
            },
        },
        {
            component: StepThree,
            props: {
                onChange: handleInputs,
                prevStep,
                nextStep,
                state: values,
                clearInputs,
                step,
            },
        },
        {
            component: SuccessForm ,
            props: {
                onClick:goBack,
                text:'Message was send!'
            },
        }
    ]

    const Component = stepList[step-1].component;
    const props = stepList[step-1].props;

    return <Component {...props} />
}

export default App;