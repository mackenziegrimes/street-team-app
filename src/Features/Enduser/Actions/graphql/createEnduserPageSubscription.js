export const createEnduserPageSubscription = /* GraphQL */ `
  mutation CreateEnduserPageSubscription(
    $input: CreateEnduserPageSubscriptionInput!
    $condition: ModelEnduserPageSubscriptionConditionInput
  ) {
    createEnduserPageSubscription(input: $input, condition: $condition) {
      id
      actionPageID
      enduserID
      referralEnduserID
      enduserTotalPoints
      createdAt
      updatedAt
      enduser {
        id
        username
        firstName
        lastName
        email
        phone
        profileName
        profilePicture
        profileDescription
        profileSocialLink
        tags {
          items {
            id
            enduserID
            tagID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
        EnduserPageSubscription {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserTotalPoints
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        referredSubscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserTotalPoints
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      referralEnduser {
        id
        username
        firstName
        lastName
        email
        phone
        profileName
        profilePicture
        profileDescription
        profileSocialLink
        tags {
          items {
            id
            enduserID
            tagID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
        EnduserPageSubscription {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserTotalPoints
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        referredSubscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserTotalPoints
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      actionPage {
        id
      }
      owner
      enduserPageSubscriptionCompletedActions {
        items {
          id
          enduserPageSubscriptionID
          actionID
          isExpired
          createdAt
          updatedAt
          enduserPageSubscription {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserTotalPoints
            createdAt
            updatedAt
            owner
          }
          action {
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
          owner
        }
        nextToken
      }
    }
  }
`;

export const createEnduserPageSubscriptionCompletedActions = /* GraphQL */ `
  mutation CreateEnduserPageSubscriptionCompletedActions(
    $input: CreateEnduserPageSubscriptionCompletedActionsInput!
    $condition: ModelEnduserPageSubscriptionCompletedActionsConditionInput
  ) {
    createEnduserPageSubscriptionCompletedActions(
      input: $input
      condition: $condition
    ) {
      id
      enduserPageSubscriptionID
      actionID
      isExpired
      createdAt
      updatedAt
      enduserPageSubscription {
        id
        actionPageID
        enduserID
        referralEnduserID
        enduserTotalPoints
        createdAt
        updatedAt
        enduser {
          id
          username
          firstName
          lastName
          email
          phone
          profileName
          profilePicture
          profileDescription
          profileSocialLink
          tags {
            nextToken
          }
          createdAt
          updatedAt
          owner
          EnduserPageSubscription {
            nextToken
          }
          referredSubscribers {
            nextToken
          }
        }
        referralEnduser {
          id
          username
          firstName
          lastName
          email
          phone
          profileName
          profilePicture
          profileDescription
          profileSocialLink
          tags {
            nextToken
          }
          createdAt
          updatedAt
          owner
          EnduserPageSubscription {
            nextToken
          }
          referredSubscribers {
            nextToken
          }
        }
        actionPage {
          id
          artistID
          pictureID
          pageTitle
          heading
          subheading
          pageRoute
          createdAt
          updatedAt
          artist {
            id
            artistName
            genre
            profilePicture
            route
            createdAt
            updatedAt
            owner
          }
          owner
          subscribers {
            nextToken
          }
          actionButtons {
            nextToken
          }
          picture {
            id
            publicUrl
            name
            owner
            visibility
            createdAt
            updatedAt
          }
        }
        owner
        enduserPageSubscriptionCompletedActions {
          items {
            id
            enduserPageSubscriptionID
            actionID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      action {
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
        actionpage {
          id
          artistID
          pictureID
          pageTitle
          heading
          subheading
          pageRoute
          createdAt
          updatedAt
          artist {
            id
            artistName
            genre
            profilePicture
            route
            createdAt
            updatedAt
            owner
          }
          owner
          subscribers {
            nextToken
          }
          actionButtons {
            nextToken
          }
          picture {
            id
            publicUrl
            name
            owner
            visibility
            createdAt
            updatedAt
          }
        }
        owner
        enduserPageSubscriptionCompletedActions {
          items {
            id
            enduserPageSubscriptionID
            actionID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;