// import React, { useState, useEffect } from 'react';
// import { gql, useQuery, useMutation } from '@apollo/react-hooks';

// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';

// import { useParams } from 'react-router-dom';
// import {createEnduserPageSubscription, createEnduser, createEnduserPageSubscriptionCompletedActions } from '../../../../graphql/mutations'
// import {getEnduser } from '../../../../graphql/queries'
// import {getActionPageAndEnduserDetailsByArtistPageRouteAndEnduserID } from '../graphql/getEnduserActionPageData';
// import { ActionButtons } from '../ActionButtons';
// import { ActionStepper } from '../ActionStepper';
// import { ActionHeader } from '../ActionHeader';
// import { ActionTotalPoints } from '../ActionTotalPoints';
// import { Spinner } from '../../../../Components/UI/Spinner';
// import {
//   ActionPageContainer,
//   StyledContainer,
//   BodyContainer,
// } from '../ActionPageContainer';
// import { Auth } from 'aws-amplify';
// import { AmplifySignOut } from '@aws-amplify/ui-react';

// import { Hub } from 'aws-amplify';

// export const ActionPage = () => {
//   const [actionValues, setActionValues] = useState([]);
//   const [actionPageID, setActionPageID] = useState(0);
//   const [enduserPageSubscriptionID, setEnduserPageSubscriptionID] = useState(0);
//   const [totalPoints, setTotalPoints] = useState(0);
//   const [user, setUser] = useState(null);
//   const [userEmail, setUserEmail] = useState(null);
//   const { artist, page = 'join' } = useParams();




//   window.LOG_LEVEL = 'DEBUG'
//   // get user info from logged in Auth (this should live in the utils directory)
//   Auth.currentAuthenticatedUser({
//     bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
//   })
//     .then(user => {
//       setUser(user);
//       console.log(`Load additional settings for user: ${user.username}`);
//       // console.log("User Info:");
//       console.log(user);
//       setUserEmail(user?.attributes?.email);
//       // console.log("Enduser Fullname:");
//       // console.log(user.attributes);
//       // TBD
//       console.log(`user is `);
//       console.log(user);
//     })
//     .catch(err => console.log(err));

    

// Hub.listen('auth', (data) => {
//     const {payload} = data;
//     if (payload.event === 'signOut') {
//        console.log('signOut');
//     } else if (payload.event === 'signIn') {
//        console.log('A new auth event has happened: ', data.payload.data.username + ' has ' + data.payload.event);
//     }
// });

//     Auth.currentCredentials().then(creds => {
//       console.log('current credentials are: ')
//       console.log(creds)});

//     // sign in as a user in the cognito user pool
//     // Auth.signIn({

//     // })

//     // sign up a user in the cognito user pool
//     // Auth.signUp({
//     //   username: user.email,
//     //   password,
//     //   attributes: {
//     //     email,
//     //     name: ${fname} ${lname},
//     //     phone_number: phoneNumber
//     //   }
//     // })

//   //get the user data for the user -- used for making sure an enduser exists
//   //this could be obtained with the rest of the action page data, but we're likely going to move this logic into a centralized place since we'll need to be verifying a user record exists on lots of pages
//   const {
//     data: enduserData,
//     loading: enduserLoading,
//     error: enduserError,
//     refetch: refetchEnduserData
//   } = useQuery(gql(getEnduser), {
//     variables: { id: user.username },
//   });

//   //define mutation for create a new enduser record
//   const [addEnduser, { loading: createEnduserLoading, data:createEnduserData, error:createEnduserError }] = useMutation(gql(createEnduser),
//   {
//       update(cache, { data: { addEnduser } }) {
//         // const {enduserData} = cache.readQuery({query:gql(getEnduser), input: {id: user.username }});
//         cache.writeQuery({query:gql(getEnduser),data:{enduser: addEnduser}});
//       },
//     refetchQueries: [{query:gql(getEnduser),
//     variables: {id: user.username },
//     }],
//     awaitRefetchQueries:true
    
//   }
//   );

//   //define mutation for creating a new subscription record
//   const [addSubscription, {loading:loadingNewSubscription}] = useMutation(gql(createEnduserPageSubscription),
//   {
//     refetchQueries: [{query:gql(getActionPageAndEnduserDetailsByArtistPageRouteAndEnduserID),
//     variables: { artistRoute: artist, pageRoute: page, enduserID: user.username},
//     }],
//     awaitRefetchQueries:true
//   }
//   );

//   //define mutation for creating a new completedAction record
//   const [addCompletedAction, {loading:loadingCompletedAction}] = useMutation(gql(createEnduserPageSubscriptionCompletedActions),
//   {
//     refetchQueries: [{query:gql(getActionPageAndEnduserDetailsByArtistPageRouteAndEnduserID),
//     variables: { artistRoute: artist, pageRoute: page, enduserID: user.username},
//     }],
//     awaitRefetchQueries:true
//   }
//   );

//   //create a new enduser if one doesn't exist to match Auth credentials
//   if(enduserData!=null && enduserData.getEnduser==null && !createEnduserLoading){
//     console.log("enduserInfo does not exist -- creating enduser");
//     const newEnduserData = addEnduser({variables:{input :{
//       id: user.username,
//       email: user.attributes?.email,
//     } }});
//     console.log(newEnduserData);
//     console.log("enduser record created");
//     refetchEnduserData();
//   }

//   //get the data for building the landing page
//   const { data: actionPageData, loading } = useQuery(
//     gql(getActionPageAndEnduserDetailsByArtistPageRouteAndEnduserID),
//     {
//       variables: { artistRoute: artist, pageRoute: page, enduserID: user.username},
//     }
//   );

//   const handleAction = id => {
//     const updatedActions = actionValues.map(item => {
//       if (item.id === id)
//         return {
//           ...item,
//           complete: true,
//         };
//       return item;
//     });
//     setActionValues(updatedActions);
//     //create completed action record in the database
//     const newCompletedActionRecord = addCompletedAction({variables:{input:{
//       actionID: id,
//       enduserPageSubscriptionID: enduserPageSubscriptionID,
//     }
//     }});
//     console.log(`newSubscription data is ${newCompletedActionRecord}`)
//   };

//   useEffect(() => {
//     let total = 0;
//     for (let i = 0; i < actionValues.length; i++) {
//       const element = actionValues[i];
//       if (element.complete) {
//         total += element.points;
//       }
//     }
//     setTotalPoints(total);
//   }, [actionValues]);

//   useEffect(() => {
//     if (actionPageData && actionPageData?.ArtistByRoute?.items?.length > 0) {
//       // this is currently assuming that 1) artist exsists at this route & 2) only one action page exists at this page route
//       const actionPage = actionPageData.ArtistByRoute.items[0].actionPages.items[0];
//       const completedActions = actionPageData?.ArtistByRoute?.items[0]?.actionPages?.items[0]?.subscribers?.items[0]?.enduserPageSubscriptionCompletedActions.items;
//       const actionArray =
//         actionPage.actionButtons
//           .items;
//       setActionPageID(actionPage.id);
//       const values = [];
//       for (let i = 0; i < actionArray.length; i++) {
//         const element = actionArray[i];
//         //if this id is in the enduserSubscription records completed action record, mark it as complete... there's gotta be a better way to do this -SG
//         const completed = completedActions && completedActions.find(record => record.actionID===element.id) !== undefined
//         values.push({
//           id: element.id,
//           complete: completed,
//           points: +element.pointValue,
//         });
//       }
//       setActionValues(values);
//     }
//   }, [actionPageData]);

//   useEffect(()=>{
//     if (!loadingNewSubscription && actionPageData && actionPageData?.ArtistByRoute?.items[0]?.actionPages?.items[0]?.subscribers?.items?.length < 1){
//       // create a new enduser subscription for this page if one doesn't already exist
//       if(actionPageID && user?.username){
//         // TODO need to add the referral ID here when creating a subscription
//         const newSubscriptionData = addSubscription({variables:{input:{
//           actionPageID: actionPageID,
//           enduserID:user.username,
//         }
//         }});
//         console.log(`newSubscription data is ${newSubscriptionData}`)
//       }
//       else {
//         console.log(`need user.username and actionPageID to create a record`)
//       }
//     }
//     else if(actionPageData?.ArtistByRoute?.items[0]?.actionPages?.items[0]?.subscribers?.items?.length > 0){
//       setEnduserPageSubscriptionID(actionPageData.ArtistByRoute.items[0].actionPages.items[0].subscribers.items[0].id);
//     }
//   })

//   if (loading)
//     return (
//       <ActionPageContainer fluid>
//         <Row className="justify-content-md-center">
//           <Col md="auto" style={{ textAlign: 'center' }}>
//             <Spinner animation="border" role="status" variant="light" />
//           </Col>
//         </Row>
//       </ActionPageContainer>
//     );

//   if (actionPageData?.ArtistByRoute?.items?.length === 0) {
//     return (
//       <Container fluid>
//         <Row>
//           <Col>
//             <h1>No Actions</h1>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }

//   const actionPageInfo =
//     actionPageData.ArtistByRoute.items[0].actionPages.items[0];

//   return (
//     <ActionPageContainer fluid>
//       <StyledContainer fluid>
//         <Row>
//           <Col className="p-0">
//             <ActionStepper currentStep={2} />
//           </Col>
//         </Row>
//         <BodyContainer>
//           <Row className="mb-3">
//             <Col>
//               <ActionHeader data={actionPageInfo} />
//             </Col>
//           </Row>
//           <ActionButtons
//             data={actionPageInfo}
//             state={actionValues}
//             handleAction={handleAction}
//           />
//         </BodyContainer>
//         <Row>
//           <Col className="p-0">
//             <ActionTotalPoints totalPoints={totalPoints} />
//           </Col>
//         </Row>
//       </StyledContainer>
//     </ActionPageContainer>
//   );
// };
