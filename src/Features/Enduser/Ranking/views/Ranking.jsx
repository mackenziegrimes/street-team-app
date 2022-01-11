import React from 'react';
import styled from 'styled-components';
import { Row, Col, Container } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router';
import Bronze from '../../../../assets/TierIcons/Bronze_Fan_Tier.png';
import Silver from '../../../../assets/TierIcons/Silver_Fan_Tier.png';
import Gold from '../../../../assets/TierIcons/Gold_Fan_Tier.png';
import Platinum from '../../../../assets/TierIcons/Platinum_Fan_Tier.png';
import Diamond from '../../../../assets/TierIcons/Diamond_Fan_Tier.png';
import { Button } from '../../../../Components/UI/Button';
import { ActionPage } from '../../../../Components/ActionPage';
import { RankingTable } from '../RankingTable';
import { useGetSubscriberData } from '../hooks';
import { useCurrentAuthUser } from '../../Actions/hooks/useCurrentAuthUser';
import { Spinner } from '../../../../Components/UI';
import { NavBar } from '../../NavBar';

const ICON_IMPORTS = [
  { path: Bronze, name: 'Bronze' },
  { path: Silver, name: 'Silver' },
  { path: Gold, name: 'Gold' },
  { path: Platinum, name: 'Platinum' },
  { path: Diamond, name: 'Diamond' },
];

const Header = styled.div({
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  flexDirection: 'center',
  marginBottom: ({ theme }) => theme.spacing.md,
  h1: {
    fontSize: ({ theme }) => theme.fontSizes.xl,
  },
  p: {
    margin: 0,
  },
  img: {
    marginLeft: ({ theme }) => theme.spacing.lg,
  },
});

const Rule = styled.div({
  border: ({ theme }) => `1px solid ${theme.colors.white}`,
});

const IconList = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: ({
    theme: {
      spacing: { md },
    },
  }) => `${md} 0`,
});

const IconContainer = styled.div(({ isSelected, theme }) => {
  return {
    borderRadius: '10px',
    padding: theme.spacing.sm,
    backgroundColor: isSelected ? theme.colors.gray : theme.colors.gray2,
  };
});

const IconWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Arrow = styled.div({
  width: 0,
  height: 0,
  borderLeft: '10px solid transparent',
  borderRight: '10px solid transparent',
  borderTop: ({ theme }) => `10px solid ${theme.colors.gray}`,
});

const TableContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
  margin: ({
    theme: {
      spacing: { lg, xs },
    },
  }) => `${xs} 0 ${lg} 0`,
});

const TableHeader = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  textAlign: 'center',
  width: '75%',
  h2: {
    fontSize: ({ theme }) => theme.fontSizes.xl,
    fontWeight: ({ theme }) => theme.fontWeights.bold,
  },
});

const ButtonGroup = styled.div({
  marginBottom: ({ theme }) => theme.spacing.lg,
  div: {
    margin: ({
      theme: {
        spacing: { lg },
      },
    }) => `${lg} 0`,
  },
});

export const Ranking = () => {
  const history = useHistory();
  const { artist, page = 'join' } = useParams();
  // const { userId, firstName, lastName } = useCurrentAuthUser();
  const userId = window.localStorage.getItem('user');
  const { tableData, currentUserData, artistName, loading } =
    useGetSubscriberData({
      artistRoute: artist,
      pageRoute: page,
      enduserId: userId,
    });
  const tier = currentUserData?.tier || 'Bronze';
  const firstName = currentUserData?.firstName;
  const lastName = currentUserData?.lastName;
  const enduserTotalPoints = currentUserData?.points;
  const activeIcon = ICON_IMPORTS.find(icon => icon.name === tier);
  const pointsToNextTier = currentUserData?.pointsToNextTier;

  const renderIcons = () => {
    return ICON_IMPORTS.map(({ path, name }) => {
      const isSelected = name === tier;
      return (
        <IconWrapper>
          <IconContainer isSelected={isSelected}>
            <img src={path} alt={`${name} tier`} height="50px" />
          </IconContainer>
          {isSelected && <Arrow />}
        </IconWrapper>
      );
    });
  };

  if (loading) {
    return (
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md="auto" style={{ textAlign: 'center' }}>
            <Spinner />
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <ActionPage>
      <Row>
        <Col className="p-0">
          <NavBar />
        </Col>
      </Row>
      <ActionPage.Body>
        <Row>
          <Col>
            <Header>
              <div>
                <h1>Your Current Ranking</h1>
                <p>
                  You have achieved <b>"{tier.toString()}"</b> status in{' '}
                  <b>
                    <i>{artistName}</i>
                  </b>{' '}
                  <i>StreetTeam</i>
                </p>
              </div>
              <img src={activeIcon.path} alt={`${tier} Tier`} height="100px" />
            </Header>
            <Rule />
          </Col>
        </Row>
        <Row>
          <Col>
            <IconList>{renderIcons(0)}</IconList>
          </Col>
        </Row>
        <Row>
          <Col>
            {tableData?.length && (
              <TableContainer>
                <TableHeader>
                  <h2>TOP FANS IN {tier?.toUpperCase() || 'YOUR'} TIER</h2>
                  <Rule />
                </TableHeader>
                <RankingTable data={tableData} />
              </TableContainer>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <ButtonGroup>
              <Button onClick={() => history.push(`/secure/${artist}/rewards`)}>
                ACCESS REWARDS
              </Button>
              <Rule />
              <Button
                color="gray2"
                fontColor="white"
                onClick={() => history.push(`/secure/${artist}`)}
              >
                EARN POINTS
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </ActionPage.Body>
      <Row>
        <Col className="p-0">
          <ActionPage.TotalPoints
            totalPoints={enduserTotalPoints}
            name={`${firstName} ${lastName || ''}`}
            tier={tier}
            nextTier={currentUserData?.nextTier}
            rank= {currentUserData?.rank}
            pointsToNextTier={pointsToNextTier}
          />
        </Col>
      </Row>
    </ActionPage>
  );
};
