import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Bronze from '../../../assets/TierIcons/Bronze_Fan_Tier.png';
import Silver from '../../../assets/TierIcons/Silver_Fan_Tier.png';
import Gold from '../../../assets/TierIcons/Gold_Fan_Tier.png';
import Platinum from '../../../assets/TierIcons/Platinum_Fan_Tier.png';
import Diamond from '../../../assets/TierIcons/Diamond_Fan_Tier.png';

const ICON_IMPORTS = [
  { path: Diamond, name: 'Diamond' },
  { path: Platinum, name: 'Platinum' },
  { path: Gold, name: 'Gold' },
  { path: Silver, name: 'Silver' },
  { path: Bronze, name: 'Bronze' },
];

const TotalPointsContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  background: ({ theme }) => theme.colors.gray1,
});

const PointsContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'stretch',
  color: ({ theme }) => theme.colors.white,
  background: ({ theme }) => theme.colors.primary,
  fontSize: ({ theme }) => theme.fontSizes.sm,
  minWidth: '85px',
  minHeight: '85px',
});

const Points = styled.p(({ theme }) => {
  return {
    fontFamily: theme.fonts.primary,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.xxl,
    margin: 0,
    color: 'inherit',
    lineHeight: 1,
  };
});

const ContentContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: ({
    theme: {
      spacing: { sm, md },
    },
  }) => `${md} ${sm} ${md} 0`,
  'p, a': {
    margin: 0,
  },
});

const Name = styled.p({
  fontWeight: ({ theme }) => theme.fontWeights.bold,
  fontSize: ({ theme }) => theme.fontSizes.lg,
});

const TierRank = styled.p({
  fontSize: ({ theme }) => theme.fontSizes.xs,
});

const PointsLink = styled.a({
  color: ({ theme }) => theme.colors.white,
  fontSize: ({ theme }) => theme.fontSizes.sm,
  fontFamily: ({ theme }) => theme.fonts.heading,
  fontWeight: ({ theme }) => theme.fontWeights.bold,
  textDecoration: 'underline',
});

const TierIcon = styled.img({
  margin: ({
    theme: {
      spacing: { md },
    },
  }) => `0 ${md}`,
});

export const ActionTotalPoints = ({
  totalPoints,
  name,
  tier,
  nextTier,
  pointsToNextTier,
  rank
}) => {
  const activeIcon = ICON_IMPORTS.find(icon => icon.name === tier);
  console.log(`nextTier is`, nextTier);
  
  return (
    <TotalPointsContainer>
      <TierIcon src={activeIcon.path} height="65px" />
      <ContentContainer>
        <Name>{name}</Name>
        <TierRank>
        {rank===1 ? 
          `Congrats! You're the #1 StreetTeam Member 🎉🎉` 
          :   `You're only ${pointsToNextTier} points away from unlocking ${nextTier}`
        }
        
        </TierRank>
        {/* <PointsLink>Click here to earn more FanPoints</PointsLink> */}
      </ContentContainer>
      <PointsContainer>
        <Points>{totalPoints}</Points>
        <b>POINTS</b>
      </PointsContainer>
    </TotalPointsContainer>
  );
};

ActionTotalPoints.propTypes = {
  totalPoints: PropTypes.number,
  pointsToNextTier: PropTypes.number,
  name: PropTypes.string,
  tier: PropTypes.shape({
    path: PropTypes.string,
  }),
};

ActionTotalPoints.defaultProps = {
  totalPoints: 0,
  pointsToNextTier: 0,
  name: null,
  tier: 'Bronze',
};
