/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
/* eslint-disable react/function-component-definition */

import React,{useState,useReducer, useEffect} from 'react';
import StepOne from './Forms/StepOne';
import StepTwo from './Forms/StepTwo';
import StepThree from './Forms/StepThree';
import ProgressBar from './ProgresBar';

const App = () => {
    const initState = {
        step: 1,
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
    const [completed, setCompleted] = useState(0)

    // jak sie zabezpieczyc przed ponownym dodaniem jak klikniemy w button prev state
    useEffect(()=>{
        if(step === 1){
            setCompleted(completed)
        }
        if(step === 2){
            setCompleted(completed + 40)
        }
        if(step === 3){
            setCompleted(completed + 40)
        }
    },[step])

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
                <ProgressBar value={completed} max={100}/>
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
                <ProgressBar value={completed} max={100}/>
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
                <ProgressBar value={completed} max={100}/>
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