import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
// import { Auth } from 'aws-amplify';
import { Modal } from 'react-bootstrap';
import { Button } from '../../Button';
import { SelectList } from '../../SelectList';
import { useTheme } from '../../../../Hooks/useTheme';
import { Icon } from '../../Icon';
// import { ConsoleLogger } from '@aws-amplify/core';

// login with facebook to grant messaging permissions
// TODO we'll want to read the saved data from the database at some point soon, but for now the user can just re-connect if they feel so inclined.
export const FacebookGrantPagePermissions = ({ userId, artistId }) => {
  const theme = useTheme();

  const [show, setShow] = useState(false);
  const [facebookPages, setFacebookPages] = useState();
  const [facebookLoginObject, setFacebookLoginObject] = useState();
  const [fbConfig, setFbConfig] = useState();
  const [formValue, setFormValue] = useState({
    FacebookPage: '',
  });

  const copyLinkToClipboard = () => {
    // todo this needs to be dynamic by environment (dev, app, etc)
    // TODO eventually this should use both an artist route and a pageRoute
    navigator.clipboard.writeText(fbConfig);
  };

  const fbAsyncInit = () => {
    // init the fb sdk client
    const fb = window.FB;
    fb.init({
      appId: '1889301381171290',
      cookie: true,
      xfbml: true,
      version: 'v2.11',
    });
  };

  const initFB = () => {
    const fb = window.FB;
    console.log('FB SDK initialized');
  };

  const createScript = () => {
    // load the sdk
    window.fbAsyncInit = fbAsyncInit;
    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/en_US/sdk.js';
    script.async = true;
    script.onload = initFB;
    document.body.appendChild(script);
  };

  useEffect(() => {
    if (!window.FB) createScript();
  }, []);

  // useEffect(()=>{
  //     if(facebookLoginObject){
  //         console.log(facebookLoginObject);
  //         getFBPageList(facebookLoginObject);
  // }},facebookLoginState)

  const getFBPageOptionsFromInternalAPI = async authObject => {
    const { userID, accessToken } = authObject;
    try {
      await fetch(
        `https://qk9qdxpz3f.execute-api.us-east-1.amazonaws.com/dev/get-available-facebook-pages?accessToken=${accessToken}&userID=${userID}`,
        { method: 'GET', headers: { 'Content-Type': 'application/json' } }
      )
        .then(rsp => rsp.json())
        .then(json => {
          if (json.error && json.error.message) {
            console.error(json.error.message);
          } else {
            console.log(`facebookOptionsAre`, json);
            const returnData = json.data.data.map(item => {
              const returnObject = { id: item.id, name: item.name };
              return returnObject;
            });
            console.log(`return data`, returnData);
            setFacebookPages(returnData);
          }
        });
    } catch (err) {
      console.error(err);
    }
  };

  const addPageMessagingPermission = async () => {
    const fb = window.FB;
    await fb.login(
      response => {
        if (!response || !response.authResponse) {
          return;
        }
        console.log(`got the following response`, response.authResponse);
        if (!facebookPages) {
          getFBPageOptionsFromInternalAPI(response.authResponse).then(res => {
            console.log(`internal API resrponse`, res);
          });
        }
        setFacebookLoginObject(response.authResponse);
      },
      {
        // the authorized scopes
        scope: 'email,public_profile,pages_messaging,pages_show_list',
        return_scopes: true,
        // scope: 'public_profile,email,pages_show_list,public_profile,pages_messaging'
      }
    );
  };

  // const getFBPageList = async facebookLoginObject => {
  //   console.log(`facebookLoginObjectIs`, facebookLoginObject);
  //   const fb = window.FB;
  //   const fbpages = fb.api('/me/accounts', function (err, response) {
  //     if (err) {
  //       console.error(`unable to get list of FB pages from FB Api`);
  //     } else {
  //       console.log(`response is`, response);
  //       if (!response || !response.data) {
  //         return;
  //       }
  //       console.log(response.data);
  //       setFacebookPages(response.data);
  //     }
  //     return response;
  //   });
  //   console.log(`returned data`, fbpages);
  // };

  const updateDatabase = async facebookPageID => {
    console.log(`facebookLoginObjectIs`, facebookLoginObject);
    // TODO this should be a PUT eventually got to change the API first though
    // https://qk9qdxpz3f.execute-api.us-east-1.amazonaws.com/dev/store-facebook-page-integration?userId=36e0162d-d582-484e-af0d-f74e719d58d8&facebookUserAccessToken=EAAa2T0GyyFoBAIWZBItkgSxj7PMpW2npvt6Lmb6WsxpqAPX8hTHe92xeUYmZBkyTYyOgZA7NyvQE2O67WW8UyE1hxSmKPzrUvOF5ZB3yz94Q5L62lATvjnMI0Kezbwgk8GLot6iCORo1pLDUIjSMg9K3w6R5jKSobfXrl1xa0KwgZCq0e76qzSGmZBRHLWBZBZCtBxTuCkEt5souSTAjMKi8azdd0ZBV90HYZD&facebookUserId=390630932458613&artistID=c683e4f2-cce2-431b-a03e-f78645ef1cd2&facebookPageId=109361494893159

    // these values come from the API response from the fb.login response (response.authResponse)
    try {
      const facebookAccessToken = facebookLoginObject.accessToken;
      const facebookUserId = facebookLoginObject.userID;
      console.log(
        `updating database with these values`,
        userId,
        facebookAccessToken,
        facebookUserId,
        facebookPageID
      );
      await fetch(
        `https://qk9qdxpz3f.execute-api.us-east-1.amazonaws.com/dev/store-facebook-page-integration?userId=${userId}&facebookUserAccessToken=${facebookAccessToken}&facebookUserId=${facebookUserId}&artistID=${artistId}&facebookPageId=${facebookPageID}`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        }
      )
        .then(rsp => rsp.json())
        .then(json => {
          if (json.error && json.error.message) {
            console.error(json.error.message);
          } else {
            console.log(json);
            setFbConfig(json);
            setShow(true);
          }
        });
    } catch (err) {
      console.error(err);
    }
  };

  console.log(`facebookPages`, facebookPages);

  const selectOptions = useMemo(() => {
    const pleaseSelectOption = { value: '', label: `[please select a page]` };
    let pages = [];
    if (facebookPages) {
      pages = facebookPages.map(item => {
        return { value: item.id, label: item.name };
      });
    }

    return [pleaseSelectOption, ...pages];
  }, [facebookPages]);

  return (
    <div>
      {!facebookPages ? (
        <Button
          onClick={addPageMessagingPermission}
          style={{
            fontWeight: theme.fontWeights.semibold,
            fontFamily: theme.fonts.heading,
            backgroundColor: theme.colors.primary,
          }}
        >
          Configure Facebook Messanger Integration
        </Button>
      ) : (
        <SelectList
          hideLabel
          label="Facebook Page"
          value={formValue.FacebookPage}
          onChange={e => {
            updateDatabase(e.target.value);
            setFormValue({
              ...formValue,
              FacebookPage: e.target.value,
            });
          }}
          placeholder="Facebook Page..."
          options={selectOptions}
        />
      )}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Congrats! Here's Your Facebook Ad Config:</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p style={{ color: 'black' }}>
            Click the button below to copy your Facebook Ad integration config:
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
      </Modal>
    </div>
  );
};

FacebookGrantPagePermissions.propTypes = {
  userId: PropTypes.string.isRequired,
  artistId: PropTypes.string.isRequired,
};