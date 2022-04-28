/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';
import { StyledFormWrapper,StyledInputsContainer} from '../styled/Form.styled';
import {HeadersStyledH1} from '../styled/HeaderStyled'

const Form = (props) => {
    const {title,children,onSubmit} = props;
    return (
        <section>
            <StyledFormWrapper noValidate onSubmit={onSubmit}>
                <HeadersStyledH1>
                    {title}
                </HeadersStyledH1>
                <StyledInputsContainer>
                    {children}
                </StyledInputsContainer>
            </StyledFormWrapper>
        </section>
    )
}

export default Form;

Form.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func.isRequired
}
