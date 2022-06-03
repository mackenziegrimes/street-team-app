export const getActionPagesByArtistRoute= `query getActionPagesByArtistRoute($artistRoute: String) {
    ArtistByRoute(route: $artistRoute) {
      items {
        id
        route
        actionPages {
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