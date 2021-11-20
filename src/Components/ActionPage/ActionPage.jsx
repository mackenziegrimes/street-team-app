import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

// const ActionPageContainer = styled(Container)({
//   maxWidth: '450px',
//   margin: '15px auto',
//   backgroundColor: ({ theme }) => theme.colors.gray3,
// });

const ActionPageContainer = styled(Container)`
  max-width: 450px;
  margin: 15px auto;
  background-color: ${({ theme }) => theme.colors.gray3};

  @media (max-width: 600px) {
    border-radius: 0;
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
`;

export const ActionPage = ({ children, ...props }) => {
  return <ActionPageContainer {...props}>{children}</ActionPageContainer>;
};

ActionPage.propTypes = {
  children: PropTypes.node.isRequired,
};
