import PropTypes from 'prop-types';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

import { ActionButton } from '../../UI/ActionButton';
import { compareId } from '../../../utils/sharedUtils';
import { SpotifyPlayerWidget } from '../../UI/Integrations/Spotify';

const StyledContainer = styled.div({
  button: { marginBottom: '15px' },
});

export const ActionButtons = ({ data, state, handleAction, currentState, enduserId, pageId, spotifyAuthToken }) => {
  const actionButtons = [...data].sort(compareId('position'));
  return (
    <StyledContainer>
      {actionButtons.map((item, i) => {
        return (
          <div>
          <Row key={item?.id || i}>
            <Col>
              <ActionButton
                {...item}
                state={state}
                handleAction={handleAction}
              />
            </Col>
          </Row>
          { item.serviceAction === 'SpotifyEmbed' && currentState &&
          <Row>
            <Col>
              <SpotifyPlayerWidget 
                {...item} 
                spotifyAuthToken={spotifyAuthToken} 
                enduserId={enduserId} 
                completedActions={state.find(x => x.id == item.id)?.completedActions}
                remainingActions={5 - state.find(x => x.id == item.id)?.completedActions}
                pageId={pageId}
              />
            </Col>
          </Row>
          }
          </div>
        );
      })}
    </StyledContainer>
  );
};

ActionButtons.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  state: PropTypes.arrayOf(PropTypes.shape({})),
  handleAction: PropTypes.func,
};

ActionButtons.defaultProps = {
  state: null,
  handleAction: () => {},
};
