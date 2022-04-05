import gql from 'graphql-tag';

export const getAllSubscribersFromArtistUser = gql`
  query getSubscriptionsFromArtistUser($id: ID!, $limit: Int, $nextToken: String) {
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
            subscribers (limit: $limit, nextToken: $nextToken){
              nextToken
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
