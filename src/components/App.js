/* eslint-disable react/function-component-definition */
// ./src/components/App.js
import React from 'react';

import ResetStyle from './styled/Reset';
import GlobalStyle from './styled/Global';
import Form from './Form';
import Input from './Input';
import Button from './Button';
import Checkbox from './Checkbox';

const App = () => (
    <>
        <ResetStyle />
        <GlobalStyle />
        <Form title="Register">
            <Input label="First Name:" type="text" name="fristName"/>
            <Input label="Last Name:" type="text" name="lastName"/>
            <Input label="Email:" type="email" name="email"/>
            <Input label="Password:" type="password" name="password"/>
            <Checkbox label="I agree to the terms and conditions" type="checkbox" name="checkbox"/>
            <Button type="submit" >Go Ahead</Button>
        </Form>
    </>
);

export default App;