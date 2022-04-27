import styled from 'styled-components';

const StyledInputWrapper = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
`;

const StyledInputErrors = styled.p`
    display:block;
    color:red;
    padding:5px;
    font-size: 1.3rem;
`;

const StyledInputField = styled.input`
    padding: 9px;
    font-size: 18px;
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


const StyledInputLabel = styled.label`
    color: #666666;
    font-size:1.5rem;
    padding: 4px 0 4px 8px;
`;

export {StyledInputWrapper,StyledInputField,StyledInputLabel,StyledInputErrors };