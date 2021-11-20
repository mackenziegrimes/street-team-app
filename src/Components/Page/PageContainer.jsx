import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ArtistImage } from '../UI';
import tempImage from '../../assets/mm_banner_photo.png';
import MMLogo from "../../assets/mm_square_bright.png"

export const StyledPageContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  position: relative;
`;

export const MMLogoBranding = styled.div`
position: fixed;
    bottom: -377px;
    right: -1612px;
    opacity: 80%;
    height: 100%;
    transform: scale(0.013);

`;

const PageContent = styled(Container)`
  background: #1f1f1f 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  max-width: 660px;
  padding: ${({ pageContentPadding }) => pageContentPadding};
  position: relative;
  justify-content: space-around;

  @media (max-width: 600px) {
    border-radius: 0;
    padding: 35px;
    margin: auto;
  }
`;

export const PageContainer = ({ children, className, pageContentPadding }) => {
  return (
    <StyledPageContainer className={className}>
      {/** TODO: replace static artist image with dynamic one */}
      <ArtistImage imageUrl={tempImage} />
      <PageContent pageContentPadding={pageContentPadding}>
        {children}
      </PageContent>
      {/* <MMLogoBranding>
        <img src = {MMLogo}/>
      </MMLogoBranding> */}
    </StyledPageContainer>
  );
};

PageContainer.defaultProps = {
  className: '',
  pageContentPadding: '50px',
};

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.node,
  pageContentPadding: PropTypes.string,
};
