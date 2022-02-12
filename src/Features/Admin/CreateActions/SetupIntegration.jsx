import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import { gql, useMutation, useQuery } from '@apollo/react-hooks';
import {
  updateArtistIntegrations,
  createArtistIntegrations,
} from '../../../graphql/mutations';
import { getArtistUser } from '../../../graphql/queries';
import { TextField } from '../../../Components/UI/TextField';
import { Button } from '../../../Components/UI/Button';
import { Icon } from '../../../Components/UI/Icon';
import { useTheme } from '../../../Hooks/useTheme';
import { FacebookGrantAdPermissions, FacebookGrantPagePermissions } from '../../../Components/UI/Integrations/Facebook';
import { ZoomGrantPermissions } from '../../../Components/UI/Integrations/Zoom/ZoomGrantPermissions';

import { CreateStreetTeamApiKey } from '../../../Components/UI/Integrations/StreetTeam';
import { facebookAppId, getBackendApiUrl } from '../../../utils/sharedUtils';
import { v4 as uuidv4 } from 'uuid';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SelectList } from '../../../Components/UI/SelectList';

const INPUT_KEYS = ['Amplitude', 'ActiveCampaign', 'Facebook', 'Manychat', 'StreetTeamApi', 'FacebookAdAccount', 'GoogleSheets'];

const ActionContainer = styled(Card)({
  background: ({ theme }) => theme.colors.gray2,
  'input, select': {
    marginTop: ({ theme }) => theme.spacing.md,
  },
});

const CreateActionContainer = styled(Container)({
  border: '1px dashed',
  borderColor: ({ theme }) => theme.colors.gray,
  padding: ({ theme }) => theme.spacing.lg,
  marginBottom: ({ theme, isLast }) => !isLast && theme.spacing.md,
});

const IconContainer = styled(Col)({
  display: 'flex',
  justifyContent: 'flex-end',
});

const SecondContainer = styled(Col)({
  padding: '20px 0 0 0',
});

const CardBody = styled(Card.Body)(({ theme }) => {
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

export const SetupIntegration = ({ userId, artistId, actionPageId, idToken }) => {
  const [activeIntegrations, setActiveIntegrations] = useState();
  const [show, setShow] = useState(false);
  const [formValue, setFormValue] = useState({
    Amplitude: { apiKey: '', apiUrl: '' },
    ActiveCampaign: { apiKey: '', apiUrl: '' },
    Facebook: { apiKey: '', apiAccountId: '', apiUrl: '' },
    FacebookAdAccount: { apiKey: '', apiAccountId: '', apiUrl: '' },
    Manychat: { apiKey: '', apiUrl: '' },
    StreetTeamApi: { apiKey: '' },
    GoogleSheets: { apiKey: '', apiFaUrl: '' },
    Zoom: {apiKey: '', apiUrl: '', apiAccountId: ''},
  });

  const theme = useTheme();

  const { data: artistData } = useQuery(gql(getArtistUser), {
    variables: { id: userId },
    skip: !userId,
  });

  const data = artistData?.getArtistUser;
  const integrations = data?.artist?.integrations?.items;

  useEffect(() => {
    if (integrations) {
      console.log('formValue is ', formValue);
      let form = formValue;
      let activeInt = {};
      for (let i = 0; i < integrations.length; i++) {
        const item = integrations[i];
        console.log('item', item);
        form = {
          ...form,
          [item.serviceName]: {apiKey: item.serviceApiKey, apiUrl: item.serviceApiUrl, apiAccountId: item.serviceAccountId, id: item.id},
        };
        activeInt = {
          ...activeInt,
          [item.serviceName]: {apiKey: item.serviceApiKey, apiUrl: item.serviceApiUrl, apiAccountId: item.serviceAccountId, id: item.id},
        };
      }
      console.log('setting form value to ', form);
      console.log('setting active integrations to ', activeInt);
      setActiveIntegrations(activeInt);
      setFormValue(form);
    }
  }, [integrations]);

  const [updateArtistIntegration] = useMutation(gql(updateArtistIntegrations));
  const [createArtistIntegration] = useMutation(gql(createArtistIntegrations));

  const saveIntegrations = () => {
    toast.success('Saved!');
    try {
      for (let i = 0; i < INPUT_KEYS.length; i++) {
        const key = INPUT_KEYS[i];
        const config = {
          variables: {
            input: {
              artistID: artistId,
              serviceName: key,
              ...(formValue[key].apiUrl && {serviceApiUrl: formValue[key]?.apiUrl,}),
              ...(formValue[key].apiKey && {serviceApiKey: formValue[key]?.apiKey,}),
              ...(formValue[key].apiAccountId && {serviceAccountId: formValue[key]?.apiAccountId,}),
              ...(activeIntegrations[key]?.id && {
                id: activeIntegrations[key].id,
              }),
            },
          },
        };
        if (activeIntegrations[key]) {
          updateArtistIntegration(config);
        } else {
          createArtistIntegration(config);
        }
      }
    } catch (err) {
      console.log('something went wrong with saving the integrations');
      console.error(err);
    }
    setShow(true);
  };

  const generateAndSetApiKey = (key) => {
    console.log(`key is ${key} and formValue is ${JSON.stringify(formValue)}`);
    //this needs not be hard coded
    key=`StreetTeamApi`;
    const uuid = uuidv4();
    setFormValue({
      ...formValue,
      [key]: {
        ...formValue[key],
        apiKey: uuid
      },
    })
  }
  const copyApiKeyToClipboard = () => {
    let apiKey;
    if(formValue.StreetTeamApi.apiKey){
      //this needs to be un-hardcoded eventually
      apiKey=formValue.StreetTeamApi.apiKey
      navigator.clipboard.writeText(apiKey);
      toast.success('Copied key to clipboard!');
    }
    else {
      navigator.clipboard.writeText(`not found. try refreshing the page`);
    }
  };

  const copyLinkToClipboard = () => {
    const config = JSON.stringify([
      {
        message: {
          text: 'thanks for reaching out ✌️\n\n...were you trying to hear my new song?',
          quick_replies: [
            {
              content_type: 'text',
              title: "Yeah let's hear it!",
              payload: `{"pageID": "${actionPageId}","artistId":"${artistId}"}`,
            },
          ],
        },
        receiving_app_id: facebookAppId,
      },
    ]);
    console.log('config', config);
    navigator.clipboard.writeText(config);
    toast.success("Copied JSON to clipboard!")
  };

  return (
    <React.Fragment>
      <ToastContainer autoClose={3000} />
      {/* Same as */}
      <Container>
        <Row>
          <Col>
            <h2 style={{ fontSize: theme.fontSizes.lg }}>
              Set Up Integrations
            </h2>
          </Col>
        </Row>
        <ActionContainer>
          <CardBody>
            <Col style={{ padding: 0, marginBottom: 25 }}>
              <h3>Integration</h3>
              <p>
                This is where all the magic happens. Set up your external
                integrations for Facebook Messaging and user tracking
              </p>
            </Col>
            <CreateActionContainer>
              <Row>
                <Col xs={10}>
                  <h3 style={{ fontWeight: theme.fontWeights.semibold }}>
                    Your StreetTeam API Key
                  </h3>
                  <p>Copy Your API Key for your StreetTeam Account</p>
                </Col>
                <IconContainer>
                  <Icon name="FaKey" color="white" />
                </IconContainer>
              </Row>
              <Row>
                <Col>
                  <TextField
                    hideLabel
                    label="StreetTeam API Key"
                    value={formValue.StreetTeamApi?.apiKey}
                    // onChange={}
                    placeholder="StreetTeam API Key..."
                  />
                </Col>
              </Row>
              <Row
                style={{
                  marginTop: theme.spacing.md,
                  marginRight: 0,
                  marginLeft: 0,
                }}
              >
                <Button
                  onClick={
                    formValue.StreetTeamApi?.apiKey
                      ? copyApiKeyToClipboard
                      : generateAndSetApiKey
                  }
                  style={{
                    fontWeight: theme.fontWeights.semibold,
                    fontFamily: theme.fonts.heading,
                  }}
                >
                  {formValue.StreetTeamApi?.apiKey
                    ? `Copy StreetTeam Api Key`
                    : `Generate StreetTeam Api Key`}
                </Button>
              </Row>
            </CreateActionContainer>
            <CreateActionContainer>
              <Row>
                <Col xs={10}>
                  <h3 style={{ fontWeight: theme.fontWeights.semibold }}>
                    Your ActiveCampaign API Access
                  </h3>
                  <p>Paste a copy of your ActiveCampaign URL...</p>
                </Col>
                <IconContainer>
                  <Icon name="MdOutlineStorefront" color="white" />
                </IconContainer>
              </Row>
              <Row>
                <Col>
                  <TextField
                    hideLabel
                    label="ActiveCampaign API Url"
                    value={formValue.ActiveCampaign?.apiUrl}
                    onChange={e =>
                      setFormValue({
                        ...formValue,
                        ActiveCampaign: {
                          ...formValue.ActiveCampaign,
                          apiUrl: e.target.value,
                        },
                      })
                    }
                    placeholder="ActiveCampaign URL..."
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={10}>
                  <SecondContainer>
                    {' '}
                    <p>Paste a copy of your ActiveCampaign API Key...</p>{' '}
                  </SecondContainer>
                </Col>
              </Row>
              <Row>
                <Col>
                  <TextField
                    hideLabel
                    label="ActiveCampaign API Key"
                    value={formValue.ActiveCampaign.apiKey}
                    onChange={e =>
                      setFormValue({
                        ...formValue,
                        ActiveCampaign: {
                          ...formValue.ActiveCampaign,
                          apiKey: e.target.value,
                        },
                      })
                    }
                    placeholder="ActiveCampaign API Key..."
                  />
                </Col>
              </Row>
            </CreateActionContainer>
            <CreateActionContainer>
              <Row>
                <Col xs={10}>
                  <h3 style={{ fontWeight: theme.fontWeights.semibold }}>
                    Your Manychat API Key
                  </h3>
                  <p>Paste a copy of your Manychat API Key...</p>
                </Col>
                <IconContainer>
                  <Icon name="IoChatbubbleEllipsesSharp" color="white" />
                </IconContainer>
              </Row>
              <Row>
                <Col>
                  <TextField
                    hideLabel
                    label="Manychat API Key"
                    value={formValue.Manychat.apiKey}
                    onChange={e =>
                      setFormValue({
                        ...formValue,
                        Manychat: {
                          ...formValue.Manychat,
                          apiKey: e.target.value,
                        },
                      })
                    }
                    placeholder="Manychat API Key..."
                  />
                </Col>
              </Row>
            </CreateActionContainer>
            <CreateActionContainer>
              <Row>
                <Col xs={10}>
                  <h3 style={{ fontWeight: theme.fontWeights.semibold }}>
                    Your Amplitude API Key
                  </h3>
                  <p>Paste a copy of your Amplitude API Key...</p>
                </Col>
                <IconContainer>
                  <Icon name="MdOutlineAutoGraph" color="white" />
                </IconContainer>
              </Row>
              <Row>
                <Col>
                  <TextField
                    hideLabel
                    label="Amplitude API Key"
                    value={formValue.Amplitude.apiKey}
                    onChange={e =>
                      setFormValue({
                        ...formValue,
                        Amplitude: {
                          ...formValue.Amplitude,
                          apiKey: e.target.value,
                        },
                      })
                    }
                    placeholder="Amplitude API Key..."
                  />
                </Col>
              </Row>
            </CreateActionContainer>
            <CreateActionContainer>
              <Row>
                <Col xs={10}>
                  <h3 style={{ fontWeight: theme.fontWeights.semibold }}>
                    Facebook Page
                  </h3>
                  <p>
                    Select the Facebook page for your Facebook Messenger
                    Campaign...
                  </p>
                </Col>
                <IconContainer>
                  <Icon name="FaFacebook" color="white" />
                </IconContainer>
              </Row>
              <Row style={{ marginTop: theme.spacing.md }}>
                <Col>
                  <FacebookGrantPagePermissions
                    userId={userId}
                    artistId={artistId}
                    facebookPageId={formValue.Facebook.apiAccountId}
                  />
                </Col>
              </Row>
            </CreateActionContainer>
            <CreateActionContainer>
              <Row>
                <Col xs={10}>
                  <h3 style={{ fontWeight: theme.fontWeights.semibold }}>
                    Your FB JSON Code
                  </h3>
                  <p>Copy your code for your Facebook Messenger Ad</p>
                </Col>
                <IconContainer>
                  <Icon name="FaCog" color="white" />
                </IconContainer>
              </Row>
              <Row style={{ marginTop: theme.spacing.md }}>
                <Col>
                  <Button
                    style={{
                      fontWeight: theme.fontWeights.semibold,
                      fontFamily: theme.fonts.heading,
                    }}
                    onClick={copyLinkToClipboard}
                  >
                    <Icon
                      name="FaCopy"
                      color="black"
                      size={20}
                      style={{ marginRight: 10 }}
                    />
                    Copy JSON Code
                  </Button>
                </Col>
              </Row>
            </CreateActionContainer>
            <CreateActionContainer>
              <Row>
                <Col xs={10}>
                  <h3 style={{ fontWeight: theme.fontWeights.semibold }}>
                    Facebook Ad Account
                  </h3>
                  <p>
                    Automatically create Lookalike and Custom targeting
                    audiences based on your StreetTeam community members
                  </p>
                </Col>
                <IconContainer>
                  <Icon name="FaFacebook" color="white" />
                </IconContainer>
              </Row>
              <Row style={{ marginTop: theme.spacing.md }}>
                <Col>
                  <FacebookGrantAdPermissions
                    userId={userId}
                    artistId={artistId}
                    facebookAdAccountId={
                      formValue.FacebookAdAccount?.apiAccountId
                    }
                  />
                </Col>
              </Row>
            </CreateActionContainer>
            <CreateActionContainer>
              <Row>
                <Col xs={10}>
                  <h3 style={{ fontWeight: theme.fontWeights.semibold }}>
                    Funnel Accelerator Reporting
                  </h3>
                  <p>Copy/paste your Funnel Accelerator URL below...</p>
                </Col>
                <IconContainer>
                  <Icon name="SiGooglesheets" color="white" />
                </IconContainer>
              </Row>
              <Row>
                <Col>
                  <TextField
                    hideLabel
                    label="Google Sheets Funnel Accelerator API Key"
                    value={formValue.GoogleSheets.apiKey}
                    onChange={e =>
                      setFormValue({
                        ...formValue,
                        GoogleSheets: {
                          ...formValue.GoogleSheets,
                          apiKey: e.target.value,
                        },
                      })
                    }
                    placeholder="Funnel Accelerator URL..."
                  />
                </Col>
              </Row>
            </CreateActionContainer>
            <CreateActionContainer>
              <Row>
                <Col xs={10}>
                  <h3 style={{ fontWeight: theme.fontWeights.semibold }}>
                    Zoom Integration
                  </h3>
                  <p>
                    Integrate with Zoom for Artist Showcase tracking and
                    reporting...
                  </p>
                </Col>
                <IconContainer>
                  <Icon name="IoVideocam" color="white" />
                </IconContainer>
              </Row>
              <Row style={{ marginTop: theme.spacing.md }}>
                <Col>
                  <ZoomGrantPermissions
                    userId={userId}
                    artistId={artistId}
                    zoomAccountId={
                      formValue.ZoomAccount?.apiAccountId
                    }
                  />
                </Col>
              </Row>
            </CreateActionContainer>
            <Row style={{ marginTop: theme.spacing.lg }}>
              <Col>
                <Button
                  onClick={saveIntegrations}
                  style={{
                    fontWeight: theme.fontWeights.semibold,
                    fontFamily: theme.fonts.heading,
                  }}
                >
                  Save Integrations
                </Button>
              </Col>
            </Row>
          </CardBody>
        </ActionContainer>
      </Container>
      {/* <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>One more thing!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p style={{ color: 'black' }}>
            Click the button below to copy your customized JSON code for your
            Facebook Ad Message Template.
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
            Copy Config
          </Button>
        </Modal.Footer>
      </Modal> */}
    </React.Fragment>
  );
};

SetupIntegration.propTypes = {
  userId: PropTypes.string.isRequired,
  artistId: PropTypes.string.isRequired,
  actionPageId: PropTypes.string.isRequired,
};
