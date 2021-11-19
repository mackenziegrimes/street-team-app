import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledPageHeader = styled.div`
  font-size: 50px;
  text-align: center;
  padding: 20px 0;

  @media (max-width: 600px) {
    font-size: 40px;
  }
`;

export const PageHeader = ({ children, className }) => {
  return <StyledPageHeader className={className}>{children}</StyledPageHeader>;
};

PageHeader.defaultProps = {
  className: '',
};

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.node,
};
