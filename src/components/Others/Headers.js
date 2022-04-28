/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';
import { HeadersStyledH3 } from '../styled/HeaderStyled';

const Headers = (props) => {
    const { headerH3 } = props;

    return <HeadersStyledH3>{headerH3}</HeadersStyledH3>;
};

export default Headers;

Headers.propTypes = {
    headerH3: PropTypes.string.isRequired,
};
