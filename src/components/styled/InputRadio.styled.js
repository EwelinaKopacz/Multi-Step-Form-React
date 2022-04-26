import styled from 'styled-components';

const StyledInputRadioField = styled.fieldset`
    width: 55%;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    margin:10px 0;
    border:none;
    padding:5px 0px;
`;

const StyledInputRadioLegend = styled.legend`
    color: #666666;
    font-size:1.5rem;
    padding: 4px 0 4px 8px;
`;

const StyledInputRadio = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    width:50%;
    padding:20px 5px;
    margin: 5px;
    box-shadow: 4px 4px 6px 0 rgba(224,228,233,.5),
                -4px -4px 6px 0 rgba(116, 125, 136, .2), 
                -4px -4px 6px 0 rgba(245,245,245,.5),
                4px 4px 6px 0 rgba(116, 125, 136, .3);
`;

const StyledInputRadioIndicator = styled.input`
    width: 18px;
    height: 18px;
    border: none;
`;


const StyledInputRadioDiv = styled.div`

    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
                -4px -4px 6px 0 rgba(116, 125, 136, .2), 
                -4px -4px 6px 0 rgba(255,255,255,.5),
                4px 4px 6px 0 rgba(116, 125, 136, .3);
    padding:10px 5px;
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

const StyledLabel = styled.label`
    color: #666666;
    font-size:1.5rem;
    padding: 4px 0 4px 8px;
`;



export {StyledInputRadioDiv,StyledInputField,StyledLabel,StyledInputRadioField,StyledInputRadioLegend,StyledInputRadio,StyledInputRadioIndicator };