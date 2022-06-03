import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

const BodyContainer = styled(Container)({
  padding: ({ theme }) => theme.spacing.md,
});

export const ActionBodyContainer = ({ children, ...props }) => {
  return <BodyContainer {...props}>{children}</BodyContainer>;
};

ActionBodyContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
