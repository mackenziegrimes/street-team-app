import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spinner as BootStrapSpinner } from 'react-bootstrap';

const StyledSpinner = styled(BootStrapSpinner)(
  ({ theme, color, size, thickness, margin }) => {
    return {
      color: color || theme.colors.white,
      margin,
      fontSize: thickness,
      height: size,
      width: size,
    };
  }
);

export const Spinner = ({ color, size, thickness, margin }) => {
  return (
    <StyledSpinner
      animation="border"
      role="status"
      color={color}
      size={size}
      thickness={thickness}
      margin={margin}
    />
  );
};

Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  thickness: PropTypes.string,
  margin: PropTypes.string,
};

Spinner.defaultProps = {
  color: null,
  size: '60px',
  thickness: '25px',
  margin: '20px',
};
