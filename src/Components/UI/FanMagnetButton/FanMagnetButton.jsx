import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  width: 100%;
  background: ${({ bgColor }) => bgColor};
  border: 1px solid #333333;
  color: ${({ color }) => color};
  font-size: 30px;
  font-weight: 500;
  margin: ${({ margin }) => margin};
  padding: 17px 30px;

  @media (max-width: 600px) {
    padding: 18px 21px !important;
    font-size: 25px;
  }
`;

const StyledButtonInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  span {
    margin-right: 15px;

    @media (max-width: 600px) {
      transform: scale(0.75);
    }
  }
`;

export const FanMagnetButton = ({
  active,
  activeBgColor,
  activeColor,
  children,
  className,
  inactiveColor,
  handleClick,
  inactiveBgColor,
  margin,
}) => {
  return (
    <StyledButton
      bgColor={active ? activeBgColor : inactiveBgColor}
      color={active ? activeColor : inactiveColor}
      className={className}
      disabled={!active}
      type="button"
      onClick={handleClick}
      margin={margin}
    >
      <StyledButtonInner>{children}</StyledButtonInner>
    </StyledButton>
  );
};

FanMagnetButton.defaultProps = {
  className: '',
  inactiveBgColor: '#544c2e',
  inactiveColor: '#202021',
};

FanMagnetButton.propTypes = {
  activeBgColor: PropTypes.string.isRequired,
  inactiveBgColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  activeColor: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  inactiveColor: PropTypes.string,
  margin: PropTypes.string.isRequired,
};
