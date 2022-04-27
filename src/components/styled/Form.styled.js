import styled from 'styled-components';

const StyledFormWrapper = styled.form`
    display: block;
    width:60vw;
    margin: 30px auto;
    padding:30px 0;
    border-radius: 40px;
    background: #dde1e7;
    box-shadow: -3px -3px 7px #ffffff73,
                2px 2px 5px rgba(94, 104, 121, 0.288);
`;

const StyledInputsContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    width:40vw;
    padding:20px 0;
    margin: 0 auto;
    border-radius: 40px;
    background: #dde1e7;
    box-shadow: inset 0 0 15px rgba(55, 84, 170,0),
                inset 0 0 20px rgba(255, 255, 255,0),
                7px 7px 15px rgba(55, 84, 170,.15),
                -7px -7px 20px rgba(255, 255, 255,1),
                inset 0px 0px 4px rgba(255, 255, 255,.2);
`;

export {StyledFormWrapper,StyledInputsContainer};