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
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';


// import { ConsoleLogger } from '@aws-amplify/core';

// todo this should be done using environment variables, but for now this works -2021-11-11 SG
const apiUrl = getBackendApiUrl();

const OrContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const IconContainer = styled(Col)({
  display: 'flex',
  justifyContent: 'flex-end',
});

const OrText = styled.p({
  marginTop: ({ theme }) => `${theme.spacing.md} !important`,
  marginBottom: ({ theme }) => `${theme.spacing.md} !important`,
  fontSize: ({ theme }) => `${theme.fontSizes.xl} !important`,
  fontWeight: ({ theme }) => `${theme.fontWeights.bold} !important`,
});

// login with facebook to grant ad management permissions
// TODO -- there's a lot of re-used code here from the FacebookGrantPagePermissions.jsx page that could really be cleaned up into shared compnonents
// TODO -- out of scope for this dev cylce, but we should create a better user experience with being able to search for accounts, use the friendly account names etc
export const FacebookGrantAdPermissions = ({ userId, artistId, facebookAdAccountId }) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [facebookPages, setFacebookAdAccounts] = useState();
  const [facebookLoginObject, setFacebookLoginObject] = useState();
  const [formValue, setFormValue] = useState({
    FacebookAdAccount: '',
  });

  useEffect(() => {
    if(facebookAdAccountId){
      console.log(`setting formValue to ${facebookAdAccountId}`)
      setFormValue({FacebookAdAccount: facebookAdAccountId})
    }
  }, [facebookAdAccountId])
  console.log(`facebookAdAccountId is: ${facebookAdAccountId}`)
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

  const getFBAdOptionsFromInternalAPI = async authObject => {
    const { userId, accessToken, facebookUserId } = authObject;
    console.log(`test1 inside user id is`, userId);
    let fetchUrl = `${apiUrl}/get-available-facebook-ad-accounts?&userId=${userId}`;
    if (accessToken && facebookUserId) {
      // if we have an updated access token, supply it. otherwise we just use the one stored in the database for this artist user
      fetchUrl += `&accessToken=${accessToken}&facebookUserId=${facebookUserId}`;
    }
    try {
      console.log(`test1 --- calling fetch with`, fetchUrl);
      await fetch(fetchUrl, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
        .then(rsp => rsp.json())
        .then(json => {
          if (json.error && json.error.message) {
            console.error(json.error.message);
          } else {
            console.log(`facebookOptionsAre`, json);
            const returnData = json?.data?.data?.map(item => {
              const returnObject = { id: item.id, name: item.account_id };
              return returnObject;
            });
            console.log(`return data`, returnData);
            setFacebookAdAccounts(returnData);
          }
        });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (userId && artistId) {
      // initially this should be loading until we know if there are existing pages or not
      setLoading(false);
    }
    if (!facebookPages && userId && artistId) {
      console.log(`test1`, userId);
      // we don't really need the artistId here, but if there isn't one, the page isn't really done loading
      getFBAdOptionsFromInternalAPI({ userId }).then(res => {
        console.log(`internal API resrponse`, res);
      });
    }
  }, [userId, artistId]);

  const addAdditionalFacebookPermission = async () => {
    const fb = window.FB;
    await fb.login(
      response => {
        if (!response || !response.authResponse) {
          return;
        }
        console.log(`got the following response`, response.authResponse);
        if (!facebookPages) {
          const facebookUserId = response?.authResponse?.userID;
          const accessToken = response?.authResponse?.accessToken;
          const input = { userId };
          if (facebookUserId && accessToken) {
            // if the facebook user is actively logged in, use the credentials
            input.facebookUserId = facebookUserId;
            input.accessToken = accessToken;
          }
          console.log(`test1 -- getting FB add accounts with facebook creds`, input);
          setLoading(true);
          getFBAdOptionsFromInternalAPI(input).then(res => {
            console.log(`internal API resrponse`, res);
            setLoading(false);
          });
        }
        setFacebookLoginObject(response.authResponse);
      },
      {
        // the authorized scopes
        scope: 'email,public_profile,pages_messaging,pages_show_list,ads_management',
        return_scopes: true,
      }
    );
  };
  const updateDatabase = async facebookAdAccountId => {
    console.log(`facebookLoginObjectIs`, facebookLoginObject);
    // TODO this should be a PUT eventually got to change the API first though
    // these values come from the API response from the fb.login response (response.authResponse)
    try {
      if (facebookAdAccountId !== '') {
        const facebookAccessToken = facebookLoginObject?.accessToken;
        const facebookUserId = facebookLoginObject?.userID;
        console.log(`facebookAdAccountId`, facebookAdAccountId);
        console.log(
          `updating database with these values`,
          userId,
          facebookAccessToken,
          facebookUserId,
          facebookAdAccountId,
          artistId
        );
        let updateUrl = `${apiUrl}/store-facebook-ad-account-integration`;
        let updateBody = {userId: userId, artistID: artistId, facebookAdAccountId: facebookAdAccountId}
        if (facebookUserId && facebookAccessToken) {
          updateBody['facebookUserAccessToken'] = facebookAccessToken;
          updateBody['facebookUserId'] = facebookUserId;
        }
        await fetch(updateUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updateBody),
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

  console.log(`facebookPages`, facebookPages);

  const selectOptions = useMemo(() => {
    const pleaseSelectOption = {
      value: '',
      label: `Please select a Facebook Ad Account`,
      isDisabled: true,
    };
    let pages = [];
    if (facebookPages) {
      pages = facebookPages.map(item => {
        return { value: item.id, label: item.name };
      });
    }

    return [pleaseSelectOption, ...pages];
  }, [facebookPages]);

  if (loading) {
    return (
      <div>
        <Spinner animation="border" role="status" variant="light" />
      </div>
    );
  }

  return (
    <div>
      {!facebookPages ? (
        <Button
          onClick={addAdditionalFacebookPermission}
          style={{
            fontWeight: theme.fontWeights.semibold,
            fontFamily: theme.fonts.heading,
            backgroundColor: theme.colors.secondary,
          }}
        >
          <Icon
            name="FaFacebook"
            color="black"
            size={20}
            style={{ marginRight: 10 }}
          />
          Connect Facebook Ad Account
        </Button>
      ) : (
        <div>
          <SelectList
            hideLabel
            label="Facebook Ad Account"
            value={formValue.FacebookAdAccount}
            onChange={e => {
              updateDatabase(e.target.value);
              setFormValue({
                ...formValue,
                FacebookAdAccount: e.target.value,
              });
            }}
            placeholder="Facebook Ad..."
            options={selectOptions}
          />
          <OrContainer>
            <OrText>or</OrText>
          </OrContainer>
          <Button
            onClick={addAdditionalFacebookPermission}
            style={{
              fontWeight: theme.fontWeights.semibold,
              fontFamily: theme.fonts.heading,
              backgroundColor: theme.colors.gray,
            }}
          >
            Re-Connect Facebook Ad Account
          </Button>
        </div>
      )}
    </div>
  );
};

FacebookGrantAdPermissions.propTypes = {
  userId: PropTypes.string.isRequired,
  artistId: PropTypes.string.isRequired,
};
