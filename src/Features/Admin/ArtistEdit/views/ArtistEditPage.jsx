import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Spinner } from '../../../../Components/UI/Spinner';
import { useGetActionPage } from '../../CreateActions/hooks/useGetActionPage';
import { NavBar } from '../../CreateActions/NavBar';
import { TextField } from '../../../../Components/UI/TextField';

const RootContainer = styled(Container)({
  background: ({ theme }) => theme.colors.black,
  paddingTop: ({ theme }) => theme.spacing.xl,
  paddingBottom: ({ theme }) => theme.spacing.xl,
  height: '100%',
});

export const ArtistEdit = () => {
  const [formState, setFormState] = useState({
    artistName: '',
    genre: '',
    profilePicture: '',
    route: '',
  });

  const {
    loading,
    actionPageId,
    artistRoute,
    actionPageData,
    userId,
    userData,
    artistId,
  } = useGetActionPage();

  useEffect(() => {
    const data = userData?.getArtistUser?.artist;
    console.log('data', data);
    if (data) {
      setFormState({
        artistName: data.artistName,
        genre: data.genre,
        profilePicture: data.profilePicture,
        route: data.route,
      });
    }
  }, [userData]);

  console.log('userData', userData);

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
    <React.Fragment>
      <NavBar headerText="Artist Info" />
      <RootContainer fluid>
        <Row className="justify-content-md-center">
          <Col>
            <TextField label="Artist Name" value={formState.artistName} />
            <TextField label="Route" value={formState.route} />
            <TextField label="Genre" value={formState.genre} />
            <TextField label="Profile Phote" value={formState.profilePicture} />
          </Col>
        </Row>
      </RootContainer>
    </React.Fragment>
  );
};
