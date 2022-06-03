import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from '../../../Components/UI/Icon';
import { Checkbox } from '../../../Components/UI/Checkbox';
import { TextField } from '../../../Components/UI/TextField';

const CreateActionContainer = styled(Container)({
  border: '1px dashed',
  borderColor: ({ theme }) => theme.colors.gray,
  padding: ({ theme }) => theme.spacing.lg,
  marginBottom: ({ theme, isLast }) => !isLast && theme.spacing.md,
});

const IconContainer = styled(Col)({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const CreateAction = ({
  label,
  subText,
  icon,
  isChecked,
  onChangeCheckbox,
  inputPlaceholder,
  inputValue,
  inputOnChange,
  isLast,
  ...props
}) => {
  return (
    <CreateActionContainer {...props} isLast={isLast}>
      <Row>
        <Col xs={10}>
          <Checkbox
            label={label}
            subText={subText}
            checked={isChecked}
            onChange={onChangeCheckbox}
          />
        </Col>
        <IconContainer>
          <Icon name={icon} color="white" />
        </IconContainer>
      </Row>
      {isChecked && (
        <Row>
          <Col>
            <TextField
              hideLabel
              label={label}
              value={inputValue}
              onChange={inputOnChange}
              placeholder={inputPlaceholder}
            />
          </Col>
        </Row>
      )}
    </CreateActionContainer>
  );
};

CreateAction.propTypes = {
  label: PropTypes.string,
  subText: PropTypes.string,
  icon: PropTypes.string,
  isChecked: PropTypes.bool,
  isLast: PropTypes.bool,
  onChangeCheckbox: PropTypes.func,
  inputPlaceholder: PropTypes.string,
  inputValue: PropTypes.string,
  inputOnChange: PropTypes.func,
};

CreateAction.defaultProps = {
  label: null,
  subText: null,
  icon: null,
  isChecked: false,
  isLast: false,
  onChangeCheckbox: null,
  inputPlaceholder: null,
  inputValue: null,
  inputOnChange: null,
};
