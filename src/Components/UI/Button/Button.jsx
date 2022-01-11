import React from 'react';
import PropTypes from 'prop-types';
import Color from 'color';
import styled from 'styled-components';
import { Button as BootstrapButton } from 'react-bootstrap';

const StyledButton = styled(({ ...props }) => <BootstrapButton {...props} />)(
  ({ theme, color, fontColor }) => {
    const font = fontColor || theme.colors.black;
    const buttonColor = theme.colors?.[color] || color || theme.colors.yellow;
    const lighten = Color(buttonColor).lighten(0.1).hex();
    return {
      background: buttonColor,
      color: font,
      width: '100%',
      height: '60px',
      border: 'none',
      borderRadius: '5px',
      transition: 'unset !important',
      fontWeight: theme.fontWeights.semibold,
      fontSize: theme.fontSizes.xl,
      fontFamily: theme.fonts.primary,
      '&:hover': {
        background: lighten,
        color: font,
      },
      '&:focus': {
        background: lighten,
        color: font,
      },
      '&:disabled': {
        background: lighten,
        color: font,
        opacity: 0.5,
      },
    };
  }
);

export const Button = ({ label, children, ...props }) => {
  return <StyledButton {...props}>{label || children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  color: PropTypes.string,
  fontColor: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  label: null,
  color: null,
  fontColor: null,
};
