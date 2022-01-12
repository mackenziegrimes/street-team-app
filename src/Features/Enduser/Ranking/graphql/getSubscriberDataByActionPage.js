/* custom queries for actions views */

export const getActionPageAndSubscriberDetailsByArtistPageRoute= `query getArtistActionPageByRoute($artistRoute: String, $pageRoute: String, $userId: ID!) {
  ArtistByRoute(route: $artistRoute) {
    items {
      id
      route
      artistName
      actionPages(filter: {pageRoute: {eq: $pageRoute}}) {
        items {
          id
          artistID
          pictureID
          pageTitle
          heading
          subheading
          pageRoute
          createdAt
          updatedAt
          owner
          actionButtons {
            items {
              id
              actionPageID
              preActionText
              postActionText
              buttonIcon
              backgroundColor
              textColor
              pointValue
              position
              targetURL
              serviceAction
              createdAt
              updatedAt 
              owner
            }
            nextToken
          }
          subscribers {
              items {
                  id
                  actionPageID
                  enduserID
                  enduser {
                      firstName
                      lastName
                      profileName
                    }
                    enduserPageSubscriptionCompletedActions {
                      items {
                        isExpired
                        owner
                        action {
                          id
                          pointValue
                          serviceAction
                          createdAt
                          buttonIcon
                        }
                      }
                    }
                  referralEnduserID
                  createdAt
                  updatedAt
                  owner
                  }
            nextToken
          }
        }
        nextToken
      }
    }
  }
  getEnduser(id: $userId) {
    id
    username
    firstName
    lastName
    email
    integrations {
      items {
        id
        enduserID
        serviceName
        serviceApiKey
        serviceAccountId
        serviceAccountFriendlyName
        serviceApiUrl
        createdAt
        updatedAt
      }
    }
  }
}
`;
