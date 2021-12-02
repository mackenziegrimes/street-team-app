import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Spinner } from '../../../../Components/UI/Spinner';
import { useGetActionPage } from '../../CreateActions/hooks/useGetActionPage';
import { NavBar } from '../../CreateActions/NavBar';
import { TextField } from '../../../../Components/UI/TextField';
import { Button } from '../../../../Components/UI/Button';
import { getBackendApiUrl } from '../../../../utils/sharedUtils';

const RootContainer = styled(Container)({
  background: ({ theme }) => theme.colors.black,
  paddingTop: ({ theme }) => theme.spacing.xl,
  paddingBottom: ({ theme }) => theme.spacing.xl,
  height: '100%',
});

const ArtistCard = styled(Card)({
  background: ({ theme }) => theme.colors.gray2,
  width: '100%',
  padding: ({ theme }) => theme.spacing.md,
});

export const ArtistEdit = () => {
  const { loading, userData, artistId, integrations} = useGetActionPage();
  const data = userData?.getArtistUser?.artist;

  const defaultValues = {
    artistName: data?.artistName,
    genre: data?.genre,
    profilePicture: data?.profilePicture,
    route: data?.route,
  };

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  useEffect(() => {
    if (data) {
      reset(defaultValues);
    }
  }, [userData]);

  const apiUrl = getBackendApiUrl();
  const handleUpdate = formData => {
    console.log('formData', formData);
    fetch(
      `${apiUrl}/update-artist`,
      {
        method: 'POST',
        body: JSON.stringify({ id: artistId, ...formData }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(res => res.json())
      .then(res => {
        const resData = res?.data;
        console.log('res', res);
        console.log('resData', resData);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

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

  console.log(`INTEGRAIONTS`,integrations);

  return (
    <React.Fragment>
      <NavBar headerText="Artist Info" artistId={artistId} integrations={integrations}/>
      <RootContainer fluid className="d-flex justify-content-center">
        {/* <Image
          src={getValues('profilePicture')}
          roundedCircle
          style={{ width: 52, height: 52 }}
        /> */}
        <ArtistCard>
          <Row>
            <Col>
              <h1>Artist Profile</h1>
            </Col>
          </Row>
          <Row>
            <Col as="form" onSubmit={handleSubmit(handleUpdate)}>
              <TextField
                label="Artist Name"
                error={errors?.artistName}
                {...register('artistName', {
                  required: true,
                })}
              />
              <TextField
                label="Route"
                error={errors?.route}
                {...register('route', {
                  required: true,
                })}
              />
              <TextField label="Genre" {...register('genre')} />
              <TextField
                label="Profile Picture"
                {...register('profilePicture')}
              />
              <Button type="submit" style={{ marginTop: '25px' }}>
                Save
              </Button>
            </Col>
          </Row>
        </ArtistCard>
      </RootContainer>
    </React.Fragment>
  );
};
