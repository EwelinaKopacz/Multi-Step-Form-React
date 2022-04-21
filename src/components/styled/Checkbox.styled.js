import styled from 'styled-components';

const CheckboxWrapper = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 55%;
`;

const CheckboxLabel = styled.p`
    font-size: 1.3rem;
    color: #595959;
`;

const CheckboxInput = styled.input`
    /* appearance: none; */
    margin: 0;
    background-color: #dde1e7;
    width: 20px;
    height:20px;
    border-radius: 5px;
    background: linear-gradient(145deg, #c7cbd0, #ecf1f7);
    box-shadow:  23px 23px 100px #5f6163,
             -23px -23px 100px #ffffff;

`;


export {CheckboxWrapper,CheckboxLabel,CheckboxInput};