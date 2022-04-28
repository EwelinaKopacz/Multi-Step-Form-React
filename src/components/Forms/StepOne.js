/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import formValidation from '../Function/fromValidation';
import inputsStep1 from '../../data/inputsStep1.json';

import Form from '../Forms Elements/Form';
import Button from '../Forms Elements/Button';
import Input from '../Forms Elements/Input';
import Checkbox from '../Forms Elements/Checkbox';

const StepOne = (props) => {
    const {onChange,nextStep,state} = props;

    const [errors, setErrors] = useState({});
    const [checked, setChecked] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [checkboxError,setCheckboxError] = useState('');

    const handleCheckbox = () => setChecked(!checked);

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
        setErrors(formValidation(state,inputsStep1));
        checkCheckbox(checked);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && checked === true) {
            setIsDisabled(false)
        }
    }, [errors,checked]);

    // console.log('checked', checked)
    // console.log('disabled',isDisabled)

    // tu jest problem bo jak naciśne nextStep z zaznaczonym tylko checkbox to mnie przepuści, co jest zgodne z tym co nizej bo tablica obiektow errors jest pusta
    // kolejny problem jak zaznacze checkbox - button robi sie disabled=false, a ponowne odznaczenie checbox nie powoduje ze button robi sie disabled=true
    // nie potrafie sobie z tym poradzic

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
            <Button type="submit" onClick={nextStep} disabled={isDisabled} >Next Step</Button>
        </Form>

    )

}

export default StepOne;

StepOne.propTypes = {
    onChange:PropTypes.func.isRequired,
    nextStep:PropTypes.func.isRequired,
    state:PropTypes.shape({
        step: PropTypes.number,
        firstName: PropTypes.string,
        astName:PropTypes.string,
        email:PropTypes.string,
        password:PropTypes.string,
        gender:PropTypes.string,
        birthday:PropTypes.string,
        phone:PropTypes.string,
        menFashion: PropTypes.string,
        womenFashion: PropTypes.string,
        childFashion: PropTypes.string,
        street:PropTypes.string,
        zip:PropTypes.string,
        city:PropTypes.string,
        country:PropTypes.string,
    }).isRequired
}