import Color from 'color';
import PropTypes from 'prop-types';
import React from 'react';
import { MdLibraryMusic } from 'react-icons/md';
import { Icon } from '../Icon';
import styled from 'styled-components';
import { cleanUrl } from '../../../utils/sharedUtils';

const PointsContainer = styled.div(({ color, theme }) => {
  const lighten = Color(color).lighten(0.1).hex();
    const newColor = Color(color);
    const darkest = newColor.darken(0.05).hex();
  
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px 0 0 5px',
    boxShadow: '0px 3px 6px #00000029',
    background: `linear-gradient(90deg, ${darkest} 0%, ${color} 50%, ${darkest} 100%)`,
    // borderRight: '1px solid black',
    color: 'inherit',
    fontSize: theme.fontSizes.sm,
    minHeight: '100%',
    minWidth: '85px',
  };
});

// eslint-disable-next-line no-unused-vars
const ActionButtonContainer = styled.button(
  ({ color, textColor, isDisabled }) => {
    const fontColor = Color(textColor);
    const lighten = Color(color).lighten(0.1).hex();
    const newColor = Color(color);
    const darker = newColor.darken(0.1).hex();
    const darkest = newColor.darken(0.3).hex();
    return {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      borderRadius: '5px',
      boxShadow: '0px 3px 6px #00000029',
      background: `linear-gradient(90deg, ${darkest} 0%, ${darker} 27%, ${color} 100%)`,
      border: 'none',
      padding: 0,
      margin: 0,
      height: '71px',
      color: fontColor.hex(),
      '&:hover, &:focus, &:active': {
        color: fontColor,
        background: lighten,
        [PointsContainer]: {
          background: lighten,
        },
      },
      ...(isDisabled && {
        color: fontColor,
        opacity: 0.35,
        '&:hover': {
          color: fontColor,
        },
      }),
    };
  }
);

const ContentContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  paddingRight: '15px',
  minHeight: '100%',
});

const Points = styled.p(({ theme }) => {
  return {
    fontFamily: theme.fonts.primary,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.xxl,
    margin: 0,
    lineHeight: '100%',
    color: 'inherit',
  };
});

const Title = styled.p(({ theme }) => {
  return {
    textAlign: 'left',
    wordWrap: 'break-word',
    fontSize: theme.fontSizes.sm,
    fontWeight: theme.fontWeights.bold,
    margin: 0,
    marginLeft: '15px',
    color: 'inherit',
  };
});

const ButtonIcon = styled(Icon)(({ textColor }) => {
  const color = Color(textColor);
  return {
    color: color.hex(),
    '&:hover': {
      color: color.negate().hex(),
    },
  };
});

export const ActionButton = ({
  backgroundColor,
  preActionText,
  postActionText,
  targetURL,
  buttonIcon,
  pointValue,
  textColor,
  state,
  id,
  serviceAction,
  handleAction,
}) => {
  const complete = state?.find(item => item.id === id)?.complete;

  // All external links should be A tags
  const handleOnClick = () => {
    if(serviceAction ==='SpotifyEmbed'){
      handleAction(id);
    }
    else{
      if (!complete) {
        handleAction(id);
      }
      if (targetURL) {
        const cleanUrlString = cleanUrl(targetURL);
        window.open(cleanUrlString, '_blank');
      }
  }

  };

  return (
    <ActionButtonContainer
      color={backgroundColor}
      textColor={textColor}
      isDisabled={complete}
      onClick={handleOnClick}
    >
      <PointsContainer color={backgroundColor}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Icon name="FaPlus" size={12} />
          <Points>{pointValue}</Points>
        </div>
        points
      </PointsContainer>
      <ContentContainer>
        <Title>{complete ? postActionText : preActionText}</Title>
        {buttonIcon ? (
          <ButtonIcon size={35} name={buttonIcon} textColor={textColor} />
        ) : (
          <ButtonIcon as={MdLibraryMusic} />
        )}
      </ContentContainer>
    </ActionButtonContainer>
  );
};

ActionButton.propTypes = {
  buttonIcon: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  targetURL: PropTypes.string,
  postActionText: PropTypes.string,
  preActionText: PropTypes.string,
  pointValue: PropTypes.number,
  state: PropTypes.arrayOf(PropTypes.shape({})),
  id: PropTypes.string,
  handleAction: PropTypes.func,
};

ActionButton.defaultProps = {
  buttonIcon: null,
  backgroundColor: 'rgb(151, 79, 248)',
  textColor: null,
  targetURL: null,
  postActionText: null,
  preActionText: null,
  state: null,
  id: null,
  pointValue: 0,
  handleAction: () => {},
};
