/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
/* eslint-disable react/function-component-definition */

import React,{useState,useReducer} from 'react';
import StepOne from './Forms/StepOne';
import StepTwo from './Forms/StepTwo';
import StepThree from './Forms/StepThree';
import ProgressBar from './Others/ProgresBar';

const App = () => {
    const initState = {
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        gender:'',
        birthday:'',
        phone:'',
        menFashion: ``,
        womenFashion: ``,
        childFashion: ``,
        street:``,
        zip:``,
        city:``,
        country:``,
    }

    const reducer = (state,action) => {
        const {type, value} = action;
        return {...state, [type]:value}
    }

    const [step, setStep] = useState(1);
    const [state, dispatch] = useReducer(reducer,initState);

    const handleInputs = (nameInput,valueInput)=> {
        const action = {
            type: nameInput,
            value: valueInput,
        }
        dispatch(action)
    }

    const nextStep = () => setStep(step + 1);

    const prevStep = () => setStep(step - 1);

    switch (step) {
    case 1:
        return (
            <>
                <ProgressBar step={step}/>
                <StepOne
                    onChange={handleInputs}
                    nextStep={nextStep}
                    state={state}
                />
            </>
        )
    case 2:
        return (
            <>
                <ProgressBar step={step}/>
                <StepTwo
                    onChange={handleInputs}
                    prevStep={prevStep}
                    nextStep={nextStep}
                    state={state}
                />
            </>
        )
    case 3:
        return (
            <>
                <ProgressBar step={step}/>
                <StepThree
                    onChange={handleInputs}
                    prevStep={prevStep}
                    state={state}
                />
            </>
        )
    default:
    }
}

export default App;