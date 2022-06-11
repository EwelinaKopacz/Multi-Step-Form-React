import styled from 'styled-components';

const StyledProgressBarWrapper = styled.div`
    width:40vw;
    height:50px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow:hidden;
    border-radius: 15px;
`;

const StyledProgressBarContainer = styled.div`
    position: relative;
    display: inline-block;
    width:80%;
    height: 15px;
    border-radius: 6px;
    overflow: hidden;
    background: linear-gradient(180deg, #cfd1d4, #f6f8fb);
    box-shadow:  -15px 15px 54px #cdced1,
             -15px -15px 54px #ffffff;
    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: ${props=>props.value}%;
        background: #1852E4;
        background-color: rgba(89, 131, 252, 1);
        background-image: linear-gradient(174deg, rgba(89, 131, 252, 1) 0%, rgba(41, 53, 86, 1) 100%);
    }
`;

const StyledProgressBar = styled.progress`
    opacity:0;

`;

const StyledProgressBarValue = styled.span`
    padding-left:10px;
    color: #666666;
    font-size:1.4rem;
`;

export {StyledProgressBarWrapper,StyledProgressBarContainer,StyledProgressBar,StyledProgressBarValue};