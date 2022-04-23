/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';
import { StyledForm, StyledFormTitle,StyledFormDiv} from './styled/Form.styled';

const Form = (props) => {
    const {title,children,onSubmit} = props;
    return (
        <section>
            <StyledForm noValidate onSubmit={onSubmit}>
                <StyledFormTitle>
                    {title}
                </StyledFormTitle>
                <StyledFormDiv>
                    {children}
                </StyledFormDiv>
            </StyledForm>
        </section>
    )
}

export default Form;

Form.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func.isRequired
}
