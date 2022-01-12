import { set } from 'anonymous-id';
import Color from 'color';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row, Overlay } from 'react-bootstrap';
import { useAbsoluteLayout } from 'react-table';
import styled from 'styled-components';
import { Icon, FanMagnetButton } from '../..';
import { useInterval } from '../../../../Hooks/useInterval';
import { PlayWidget } from '../EmbedPlayWidget';
import { trackPlays } from './SpotifyActions';
import { saveSpotifyAuth } from './SpotifyAuth';
import { loginUrl } from "./SpotifyUrl";

const PlayerContainer = styled(Container)({
    width: '100%',
    // height: '100%',
    position: 'relative',
    border: '1px',
    borderRadius: '5px',
    backgroundColor: '#404040',
    fontWeights: 'thin',
    fontFamily: ({ theme }) => theme.fonts.heading,
    color: ({ theme }) => theme.colors.gray,
    borderColor: ({ theme }) => theme.colors.gray,
    padding: ({ theme }) => theme.spacing.md,
    marginBottom: ({ theme, isLast }) => !isLast && theme.spacing.md,
    fontSize: ({ theme }) => theme.fontSizes.xs,
    marginTop: ({ theme }) => theme.spacing.xs,
  });

const TopBarContainer = styled.div(({ color, textColor, theme }) => {
    const fontColor = Color(textColor);
    return {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      borderRadius: '5px',
      border: 'none',
      height: '15px',
      color: fontColor.hex(),
      marginBottom: theme.spacing.md,
      marginTop: theme.spacing.sm,
      // paddingTop: 30,
      // paddingBottom: 30
    };
  });

const InstructionContainer = styled.div({
    display: 'flex',
    alignItems: 'right',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: '1px',
    // minHeight: '100%',
  });

const PlaysRemainingContainer = styled.div({
    borderRadius: '5px',
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'left',
    background: ({ color }) => color,
    width: '50%',
    color: 'inherit',
    fontSize: ({ theme }) => theme.fontSizes.sm,
    // minHeight: '100%',
    padding: 0
});
  
const UnlockButton = styled(FanMagnetButton)`
  text-align: left;
  word-wrap: break-word;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin: 0;
  background-color: hsla(0, 0%, 16%, 0.75);
  z-index: 5;
  position: relative;
  padding: 20px 0px;
`;

const ButtonContainer = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});
  
const UnlockContainer = styled.div({
  position: 'relative'
    // top: '0',
    // bottom: '0',
    // right: '0',
    // left: '0',
    // justifyContent: 'center',
    // alignItems: 'center',
    // opacity: '50%',
});

const ContainerTriangle = styled.div({
  display: 'block',
  position: 'relative',
  width: '0',
  borderLeft: '20px solid transparent',
  borderRight: '20px solid transparent',
  borderBottom: '20px solid #404040',
  margin: '0 auto -4px 25px',
  color: '#404040',
});

const LockedPlayWidget = styled.div({
  position: 'absolute',
  top: '0',
  bottom: '0',
  right: '0',
  left: '0',
  zIndex: '1',
  height: '95%',
});

const MAX_PLAYS_PER_DAY = 5;
const POLLING_INTERVAL_SECONDS = 30; //poll every 30 seconds for now

export const SpotifyPlayerWidget = ({targetURL, spotifyAuthToken, pageId, enduserId, completedActions, remainingActions}) => {
    const [totalPlays, setTotalPlays] = useState(0);
    const [authToken, setAuthToken] = useState();
    useEffect(() => {
        console.log(`spotifyauthtoken`,spotifyAuthToken);
        if(!spotifyAuthToken){
            spotifyAuthToken = window.localStorage.getItem('spotifyRefreshToken'); //if there's no existing spotify auth token for this user, try pulling it from localStorage (which it would be in if the user just authed with spotify) 
            if(spotifyAuthToken){
                saveSpotifyAuth(spotifyAuthToken, enduserId); //save new token to database
            }
        }
        if(!authToken){
            setAuthToken(spotifyAuthToken);
        }
    },[spotifyAuthToken]);

    useEffect(() => {
           updateTotalPlays(); //update total plays when the page loads
    },[enduserId]) 

    const updateTotalPlays = async ()=>{
        if(spotifyAuthToken && spotifyAuthToken!=='undefined' && enduserId && pageId){
            if(totalPlays < MAX_PLAYS_PER_DAY){
                const plays = await trackPlays({userId: enduserId, pageId, service:"SPOTIFY"});
                if(plays!== totalPlays){
                    setTotalPlays(plays);
                }
            }
    }
    }
    useInterval(() => {
        updateTotalPlays();
      }, POLLING_INTERVAL_SECONDS * 1000);

    const remainingPlays = MAX_PLAYS_PER_DAY - totalPlays
  return (
    <div>
      <ContainerTriangle></ContainerTriangle>
      <PlayerContainer>
        <TopBarContainer textColor="white">
          <PlaysRemainingContainer>
            <>
              <span>
                <b>+20 each</b> | {totalPlays != 0 ? remainingPlays : remainingActions} plays left
              </span>
            </>
          </PlaysRemainingContainer>
          <InstructionContainer>
            <>
              <span>
                Play<b> {MAX_PLAYS_PER_DAY}x</b> per day{' '}
              </span>
            </>
          </InstructionContainer>
        </TopBarContainer>
        {authToken ? (
          <PlayWidget sourceUrl={targetURL} />
        ) : (
          <UnlockContainer>
            <UnlockButton
              active
              activeBgColor="#6aab5e"
              activeColor="white"
              inactiveBgColor="#385335"
              handleClick={() => {
                //go to the spotify auth login
                window.location.href = loginUrl;
              }}
            >
              <ButtonContainer>
                <Icon
                  color="white"
                  name="FaLock"
                  size={40}
                  style={{ marginRight: 20 }}
                />
                Unlock Spotify
              </ButtonContainer>
            </UnlockButton>
            <LockedPlayWidget>
              <PlayWidget sourceUrl={targetURL} iFrameHeight={80}></PlayWidget>
            </LockedPlayWidget>
          </UnlockContainer>
        )}
      </PlayerContainer>
    </div>
  );
}