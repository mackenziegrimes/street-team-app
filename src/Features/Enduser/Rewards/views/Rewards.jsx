import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { Row, Container, Col } from 'react-bootstrap';
import { Button } from '../../../../Components/UI/Button';
import Gold from '../../../../assets/TierIcons/Gold_Fan_Tier.png';

const ColStyled = styled(Col)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '550px',
});

export const Rewards = () => {
  const history = useHistory();
  return (
    <Container fluid className="mt-5">
      <Row className="justify-content-md-center">
        <ColStyled>
          <div>
            <img src={Gold} alt="gold tier" height="100px" />
          </div>
          <h1>Coming Soon</h1>
          <p>This feature is still under development... check back soon!</p>
          <Button
            onClick={() => history.goBack()}
            color="gray1"
            fontColor="white"
          >
            BACK
          </Button>
        </ColStyled>
      </Row>
    </Container>
  );
};
