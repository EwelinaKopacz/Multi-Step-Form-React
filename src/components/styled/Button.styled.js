import styled from 'styled-components';

const StyledButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width:80%;
`;

const StyledButton = styled.button`
    margin: 25px 5px 0 5px;
    width: 55%;
    height: 45px;
    color: #000;
    font-size: 18px;
    font-weight: 600;
    background: #dde1e7;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 25px;
    box-shadow: 2px 2px 5px #babecc,
                -5px -5px 10px #ffffff73;

    &:hover {
        box-shadow: inset 2px 2px 5px #babecc,
                    inset -1px -1px 2px #ffffff73;

    }
    &:disabled {
        color:#595959;
        opacity: .55;
        cursor: default;
        box-shadow: inset 2px 2px 5px #babecc,
                    inset -1px -1px 2px #ffffff73;
    }
`;

export {StyledButton,StyledButtonWrapper};