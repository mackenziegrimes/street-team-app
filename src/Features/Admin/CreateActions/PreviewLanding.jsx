import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Col, Row, Container, Card } from 'react-bootstrap';
import { Icon, FanMagnetButton } from '../../../Components/UI';
import { PageHeader, PageContainer } from '../../../Components/Page';
import { useTheme } from '../../../Hooks/useTheme';
import { PlayWidget } from '../../../Components/UI/Integrations/EmbedPlayWidget/PlayWidget';

const PlayerContainer = styled.div`
  padding: 20px 0;
`;

const ActionCard = styled(Card)({
  background: ({ theme }) => theme.colors.gray2,
});

const ButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const HeaderRow = styled(Card.Body)(({ theme }) => {
  return {
    color: theme.colors.white,
    h3: {
      fontSize: theme.fontSizes.lg,
      fontWeight: theme.fontWeights.bold,
    },
    p: {
      fontSize: theme.fontSizes.xs,
      fontWeight: theme.fontWeights.medium,
      lineHeight: 1.5,
      margin: 0,
    },
  };
});

const EmbedPlayerPlaceholder = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  height: 165,
  background: ({ theme }) => theme.colors.white,
  color: ({ theme }) => theme.colors.gray2,
  fontSize: '2rem',
});

export const PreviewLanding = ({ embedURL }) => {
  const theme = useTheme();
  return (
    <Container>
      <Row>
        <Col>
          <h2 style={{ fontSize: theme.fontSizes.lg }}>Preview</h2>
        </Col>
      </Row>
      <ActionCard>
        <HeaderRow>
          <PageContainer>
            <PageHeader>
              Listen for 30 seconds to unlock a free gift!
            </PageHeader>
            <PlayerContainer>
              {embedURL ? (
                <div style={{ height: 165 }}>
                  <PlayWidget sourceUrl={embedURL} />
                </div>
              ) : (
                <EmbedPlayerPlaceholder>
                  Enter SoundCloud, Spotify, or Youtube URL To Preview
                </EmbedPlayerPlaceholder>
              )}
            </PlayerContainer>
            <FanMagnetButton
              active
              activeBgColor="#807650"
              activeColor="#202021"
              inactiveBgColor="#544c2e"
            >
              <ButtonContainer>
                <Icon
                  color="#202021"
                  name="Gift"
                  size={70}
                  style={{ marginRight: 20 }}
                />
                CLAIM YOUR FREE GIFT
              </ButtonContainer>
            </FanMagnetButton>
          </PageContainer>
        </HeaderRow>
      </ActionCard>
    </Container>
  );
};

PreviewLanding.propTypes = {
  embedURL: PropTypes.string,
};

PreviewLanding.defaultProps = {
  embedURL: null,
};
