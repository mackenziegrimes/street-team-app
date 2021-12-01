import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';

const Input = styled(Form.Control)({
  color: ({ theme }) => theme.colors.white,
  borderRadius: 0,
  borderColor: ({ theme, error }) =>
    error ? 'red !important' : theme.colors.gray,
  background: 'transparent',
  height: '48px',
  fontSize: ({ theme }) => theme.fontSizes.sm,
  fontFamily: ({ theme }) => theme.fonts.heading,
  fontWeight: ({ theme }) => theme.fontWeights.medium,
  transitions: 'unset',
  '&:hover': {
    background: 'transparent',
    color: ({ theme }) => theme.colors.white,
  },
  '&:active': {
    background: 'transparent',
    color: ({ theme }) => theme.colors.white,
  },
  '&:focus': {
    background: 'transparent',
    color: ({ theme }) => theme.colors.white,
  },
  '&:invalid': {
    background: 'transparent',
    borderColor: 'red',
    color: ({ theme }) => theme.colors.white,
  },
});

const InputLabel = styled(Form.Label)({
  color: ({ theme }) => theme.colors.white,
  fontSize: ({ theme }) => theme.fontSizes.lg,
  fontFamily: ({ theme }) => theme.fonts.heading,
  fontWeight: ({ theme }) => theme.fontWeights.medium,
});

const SubText = styled(Form.Text)({
  fontSize: ({ theme }) => theme.fontSizes.sm,
  margin: 0,
});

const ErrorText = styled(Form.Text)({
  fontSize: ({ theme }) => theme.fontSizes.sm,
  color: 'red !important',
  margin: 0,
});

const FormGroup = styled(Form.Group)({
  margin: 0,
  padding: 0,
});

export const TextField = forwardRef(
  ({ label, subText, hideLabel, error, ...props }, ref) => {
    console.log('props', props);
    return (
      <FormGroup>
        {!hideLabel && <InputLabel>{label}</InputLabel>}
        <Input
          type="text"
          aria-label={hideLabel ? label : null}
          ref={ref}
          error={!!error}
          {...props}
        />
        {subText && <SubText className="text-muted">{subText}</SubText>}
        {error && (
          <ErrorText className="text-muted">
            {error?.message || 'Required'}
          </ErrorText>
        )}
      </FormGroup>
    );
  }
);

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  subText: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  hideLabel: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

TextField.defaultProps = {
  subText: null,
  error: null,
  value: null,
  placeholder: null,
  hideLabel: false,
};
