import styled from 'styled-components';

const CheckboxWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 55%;
    margin:3.5px 0;
    padding-left: 8px;
    position: relative;
`;

const CheckboxLabel = styled.p`
    font-size: 1.3rem;
    color: #595959;
`;

const CheckboxInput = styled.input`
    appearance: none;
    width: 20px;
    height:20px;
    cursor:pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: linear-gradient(145deg, #c7cbd0, #ecf1f7);
    box-shadow: ${(props)=> props.value ? 'inset 2px 2px 5px #babecc,inset -1px -1px 2px #ffffff73' : '5px 5px 10px #585a5c'};
    &:after {
        content:"\f00c";
        font-family:"Font Awesome 5 Free";
        font-weight: 900;
        font-size:16px;
        color:${(props) => props.value ? '#355E3B' : 'white'};
        display:${(props) => props.value ? 'block' : 'none'};
    }

    &:hover {
        box-shadow: inset 2px 2px 5px #babecc,
                    inset -1px -1px 2px #ffffff73;
    }
`;

const StyledErrors = styled.p`
    color:red;
    padding:5px;
    font-size: 1.3rem;
    position: absolute;
    bottom:-120%;
    left:1%;

`;


export {CheckboxWrapper,CheckboxLabel,CheckboxInput,StyledErrors};