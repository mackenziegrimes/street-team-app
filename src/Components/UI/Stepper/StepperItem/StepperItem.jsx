import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '../../Icon';

const Item = styled.div({
  display: 'flex',
  justifyContent: 'center',
  borderRadius: '10px',
  alignItems: 'center',
  background: ({ theme, isComplete }) =>
    isComplete ? theme.colors.primary : theme.colors.gray1,
  minWidth: '30px',
  height: '30px',
  color: ({ theme }) => theme.colors.white,
  fontWeigth: ({ theme }) => theme.fontWeights.bold,
  circle: {
    fill: 'white',
  },
});

export const StepperItem = ({ isComplete }) => {
  return (
    <Item isComplete={isComplete} fill="white">
      {isComplete ? (
        <Icon name="GiCheckMark" size={12} />
      ) : (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="10" />
        </svg>
      )}
    </Item>
  );
};

StepperItem.propTypes = {
  isComplete: PropTypes.bool,
};

StepperItem.defaultProps = {
  isComplete: true,
};
