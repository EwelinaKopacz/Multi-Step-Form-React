import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 55%;
    padding:15px 10px;
    margin-bottom: 10px;
    border-radius: 16px;
    background: #dde1e7;
    box-shadow: 4px 4px 4px 0px #ccd1d9 inset,
                -4px -4px 4px 0px #e9e9e9 inset;
`;

const StyledRadioWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    position: relative;
    margin-bottom: 10px;
`;

const StyledRadioItem = styled.div`
    position: absolute;
    top:25%;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-left: 5px;
    box-shadow: -1px -2px 8px 0px #ffffff,
                8px 4px 12px 0px #d1d9e6;
    overflow: hidden;
    &::before,&::after{
        content: '';
        position: absolute;
        top: 14%;
        left: 14%;
        height: 75%;
        width: 75%;
        border-radius: 50%;
    }
    &::before{
        box-shadow: -6px -2px 4px 0px #d1d9e6,
                    4px 2px 8px 0px #c2bfbf;
    }
    &::after {
        background-color: #ecf0f3;
        box-shadow: -2px -2px 5px 0px #fff,
                    4px 2px 8px 0px #d1d9e6;
    }
`;

const StyledRadio = styled.input`
    opacity: 0;
    z-index: 1;
    cursor: pointer;
    width: 25px;
    height: 25px;
    margin-right: 10px;
    margin-left: 5px;
    &:hover ~ ${StyledRadioItem} {
        background-color: #ffffff;
    }
    &:checked ~ ${StyledRadioItem} {
        &::after{
            top: 25%;
            left: 25%;
            height: 50%;
            width: 50%;
            box-shadow: -1px -2px 6px 0px black, 
                        -1px 2px 6px 0px black;
        }
    }
`;

const StyledRadioLabel = styled.label`
    color: #666666;
    font-size:1.4rem;
    padding: 4px 0 4px 8px;
`;

const StyledRadioLegend = styled.p`
    color: #666666;
    font-size:1.5rem;
    margin: 8px 0 8px 8px;
`;


export {
    StyledWrapper,
    StyledRadioWrapper,
    StyledRadio,
    StyledRadioItem,
    StyledRadioLabel,
    StyledRadioLegend
};