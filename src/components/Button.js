/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styled/Button.styled';

const Button = (props)=> {
    const {children,type} = props;
    return (
        <StyledButton type={type}>{children}</StyledButton>
    )
}

export default Button;

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired
}