import styled from 'styled-components';

const StyledInputDiv = styled.div`
    height: 40px;
    width: 55%;
    display: flex;
    position: relative;
    margin:15px 0;
`;

const StyledInputField = styled.input`
    height: 100%;
    width: 100%;
    padding-left: 45px;
    font-size: 18px;
    outline: none;
    border: none;
    color: #595959;
    background: #dde1e7;
    border-radius: 25px;
    box-shadow: inset 2px 2px 5px #babecc,
                inset -5px -5px 10px #ffffff73;

    &:focus{
        box-shadow: inset 2px 2px 5px #babecc,
              inset -1px -1px 2px #ffffff73;
    }

`;

const StyledLabel = styled.label`
    position: absolute;
    top: -25%;
    left: 20px;
    pointer-events: none;
    color: #666666;
    transform: translateY(-50%);
    font-size:1.5rem;
`;

export {StyledInputDiv,StyledInputField,StyledLabel };