import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
// import { Auth } from 'aws-amplify';
import { Button } from '../../Button';
import { SelectList } from '../../SelectList';
import { useTheme } from '../../../../Hooks/useTheme';
import { getBackendApiUrl , facebookAppId} from '../../../../utils/sharedUtils';
// import { ConsoleLogger } from '@aws-amplify/core';

// todo this should be done using environment variables, but for now this works -2021-11-11 SG
let apiUrl = getBackendApiUrl();

// login with facebook to grant messaging permissions
// TODO we'll want to read the saved data from the database at some point soon, but for now the user can just re-connect if they feel so inclined.
export const FacebookGrantPagePermissions = ({ userId, artistId }) => {
  const theme = useTheme();

  const [facebookPages, setFacebookPages] = useState();
  const [facebookLoginObject, setFacebookLoginObject] = useState();
  const [formValue, setFormValue] = useState({
    FacebookPage: '',
  });

  const fbAsyncInit = () => {
    // init the fb sdk client
    const fb = window.FB;
    fb.init({
      appId: facebookAppId,
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
        `${apiUrl}/get-available-facebook-pages?accessToken=${accessToken}&userID=${userID}`,
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
        `${apiUrl}/store-facebook-page-integration?userId=${userId}&facebookUserAccessToken=${facebookAccessToken}&facebookUserId=${facebookUserId}&artistID=${artistId}&facebookPageId=${facebookPageID}`,
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
          Configure Facebook Messenger Integration
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
    </div>
  );
};

FacebookGrantPagePermissions.propTypes = {
  userId: PropTypes.string.isRequired,
  artistId: PropTypes.string.isRequired,
};
