import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  color: ({ theme }) => theme.colors.white,
});

const Header = styled.h2({
  fontSize: ({ theme }) => theme.fontSizes.lg,
  fontWeight: ({ theme }) => theme.fontWeights.bold,
});

const SubHeader = styled.h3({
  fontSize: ({ theme }) => theme.fontSizes.sm,
  fontWeight: ({ theme }) => theme.fontWeights.semibold,
  lineHeight: 'normal',
});

const Rule = styled.div({
  width: '75%',
  border: ({ theme }) => `1px solid ${theme.colors.white}`,
});

export const ActionHeader = ({ heading, subHeading }) => {
  return (
    <HeaderContainer>
      <Header>{heading}</Header>
      {/* <Rule /> */}
      <SubHeader>{subHeading}</SubHeader>
    </HeaderContainer>
  );
};

ActionHeader.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

ActionHeader.defaultProps = {
  heading: '',
  subHeading: '',
};
