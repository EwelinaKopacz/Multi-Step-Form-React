import styled from 'styled-components';

const StyledInputRadioField = styled.fieldset`
    width: 55%;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    margin:10px 0;
    border:none;
    padding:5px 0px;
    position: relative;
`;

const StyledInputRadioLegend = styled.legend`
    color: #666666;
    font-size:1.5rem;
    padding: 4px 0 4px 8px;
`;

const StyledInputRadioWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    //padding:20px 20px;
    // margin: 5px;
    //border:1px solid red;
    /* box-shadow: 4px 4px 6px 0 rgba(224,228,233,.5),
                -4px -4px 6px 0 rgba(116, 125, 136, .2), 
                -4px -4px 6px 0 rgba(245,245,245,.5),
                4px 4px 6px 0 rgba(116, 125, 136, .3); */
`;

const StyledInputRadioContainer = styled.div`

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

const StyledInputRadioLabel = styled.label`
    position: relative;
    display: flex;
    align-items: center;
    color: #666666;
    font-size:1.5rem;
    padding: 10px;
    cursor: pointer;
    width:100%;
    border: 1px solid #666666;
    // border-radius: 1px;
    box-shadow: 4px 4px 6px 0 rgba(224,228,233,.5),
                -4px -4px 6px 0 rgba(116, 125, 136, .2), 
                -4px -4px 6px 0 rgba(245,245,245,.5),
                4px 4px 6px 0 rgba(116, 125, 136, .3);
    &::before{
        //position: absolute;
        content: "";
        height: 17px;
        width: 17px;
        border: 1px solid #666666;
        border-radius: 50%;
        margin-right: 20px
    }
`;

const StyledInputRadioInput = styled.input`
        //display: none;
        height: 20px;
        width: 20px;

    &:checked + ${StyledInputRadioLabel} {
        background-color: #ffffff73;
    }
    &:checked + ${StyledInputRadioLabel}::before{
        height: 10px;
        width: 10px;
        border: 5px solid white;
        background-color: black;
    }
`;

export { StyledInputRadioContainer,
    StyledInputRadioField,
    StyledInputRadioLegend,
    StyledInputRadioWrapper,
    StyledInputRadioInput,
    StyledInputRadioLabel 
};