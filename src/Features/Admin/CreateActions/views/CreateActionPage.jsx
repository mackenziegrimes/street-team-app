import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Spinner } from '../../../../Components/UI/Spinner';
import { ActionCard } from '../ActionCard';
import { NavBar } from '../NavBar';
import { Preview } from '../Preview';
import { SetupActions } from '../SetupActions';
import { useGetActionPage } from '../hooks/useGetActionPage';
import { selectActionsConfig } from '../configs/actionsConfig';

const RootContainer = styled(Container)({
  background: ({ theme }) => theme.colors.black,
  marginTop: ({ theme }) => theme.spacing.xl,
  marginBottom: ({ theme }) => theme.spacing.xl,
  height: '100%',
});

export const CreateActionPage = () => {
  const { loading, actionPageId, artistRoute, actionPageData } =
    useGetActionPage();
  const [actionChecked, setActionChecked] = useState({});
  const [actionValue, setActionValue] = useState({});
  const [savedDataRestored, setSavedDataRestored] = useState(false);

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

  console.log(actionValue, actionChecked);

  if (loading)
    return (
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md="auto" style={{ textAlign: 'center' }}>
            <Spinner animation="border" role="status" variant="light" />
          </Col>
        </Row>
      </Container>
    );

  console.log(`actionChecked`,actionChecked,`actionValue`,actionValue,actionPageData);
  //pull in existing data from the database if the values haven't yet been set
  if(actionPageData && Object.keys(actionValue).length === 0 && Object.keys(actionChecked).length === 0 && !savedDataRestored) {
    let checked = {};
    let values = {};
    const buttonsArray = actionPageData?.actionButtons?.items;
    console.log('updating from db saved data')
    console.log(`buttonsArray`,buttonsArray);
    for (let i = 0; i < buttonsArray.length; i++) {
      const element = buttonsArray[i];
      console.log(element);
      //handle the email url button
      if (element.buttonIcon==='Email') {
        checked.email = true;
        // strip the email address out of the templated email message
        values.email = element.targetURL.split('?')[0].split('mailto:')[1];
      }
      //handle the group join button
      if (buttonsArray[i].buttonIcon==='Group') {
        checked.vipGroup=true;
        values.vipGroup=element.targetURL;
      }
      if (buttonsArray[i].buttonIcon==='Ticket') {
        checked.starterPack=true;
        values.starterPack=buttonsArray[i].targetURL;

      }
      if (buttonsArray[i].buttonIcon==='Music') {
        checked.followMusic=true;
        values.followMusic=buttonsArray[i].targetURL;
      }
    }
    setActionChecked(checked);
    setActionValue(values);
    setSavedDataRestored(true);
    }

  return (
    <div>
      <NavBar />
      <RootContainer fluid>
        <Container fluid>
          <Row>
            <Col lg={3}>
              <ActionCard />
            </Col>
            <Col>
              <SetupActions
                actionPageId={actionPageId}
                artistRoute={artistRoute}
                actionPageData={actionPageData}
                actions={selectActionsConfig}
                onChangeCheckbox={onChangeCheckbox}
                onChangeInput={onChangeInput}
                actionChecked={actionChecked}
                actionValue={actionValue}
              />
            </Col>
            <Col>
              <Preview
                actionChecked={actionChecked}
                actionValue={actionValue}
              />
            </Col>
          </Row>
        </Container>
      </RootContainer>
    </div>
  );
};
