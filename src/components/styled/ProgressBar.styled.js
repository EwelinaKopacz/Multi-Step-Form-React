import styled from 'styled-components';

const StyledProgressBarWrapper = styled.div`
    position: relative;
    padding:5px;
`;

const StyledProgressBarContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 120%);
    width: 300px;
    padding:8px;
    border: 1px solid #dde1e7;
    background-color: #dde1e7;
    border-radius: 5px;

    progress{
        width: 100%;
        height: 17px;
        margin-right: 10px;
    }
`;

const StyledProgressBarValue = styled.span`
    font-size:1.2rem;
    color: #666666;
`;

export {StyledProgressBarContainer,StyledProgressBarWrapper,StyledProgressBarValue};