/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';
import {StyledButton} from './styled/Button.styled';

const Button = (props)=> {
    const {children,onClick,disabled,type} = props;
    return (
        <StyledButton type={type} onClick={onClick} disabled={disabled}>{children}</StyledButton>
    )
}

export default Button;

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired
}
