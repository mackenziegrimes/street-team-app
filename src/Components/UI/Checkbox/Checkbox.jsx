import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';

const Input = styled(Form.Check.Input)({
  width: '20px',
  height: '100%',
  marginTop: '0!important',
  
});

const CheckboxLabel = styled(Form.Check.Label)({
  color: ({ theme }) => theme.colors.white,
  fontSize: ({ theme }) => theme.fontSizes.lg,
  fontFamily: ({ theme }) => theme.fonts.heading,
  fontWeight: ({ theme }) => theme.fontWeights.semibold,
  marginBottom: ({ theme }) => theme.spacing.sm,
});

const LabelContainer = styled.div({
  marginLeft: ({ theme }) => theme.spacing.lg,
});

const SubText = styled(Form.Text)({
  fontSize: ({ theme }) => theme.fontSizes.sm,
  color: ({ theme }) => theme.colors.white,
  fontFamily: ({ theme }) => theme.fonts.heading,
  margin: 0,
});

export const Checkbox = ({ label, subText, checked, onChange }) => {
  return (
    <Form.Check type="checkbox" id={label}>
      <Input type="checkbox" checked={checked} onChange={onChange} />
      <LabelContainer>
        <CheckboxLabel>{label}</CheckboxLabel>
        {subText && <SubText>{subText}</SubText>}
      </LabelContainer>
    </Form.Check>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  subText: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  subText: null,
  checked: false,
};
