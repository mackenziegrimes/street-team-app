/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import styled from 'styled-components';
import { useTheme } from '../../../Hooks/useTheme';
import { Icon } from '../../../Components/UI/Icon';
import { Button } from '../../../Components/UI/Button';
import { gql, useMutation } from '@apollo/react-hooks';
import {
  updateActionPageButton,
  createActionPageButton,
} from '../../../graphql/mutations';
import { apiActionsConfig } from './configs/actionsConfig';
import { CreateAction } from './CreateAction';

const ActionCard = styled(Card)({
  background: ({ theme }) => theme.colors.gray2,
  'input, select': {
    marginTop: ({ theme }) => theme.spacing.md,
  },
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

export const SetupActions = ({
  actions,
  onChangeCheckbox,
  onChangeInput,
  actionChecked,
  actionValue,
  setData,
  artistRoute,
  actionPageId,
  actionPageData,
}) => {
  const theme = useTheme();
  const [show, setShow] = useState(false);

  const [updateActionButton] = useMutation(gql(updateActionPageButton), {
    onCompleted: data => {
      setData(data.updateActionPageButton.actionpage);
      setShow(true);
    },
  });

  const [addActionPageButton, { loading: loadingActionPageButton }] =
    useMutation(gql(createActionPageButton), {
      onCompleted: data => {
        console.log('addActionPageButton join DATA', data);
        setData(data.createActionPageButton.actionpage);
        setShow(true);
      },
    });

  const copyLinkToClipboard = () => {
    // todo this needs to be dynamic by environment (dev, app, etc)
    // TODO eventually this should use both an artist route and a pageRoute
    const route = artistRoute || actionPageId;
    const link = `app.modern-musician.com/${route}`;
    navigator.clipboard.writeText(link);
  };

  const onSubmit = () => {
    setShow(true);
    let newTargetUrl = '';
    const actionButtons = actionPageData?.actionButtons?.items;
    // handle sendEmailUrl
    if (actionValue?.email && actionChecked?.email) {
      const emailUrl = `mailto:${actionValue.email}?subject=I%20joined%20the%20team!&body=Hey!%20I%20just%20joined%20the%20team!%0A%0A%20Here's%20where%20I'm%20from%20and%20why%20I'm%20interested%20in%20being%20a%20part%20of%20the%20community...`;
      let recordExists = false;
      const inputVariables = {
        ...apiActionsConfig.email,
        actionPageID: actionPageData.id,
        targetURL: emailUrl,
      };
      if (actionPageData?.id) {
        // if the action buttons exist in the pageData, update them
        if (actionButtons) {
          const emailButton = actionButtons.find(
            element => element.serviceAction === 'EmailLink'
          );
          if (emailButton) {
            // update  the button
            inputVariables.id = emailButton.id;
            updateActionButton({
              variables: {
                input: inputVariables,
              },
            });
            recordExists = true; // don't go on to create a new record
          }
        }
        if (!recordExists && !loadingActionPageButton) {
          // create the button record
          addActionPageButton({
            variables: { input: inputVariables },
          });
        }
      }
    }
    // handle joinGroupUrl
    if (actionValue?.vipGroup && actionChecked?.vipGroup) {
      newTargetUrl = actionValue.vipGroup;
      let recordExists = false;
      const inputVariables = {
        ...apiActionsConfig.vipGroup,
        actionPageID: actionPageData.id,
        targetURL: newTargetUrl,
      };
      if (actionPageData?.id) {
        // if the action buttons exist in the pageData, update the button
        if (actionButtons) {
          const button = actionButtons.find(
            element => element.serviceAction === 'JoinLink'
          );

          if (button) {
            // update  the button
            inputVariables.id = button.id;
            updateActionButton({ variables: { input: inputVariables } });
            recordExists = true; // don't go on to create a new record
          }
        }
        if (!recordExists && !loadingActionPageButton) {
          // create the button record
          addActionPageButton({
            variables: { input: inputVariables },
          });
        }
      }
    }

    // handle followMusicUrl
    if (actionValue?.followMusic && actionChecked?.followMusic) {
      newTargetUrl = actionValue.followMusic;
      let recordExists = false;
      const inputVariables = {
        ...apiActionsConfig.followMusic,
        actionPageID: actionPageData.id,
        targetURL: newTargetUrl,
      };
      if (actionPageData?.id) {
        // if the action buttons exist in the pageData, update them
        if (actionButtons) {
          const button = actionButtons.find(
            element => element.serviceAction === 'MusicLink'
          );
          if (button) {
            // update  the button
            inputVariables.id = button.id;
            updateActionButton({ variables: { input: inputVariables } });
            recordExists = true; // don't go on to create a new record
          }
        }
        if (!recordExists && !loadingActionPageButton) {
          // create the button record
          addActionPageButton({
            variables: { input: inputVariables },
          });
        }
      }
    }
    // handle scheduleMeeting
    if (actionValue?.scheduleMeeting && actionChecked?.scheduleMeeting) {
      const scheduleUrl = actionValue.scheduleMeeting;
      let recordExists = false;
      const inputVariables = {
        ...apiActionsConfig.scheduleMeeting,
        actionPageID: actionPageData.id,
        targetURL: scheduleUrl,
      };
      if (actionPageData?.id) {
        // if the action buttons exist in the pageData, update them
        if (actionButtons) {
          const scheduleButton = actionButtons.find(
            element => element.serviceAction === 'ScheduleLink'
          );
          if (scheduleButton) {
            // update  the button
            inputVariables.id = scheduleButton.id;
            updateActionButton({
              variables: {
                input: inputVariables,
              },
            });
            recordExists = true; // don't go on to create a new record
          }
        }
        if (!recordExists && !loadingActionPageButton) {
          // create the button record
          addActionPageButton({
            variables: { input: inputVariables },
          });
        }
      }
    }

    return {
      isLoading: false,
    };
  };

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <h2 style={{ fontSize: theme.fontSizes.lg }}>
              Set Up Your Actions
            </h2>
          </Col>
        </Row>
        <ActionCard>
          <HeaderRow>
            <Row>
              <Col>
                <h3>Tribal Accelerator</h3>
                <p>
                  Create your &quot;tribal accelerator&quot; that will turn
                  subscribers into engaged fans and active supporters of your
                  music.
                </p>
              </Col>
            </Row>
          </HeaderRow>
          <Card.Body>
            <Row>
              <Col>
                {actions.map((item, i) => {
                  return (
                    <CreateAction
                      {...item}
                      key={item.id}
                      isLast={i + 1 === actions.length}
                      onChangeCheckbox={() => onChangeCheckbox(item?.id)}
                      inputOnChange={e => onChangeInput(e, item?.id)}
                      isChecked={actionChecked[item.id]}
                      inputValue={actionValue[item.id]}
                    />
                  );
                })}
              </Col>
            </Row>
          </Card.Body>
          <Card.Body>
            <Row>
              <Col>
                <Button
                  onClick={onSubmit}
                  style={{
                    fontWeight: theme.fontWeights.semibold,
                    fontFamily: theme.fonts.heading,
                  }}
                >
                  Save Action Card
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </ActionCard>
      </Container>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Congrats! Here's Your Link:</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p style={{ color: 'black' }}>
            Click the button below to copy your onboarding link:
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={copyLinkToClipboard}>
            <Icon
              name="FaCopy"
              color="black"
              size={20}
              style={{ marginRight: 10 }}
            />
            Copy Link To Your Page
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

SetupActions.propTypes = {
  onChangeCheckbox: PropTypes.func,
  onChangeInput: PropTypes.func,
  setData: PropTypes.func,
  actionPageId: PropTypes.string,
  artistRoute: PropTypes.string,
  actionPageData: PropTypes.shape({
    id: PropTypes.string,
    actionButtons: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }),
  actionChecked: PropTypes.shape({
    email: PropTypes.bool,
    vipGroup: PropTypes.bool,
    starterPack: PropTypes.bool,
    followMusic: PropTypes.bool,
  }),
  actionValue: PropTypes.shape({
    email: PropTypes.string,
    vipGroup: PropTypes.string,
    starterPack: PropTypes.string,
    followMusic: PropTypes.string,
  }),
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      subText: PropTypes.string,
      icon: PropTypes.string,
      isChecked: PropTypes.bool,
      isLast: PropTypes.bool,
      onChangeCheckbox: PropTypes.func,
      inputPlaceholder: PropTypes.string,
      inputValue: PropTypes.string,
      inputOnChange: PropTypes.func,
    })
  ),
};

SetupActions.defaultProps = {
  actions: [],
  actionPageId: null,
  actionPageData: null,
  artistRoute: null,
  onChangeCheckbox: () => {},
  onChangeInput: () => {},
  setData: () => {},
  actionChecked: {},
  actionValue: {},
};
