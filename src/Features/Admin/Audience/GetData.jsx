import React from 'react';
import { gql, useQuery } from '@apollo/react-hooks';
import {AddPageMessagingWithFacebookSignIn} from '../../../Components/Testing/FBLogin'

const getAllSubscribersFromArtistUser = `query getSubscriptionsFromArtistUser($id: ID!) {
    getArtistUser(id: $id) {
      artist {
        actionPages {
          items {
            subscribers {
              items {
                enduser {
                  email
                  firstName
                  lastName
                  phone
                  profileName
                }
                createdAt
                enduserPageSubscriptionCompletedActions {
                  items {
                    action {
                      pointValue
                      serviceAction
                      createdAt
                      buttonIcon
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `;

const summaryOfEnduser = input => {
  let summary = {};
  summary['email'] = input?.enduser?.email;
  summary['firstName'] = input?.enduser?.firstName;
  summary['lastName'] = input?.enduser?.lastName;
  summary['phone'] = input?.enduser?.phoneNumber;
  summary['id'] = input?.enduserID;
  let totalActionPagePoints = 0;
  // loop through all enduser's completedActions to build the total tally
  const output = input?.enduserPageSubscriptionCompletedActions?.items.forEach(
    action => {
      totalActionPagePoints += parseInt(action.action.pointValue);
    }
  );
  summary['totalPoints'] = totalActionPagePoints;
  return summary;
};

export const Demo = () => {
  const { data: subscriberData, loading } = useQuery(
    gql(getAllSubscribersFromArtistUser),
    {
      // here you would use the id of the logged in artist user
      variables: { id: '81e14afe-5c56-4cc5-bdc4-59ba5fc66f8d' },
    }
  );

  return <AddPageMessagingWithFacebookSignIn/>

  if (loading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  if (subscriberData) {
    // assumes only a single page for each artist
    const summaryData =
      subscriberData.getArtistUser.artist.actionPages.items[0].subscribers.items.map(
        item => summaryOfEnduser(item)
      );
    console.log(`data from enduser ID`, summaryData);
    return summaryData.map(item => (
      <div>
        <h1>{item.email}</h1>
        <h1>{item.totalPoints}</h1>
        <h2>{item.firstName || '[no name]'}</h2>
        <h2>{item.phoneNumber}</h2>
      </div>
    ));
  }
};
