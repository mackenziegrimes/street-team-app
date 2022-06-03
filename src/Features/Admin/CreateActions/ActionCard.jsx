import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Icon } from '../../../Components/UI/Icon';
import { useTheme } from '../../../Hooks/useTheme';

const ListContainer = styled.div(({ theme, isActive }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    h3: {
      marginLeft: theme.spacing.sm,
      color: isActive ? theme.colors.menuPrimary : theme.colors.white,
      fontWeight: theme.fontWeights.bold,
    },
    svg: {
      marginRight: theme.spacing.md,
    },
  };
});

const Actions = styled.div(({ theme, isActive }) => {
  return {
    color: isActive ? theme.colors.menuPrimary : theme.colors.white,
    display: 'flex',
    alignItems: 'center',
    marginLeft: 80,
    marginTop: theme.spacing.sm,
  };
});

const Button = styled.button(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    border: 'none',
    background: 'transparent',
    color: 'inherit',
    fontSize: theme.fontSizes.lg,
    svg: {
      marginRight: theme.spacing.lg,
    },
  };
});

const ActionCardLink = ({ isActive, path, iconName, title, subText }) => {
  const theme = useTheme();
  const history = useHistory();
  const color = isActive ? theme.colors.menuPrimary : theme.colors.white;
  return (
    <Row style={{ marginBottom: theme.spacing.md }}>
      <Col>
        <Button isActive={isActive} onClick={() => history.push(path)}>
          <ListContainer isActive={isActive}>
            <Icon name={iconName} color={color} size={45} />
            <h3>{title}</h3>
          </ListContainer>
          <Actions isActive={isActive}>
            <Icon name="FaEdit" color={color} size={20} />
            <h4>{subText}</h4>
          </Actions>
        </Button>
      </Col>
    </Row>
  );
};

ActionCardLink.propTypes = {
  isActive: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
};

const ActionContainer = styled(Card)({
  background: ({ theme }) => theme.colors.black,
  border: 'none',
});

export const ActionCard = ({ activeView }) => {
  const theme = useTheme();
  const isActionActive = activeView === 'action';
  const isLandingActive = activeView === 'landing';
  const isIntegrationActive = activeView === 'integration';

  return (
    <React.Fragment>
      <Row style={{ marginBottom: theme.spacing.md }}>
        <Col>
          <h2 style={{ fontSize: theme.fontSizes.lg }}>
            Create Your Fan Funnel
          </h2>
          <p style={{ fontSize: theme.fontSizes.sm }}>Build Your Audience</p>
        </Col>
      </Row>
      <ActionContainer>
        <ActionCardLink
          isActive={isLandingActive}
          path="/admin/create-fan-magnet"
          iconName="FaMagnet"
          title="Fan Magnet"
          subText="Set Up Fan Magnet"
        />
        <ActionCardLink
          isActive={isActionActive}
          path="/admin/create-accelerator"
          iconName="MdSpeed"
          title="Tribal Accelerator"
          subText="Set Up Your Actions"
        />
        <ActionCardLink
          isActive={isIntegrationActive}
          path="/admin/integration"
          iconName="MdOutlineIntegrationInstructions"
          title="Integration"
          subText="Set Up Integrations"
        />
      </ActionContainer>
    </React.Fragment>
  );
};

ActionCard.propTypes = {
  activeView: PropTypes.string,
};

ActionCard.defaultProps = {
  activeView: 'action',
};
