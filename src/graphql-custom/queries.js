/* these are custom graphQL queries that get used in multiple places */

// this generically gets action page configuration for a given artist route and page route
// used for building an action page
export const getActionPageByArtistAndPageRoute = `query getArtistActionPageByRoute($artistRoute: String, $pageRoute: String) {
    ArtistByRoute(route: $artistRoute) {
      items {
        id
        route
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
  `


export const getActionPageAndEnduserDetailsByArtistPageRouteAndEnduserID = `query getArtistActionPageByRoute($artistRoute: String, $pageRoute: String, $enduserID: String) {
    ArtistByRoute(route: $artistRoute) {
      items {
        id
        route
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
            subscribers(filter: {enduserID: {eq: $enduserID}}) {
              items {
                id
                actionPageID
                enduserID
                referralEnduserID
                enduserPoints
                completedActionButtonIDs
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
  `

export const getActionPageAndSubscriptionDetailsByArtistPageRoute = `query getArtistActionPageByRoute($artistRoute: String, $pageRoute: String) {
    ArtistByRoute(route: $artistRoute) {
      items {
        id
        route
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
                referralEnduserID
                enduserPoints
                completedActionButtonIDs
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
  `

// Query pulls all action pages related to a specific artist (using route as the identifier)
// then also pulls specifically subscription data for those action pages, what endusers did what actions and how many points they're worth
  export const getAllActionPagesAndSubscriptionDetailsByArtist = `query getArtistDetailsByRoute($artistRoute: String) {
    ArtistByRoute(route: $artistRoute) {
      items {
        id
        route
        actionPages {
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
                enduserPageSubscriptionCompletedActions {
                  items {
                    enduserPageSubscription{
                        enduser {
                        firstName
                        lastName
                        phone
                        email
                        id
                      }
                    }
                  }
                }
              }
              nextToken
            }
            subscribers {
              items {
                enduserPageSubscriptionCompletedActions{
                  items {
                    enduserPageSubscription{
                      enduser {
                        firstName
                        lastName
                        phone
                        email
                        id
                      }
                    }
                    action{
                      pointValue
                      id
                    }
                  }
                }
                id
                actionPageID
                enduserID
                enduser {
                  lastName
                  firstName
                  email
                  phone
                  id
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
  `