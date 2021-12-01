import gql from 'graphql-tag';

export const getAllSubscribersFromArtistUser = gql`
  query getSubscriptionsFromArtistUser($id: ID!) {
    getArtistUser(id: $id) {
      artist {
        id
        integrations {
          items {
            id
            artistID
            serviceName
            serviceAccountId
          }
          nextToken
        }
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
