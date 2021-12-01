import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Spinner } from '../../../../Components/UI/Spinner';
import { ActionCard } from '../ActionCard';
import { NavBar } from '../NavBar';
import { PreviewActions } from '../PreviewActions';
import { PreviewLanding } from '../PreviewLanding';
import { SetupActions } from '../SetupActions';
import { SetupLanding } from '../SetupLanding';
import { SetupIntegration } from '../SetupIntegration';
import { useGetActionPage } from '../hooks/useGetActionPage';
import { selectActionsConfig } from '../configs/actionsConfig';

export const RootContainer = styled(Container)({
  background: ({ theme }) => theme.colors.black,
  paddingTop: ({ theme }) => theme.spacing.xl,
  paddingBottom: ({ theme }) => theme.spacing.xl,
  height: '100%',
});

export const CreateActionPage = ({ type }) => {
  const {
    loading,
    actionPageId,
    artistRoute,
    actionPageData,
    userId,
    artistId,
  } = useGetActionPage();

  // Action Page
  const [actionChecked, setActionChecked] = useState({});
  const [actionValue, setActionValue] = useState({});
  const [data, setData] = useState(actionPageData);
  const [savedDataRestored, setSavedDataRestored] = useState(false);

  // Landing Page
  const [landingPageValues, setLandingPageValues] = useState({});
  const [landingPageIds, setLandingPageIds] = useState({});

  const onChangeCheckbox = id => {
    setActionChecked({
      ...actionChecked,
      [id]: !actionChecked[id],
    });
  };

  const onChangeInput = (e, id) => {
    setActionValue({
      ...actionValue,
      [id]: e.target.value,
    });
  };

  useEffect(() => {
    console.log(`initial actionPage data set `, actionPageData);
    console.log(`initial data is ... `, data);
    if (!data) setData(actionPageData);
  }, [actionPageData]);

  useEffect(() => {
    // pull in existing data from the database if the values haven't yet been set
    if (
      data &&
      Object.keys(actionValue).length === 0 &&
      Object.keys(actionChecked).length === 0 &&
      !savedDataRestored
    ) {
      console.log(`initial data is found to be `, data);
      const checked = {};
      const values = {};
      const landingPage = {};
      const landingIds = {};
      const buttonsArray = data?.actionButtons?.items;
      for (let i = 0; i < buttonsArray.length; i++) {
        const element = buttonsArray[i];
        console.log(element);
        // handle the email url button
        if (element.serviceAction === 'EmailLink') {
          checked.email = true;
          // strip the email address out of the templated email message
          // eslint-disable-next-line prefer-destructuring
          values.email = element.targetURL.split('?')[0].split('mailto:')[1];
        }
        // handle the group join button
        if (element.serviceAction === 'JoinLink') {
          checked.vipGroup = true;
          values.vipGroup = element.targetURL;
        }
        if (element.serviceAction === 'StarterPackLink') {
          checked.starterPack = true;
          values.starterPack = element.targetURL;
          landingPage.gift = element.targetURL;
          landingIds.gift = element?.id;
          console.log(`gift element`, element);
        }
        if (element.serviceAction === 'MusicLink') {
          checked.followMusic = true;
          values.followMusic = element.targetURL;
        }
        if (element.serviceAction === 'SoundCloudEmbed') {
          landingPage.soundCloud = element.targetURL;
          landingIds.soundCloud = element?.id;
        }
        if (element.serviceAction === 'ContinueButton') {
          landingIds.continue = element?.id;
        }
        if (element.serviceAction === 'ScheduleLink') {
          checked.scheduleMeeting = true;
          values.scheduleMeeting = element.targetURL;
        }
      }
      setActionChecked(checked);
      setActionValue(values);
      setSavedDataRestored(true);
      setLandingPageValues(landingPage);
      setLandingPageIds(landingIds);
    }
  }, [data]);

  if (loading) {
    return (
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md="auto" style={{ textAlign: 'center' }}>
            <Spinner animation="border" role="status" variant="light" />
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <div>
      <NavBar />
      <RootContainer fluid>
        <Container fluid>
          <Row>
            <Col lg={2.5}>
              <ActionCard activeView={type} />
            </Col>
            <Col lg={5}>
              {type === 'action' && (
                <SetupActions
                  actionPageId={actionPageId}
                  artistRoute={artistRoute}
                  actionPageData={data}
                  actions={selectActionsConfig}
                  onChangeCheckbox={onChangeCheckbox}
                  onChangeInput={onChangeInput}
                  actionChecked={actionChecked}
                  actionValue={actionValue}
                  setData={setData}
                />
              )}
              {type === 'landing' && (
                <SetupLanding
                  actionPageId={actionPageId}
                  landingPageValues={landingPageValues}
                  setLandingPageValues={setLandingPageValues}
                  landingPageIds={landingPageIds}
                  setData={setData}
                />
              )}
              {type === 'integration' && (
                <SetupIntegration
                  userId={userId}
                  artistId={artistId}
                  actionPageId={actionPageId}
                />
              )}
            </Col>
            <Col>
              {type === 'action' && (
                <PreviewActions
                  actionChecked={actionChecked}
                  actionValue={actionValue}
                />
              )}
              {type === 'landing' && (
                <PreviewLanding soundCloudURL={landingPageValues.soundCloud} />
              )}
            </Col>
          </Row>
        </Container>
      </RootContainer>
    </div>
  );
};

CreateActionPage.propTypes = {
  type: PropTypes.string.isRequired,
};
