import { set } from 'anonymous-id';
import Color from 'color';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Icon, FanMagnetButton } from '../..';
import { useInterval } from '../../../../Hooks/useInterval';
import { PlayWidget } from '../EmbedPlayWidget';
import { trackPlays } from './SpotifyActions';
import { saveSpotifyAuth } from './SpotifyAuth';
import { loginUrl } from "./SpotifyUrl";

const PlayerContainer = styled(Container)({
    border: '1px',
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
    alignItems: 'left',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: '1px',
    // minHeight: '100%',
  });

const PlaysRemainingContainer = styled.div({
    borderRadius: '5px',
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'right',
    background: ({ color }) => color,
    width: '50%',
    color: 'inherit',
    fontSize: ({ theme }) => theme.fontSizes.sm,
    // minHeight: '100%',
    padding: 0
  });

const ButtonContainer = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

const MAX_PLAYS_PER_DAY = 5;
const POLLING_INTERVAL_SECONDS = 5;

export const SpotifyPlayerWidget = ({targetURL, spotifyAuthToken, pageId, enduserId, completedActions, remainingActions}) => {
    const [totalPlays, setTotalPlays] = useState(0);
    useEffect(() => {
        if(!spotifyAuthToken){
            spotifyAuthToken = window.localStorage.getItem('spotifyRefreshToken'); //if there's no existing spotify auth token for this user, try pulling it from localStorage (which it would be in if the user just authed with spotify) 
            if(spotifyAuthToken){
                saveSpotifyAuth(spotifyAuthToken, enduserId); //save new token to database
            }
        }
    },[spotifyAuthToken]);

    useEffect(() => {
        updateTotalPlays(); //update total plays when the page loads
    },[]) 

    const updateTotalPlays = async ()=>{
        if(totalPlays < MAX_PLAYS_PER_DAY){
            const plays = await trackPlays({userId: enduserId, pageId, service:"SPOTIFY"});
            if(plays!== totalPlays){
                setTotalPlays(plays);
            }
        }
    }
    useInterval(() => {
        updateTotalPlays();
      }, POLLING_INTERVAL_SECONDS * 1000);

    const remainingPlays = MAX_PLAYS_PER_DAY - totalPlays
    return (
        <PlayerContainer>
            <TopBarContainer textColor='white'>
                <InstructionContainer>
                    Play 5x per day
                </InstructionContainer>
                <PlaysRemainingContainer>
                +20 each | { totalPlays != 0 ?  remainingPlays : remainingActions } plays left
                </PlaysRemainingContainer>
            </TopBarContainer>
            {spotifyAuthToken ?
            <PlayWidget sourceUrl={targetURL}/>
            : 
            <FanMagnetButton
                active
                activeBgColor="#6aab5e"
                activeColor="#202021"
                inactiveBgColor="#385335"
                handleClick={() => {
                    //go to the spotify auth login
                    window.location.href = loginUrl ;
                }}
                >
                    <ButtonContainer>
                        <Icon
                        color="#202021"
                        name="FaSpotify"
                        size={70}
                        style={{ marginRight: 20 }}
                        />
                    Login with Spotify to Listen
                    </ButtonContainer>
            </FanMagnetButton>
            }
        </PlayerContainer>
    )
}