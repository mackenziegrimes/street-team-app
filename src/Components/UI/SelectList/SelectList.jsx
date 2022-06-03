import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';

const Input = styled(Form.Control)({
  width: '100%',
  color: ({ theme }) => theme.colors.white,
  borderRadius: 0,
  borderColor: ({ theme }) => theme.colors.gray,
  background: 'transparent',
  height: '48px',
  fontSize: ({ theme }) => theme.fontSizes.sm,
  fontFamily: ({ theme }) => theme.fonts.heading,
  fontWeight: ({ theme }) => theme.fontWeights.medium,
  padding: ({ theme }) => `0 ${theme.fontSizes.xs}`,
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

const FormGroup = styled(Form.Group)({
  margin: 0,
  padding: 0,
});

export const SelectList = ({
  label,
  subText,
  placeholder,
  value,
  onChange,
  hideLabel,
  options,
}) => {
  return (
    <FormGroup>
      {!hideLabel && <InputLabel>{label}</InputLabel>}{' '}
      <Input
        type="text"
        as="select"
        aria-label={hideLabel ? label : null}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      >
        {options.map(option => (
          <option value={option.value}>{option.label}</option>
        ))}
      </Input>
      {subText && <SubText className="text-muted">{subText}</SubText>}
    </FormGroup>
  );
};

SelectList.propTypes = {
  label: PropTypes.string.isRequired,
  subText: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  hideLabel: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};

SelectList.defaultProps = {
  subText: null,
  value: null,
  placeholder: null,
  hideLabel: false,
  options: [],
};
