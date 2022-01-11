/* custom queries for actions views */

export const getActionPageAndSubscriberDetailsByArtistPageRoute= `query getArtistActionPageByRoute($artistRoute: String, $pageRoute: String) {
    ArtistByRoute(route: $artistRoute) {
      items {
        id
        route
        artistName
        actionPages(filter: {pageRoute: {eq: $pageRoute}}) {
          items {
            id
            artistID
            creatorUserID
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
  }
  `;
