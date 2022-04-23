/* eslint-disable no-useless-escape */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */

import React,{useState,useReducer} from 'react';

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
    if(type === 'resetInputs'){
        return value
    }
    return {...state, [type]:value}
}

const inputsStep1 = [

    {
        id:1,
        name:"firstName",
        type:"text",
        label:"First Name:",
        required:true,
        pattern:"^[a-zA-Z]{2,30}$",
        errorMessage: "Invalid First name"
    },
    {
        id:2,
        name:"lastName",
        type:"text",
        label:"Last Name:",
        required:true,
        pattern:"^[a-zA-Z]{2,30}$",
        errorMessage: "Invalid Last name"
    },
    {
        id:3,
        name:"email",
        type:"email",
        label:"Email:",
        required:true,
        pattern:"^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$",
        errorMessage: "Invalid Email"
    },
    {
        id:4,
        name:"password",
        type:"password",
        label:"Password:",
        required:true,
        patter:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
        errorMessage: "Invalid Password"
    }
]

const App = () => {
    const [checked, setChecked] = useState(false);
    const handlerCheckbox =()=> setChecked(!checked)
    const [state, dispatch] = useReducer(reducer,init);

    const handlerInputs = (nameInput,valueInput)=> {
        const action = {
            type: nameInput,
            value: valueInput,
        }
        dispatch(action)
    }

    return (
        <>
            <ResetStyle />
            <GlobalStyle />
            <Form title="Register">
                {inputsStep1.map((input) => (
                    <Input
                        key={input.id}
                        {...input}
                        value={state[input.name]}
                        onChange={handlerInputs}
                    />
                ))}
                <Checkbox label="I agree to the terms and conditions" value={checked} type="checkbox" name="checkbox" onChange={handlerCheckbox} />
                <Button type="submit" >Go Ahead</Button>
            </Form>
        </>
    )
}


export default App;