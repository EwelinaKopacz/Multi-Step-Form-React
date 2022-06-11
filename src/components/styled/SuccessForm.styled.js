import styled from 'styled-components';

const StyledDivWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:60vw;
    height:60vh;
    margin: 30px auto;
    padding:30px 0;
    border-radius: 40px;
    background: #dde1e7;
    box-shadow: -3px -3px 7px #ffffff73,
                2px 2px 5px rgba(94, 104, 121, 0.288);
`;

const StyledH2 = styled.h2`
    font-size:22px;
    padding:25px 0;
    align-self: center;
`;

const StyledButton = styled.button`
    margin: 10px 0;
    padding: 10px 0;
    border:none;
    width: 35%;
    font-size: 16px;
    color: #000;
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

`;

export {StyledDivWrapper,StyledH2,StyledButton};