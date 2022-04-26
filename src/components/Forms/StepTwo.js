/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
//import Select from 'react-select';
import PropTypes from 'prop-types';
import inputsStep2 from '../../data/inputsStep2.json'
import {StyledButtonWrapper} from '../styled/Button.styled'

import Form from '../Form';
import Input from '../Input';
import Button from '../Button';
import InputRadio from '../InputRadio';
import Headers from '../Headers';

const StepTwo = (props) => {
    const {onChange,nextStep, prevStep, state} = props;

    return (
        <Form title="Personal information" >
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
}

// const [selectedValue, setSelectedValue] = useState();

// const handleSelect = e => {
//     setSelectedValue(e.value);
//     onChange('gender',e.value)
// }

// const genderList = [
//     {
//         value:`men`,
//         label: `Men`
//     },
//     {
//         value:`women`,
//         label: `Women`
//     },
// ]


{/* <Select
    value={genderList.find(item => item.value === selectedValue)}
    options={genderList}
    name="gender"
    onChange={handleSelect}
/> */}