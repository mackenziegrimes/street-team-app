import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Auth } from 'aws-amplify';
import { Button } from '../../Button';
import { SelectList } from '../../SelectList';
import { useTheme } from '../../../../Hooks/useTheme';
import { getBackendApiUrl, facebookAppId } from '../../../../utils/sharedUtils';
import { Spinner } from '../../Spinner';
import { Icon } from '../../../../Components/UI/Icon';

// import { ConsoleLogger } from '@aws-amplify/core';

// todo this should be done using environment variables, but for now this works -2021-11-11 SG
const apiUrl = getBackendApiUrl();

// login with facebook to grant messaging permissions
// TODO we'll want to read the saved data from the database at some point soon, but for now the user can just re-connect if they feel so inclined.

export const CreateStreetTeamApiKey = ({ userId, artistId, streetTeamApiKey }) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [formValue, setFormValue] = useState({
    streetTeamApiKey: '',
  });

  useEffect(() => {
    if(streetTeamApiKey){
      setFormValue({streetTeamApiKey: streetTeamApiKey})
    }
  }, [streetTeamApiKey])

  useEffect(() => {
    if (userId && artistId) {
      // initially this should be loading until we know if there are existing pages or not
      setLoading(false);
    }
  }, [userId, artistId]);
  
  const copyApiKeyToClipboard = () => {
    
    if (streetTeamApiKey) {
      navigator.clipboard.writeText(streetTeamApiKey);
    } else {
      // TODO - need to create a real API key + link to backend
      streetTeamApiKey = 'insert-real-api-key';
      navigator.clipboard.writeText(streetTeamApiKey);
    }

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
  //       setstreetTeamApiKey(response.data);
  //     }
  //     return response;
  //   });
  //   console.log(`returned data`, fbpages);
  // };

  const updateDatabase = async streetTeamApiKey => {
    // TODO this should be a PUT eventually got to change the API first though
    // these values come from the API response from the fb.login response (response.authResponse)
    try {
      if (streetTeamApiKey !== '') {
        console.log(`streetTeamApiKey`, streetTeamApiKey);
        console.log(
          `updating database with these values`,
          userId,
          streetTeamApiKey,
          artistId
        );
        let updateUrl = `${apiUrl}/store-facebook-page-integration?userId=${userId}&artistID=${artistId}&streetTeamApiKey=${streetTeamApiKey}`;
        await fetch(updateUrl, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        })
          .then(rsp => rsp.json())
          .then(json => {
            if (json.error && json.error.message) {
              console.error(json.error.message);
            } else {
              console.log(json);
            }
          });
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div>
        <Spinner animation="border" role="status" variant="light" />
      </div>
    );
  }

  return (
    <div>
      {!streetTeamApiKey ? (
        <Button onClick={copyApiKeyToClipboard}>
          <Icon
            name="FaCopy"
            color="black"
            size={20}
            style={{ marginRight: 10 }}
          />
          Copy Your StreetTeam API Key
        </Button>
      ) : (
        <div>
          <Button onClick={copyApiKeyToClipboard}>
            <Icon
              name="FaCopy"
              color="black"
              size={20}
              style={{ marginRight: 10 }}
            />
            Copy StreetTeamApiKey
          </Button>
        </div>
      )}
    </div>
  );
};

CreateStreetTeamApiKey.propTypes = {
  userId: PropTypes.string.isRequired,
  artistId: PropTypes.string.isRequired,
};
