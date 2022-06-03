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
import { zoomLoginUrl } from './ZoomUrl';


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

// login with Zoom to grant ad management permissions
// TODO -- there's a lot of re-used code here from the FacebookGrantPagePermissions.jsx page that could really be cleaned up into shared compnonents
// TODO -- out of scope for this dev cylce, but we should create a better user experience with being able to search for accounts, use the friendly account names etc
export const ZoomGrantPermissions = ({ userId, artistId, zoomAccountId }) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [zoomAccount, setZoomAccount] = useState();
  const [zoomLoginObject, setZoomLoginObject] = useState();
  const [formValue, setFormValue] = useState({
    ZoomAccount: '',
  });

  useEffect(() => {
    if (zoomAccountId) {
      console.log(`setting formValue to ${zoomAccountId}`);
      setFormValue({ ZoomAccount: zoomAccountId });
    }
  }, [zoomAccountId]);
  console.log(`zoomAccountId is: ${zoomAccountId}`);

  return (
    <div>
      {!zoomAccountId ? (
      <Button
        onClick={() => {
          //go to the Zoom auth login
          window.location.href = zoomLoginUrl;
        }}
        style={{
          fontWeight: theme.fontWeights.semibold,
          fontFamily: theme.fonts.heading,
          backgroundColor: theme.colors.secondary,
        }}
      >
        <Icon
          name="IoVideocam"
          color="black"
          size={20}
          style={{ marginRight: 10 }}
        />
        Connect With Zoom
      </Button>
      ) :
        (<div>
          Your Zoom Integration: ${formValue.ZoomAccount}
      </div>)
      
      }

    </div>
  );
};
  
ZoomGrantPermissions.propTypes = {
  userId: PropTypes.string.isRequired,
  artistId: PropTypes.string.isRequired,
};