/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createArtist = /* GraphQL */ `
  mutation CreateArtist(
    $input: CreateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    createArtist(input: $input, condition: $condition) {
      id
      artistName
      genre
      profilePicture
      tags {
        items {
          id
          tag
          artistID
          endusers {
            nextToken
          }
          createdAt
          updatedAt
          artist {
            nextToken
          }
        }
        nextToken
      }
      route
      integrations {
        items {
          id
          artistID
          serviceName
          serviceApiKey
          serviceAccountId
          serviceAccountFriendlyName
          serviceApiUrl
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
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
      actionPages {
        items {
          id
          artistID
          creatorUserID
          creatorUser {
            id
            username
            firstName
            lastName
            email
            phoneNumber
            artistID
            facebookUserID
            facebookLongLivedUserAccessToken
            createdAt
            updatedAt
            owner
          }
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
        nextToken
      }
    }
  }
`;
export const updateArtist = /* GraphQL */ `
  mutation UpdateArtist(
    $input: UpdateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    updateArtist(input: $input, condition: $condition) {
      id
      artistName
      genre
      profilePicture
      tags {
        items {
          id
          tag
          artistID
          endusers {
            nextToken
          }
          createdAt
          updatedAt
          artist {
            nextToken
          }
        }
        nextToken
      }
      route
      integrations {
        items {
          id
          artistID
          serviceName
          serviceApiKey
          serviceAccountId
          serviceAccountFriendlyName
          serviceApiUrl
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
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
      actionPages {
        items {
          id
          artistID
          creatorUserID
          creatorUser {
            id
            username
            firstName
            lastName
            email
            phoneNumber
            artistID
            facebookUserID
            facebookLongLivedUserAccessToken
            createdAt
            updatedAt
            owner
          }
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
        nextToken
      }
    }
  }
`;
export const deleteArtist = /* GraphQL */ `
  mutation DeleteArtist(
    $input: DeleteArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    deleteArtist(input: $input, condition: $condition) {
      id
      artistName
      genre
      profilePicture
      tags {
        items {
          id
          tag
          artistID
          endusers {
            nextToken
          }
          createdAt
          updatedAt
          artist {
            nextToken
          }
        }
        nextToken
      }
      route
      integrations {
        items {
          id
          artistID
          serviceName
          serviceApiKey
          serviceAccountId
          serviceAccountFriendlyName
          serviceApiUrl
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
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
      actionPages {
        items {
          id
          artistID
          creatorUserID
          creatorUser {
            id
            username
            firstName
            lastName
            email
            phoneNumber
            artistID
            facebookUserID
            facebookLongLivedUserAccessToken
            createdAt
            updatedAt
            owner
          }
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
        nextToken
      }
    }
  }
`;
export const createArtistIntegrations = /* GraphQL */ `
  mutation CreateArtistIntegrations(
    $input: CreateArtistIntegrationsInput!
    $condition: ModelArtistIntegrationsConditionInput
  ) {
    createArtistIntegrations(input: $input, condition: $condition) {
      id
      artistID
      serviceName
      serviceApiKey
      serviceAccountId
      serviceAccountFriendlyName
      serviceApiUrl
      createdAt
      updatedAt
      artist {
        id
        artistName
        genre
        profilePicture
        tags {
          items {
            id
            tag
            artistID
            createdAt
            updatedAt
          }
          nextToken
        }
        route
        integrations {
          items {
            id
            artistID
            serviceName
            serviceApiKey
            serviceAccountId
            serviceAccountFriendlyName
            serviceApiUrl
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
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
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const updateArtistIntegrations = /* GraphQL */ `
  mutation UpdateArtistIntegrations(
    $input: UpdateArtistIntegrationsInput!
    $condition: ModelArtistIntegrationsConditionInput
  ) {
    updateArtistIntegrations(input: $input, condition: $condition) {
      id
      artistID
      serviceName
      serviceApiKey
      serviceAccountId
      serviceAccountFriendlyName
      serviceApiUrl
      createdAt
      updatedAt
      artist {
        id
        artistName
        genre
        profilePicture
        tags {
          items {
            id
            tag
            artistID
            createdAt
            updatedAt
          }
          nextToken
        }
        route
        integrations {
          items {
            id
            artistID
            serviceName
            serviceApiKey
            serviceAccountId
            serviceAccountFriendlyName
            serviceApiUrl
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
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
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const deleteArtistIntegrations = /* GraphQL */ `
  mutation DeleteArtistIntegrations(
    $input: DeleteArtistIntegrationsInput!
    $condition: ModelArtistIntegrationsConditionInput
  ) {
    deleteArtistIntegrations(input: $input, condition: $condition) {
      id
      artistID
      serviceName
      serviceApiKey
      serviceAccountId
      serviceAccountFriendlyName
      serviceApiUrl
      createdAt
      updatedAt
      artist {
        id
        artistName
        genre
        profilePicture
        tags {
          items {
            id
            tag
            artistID
            createdAt
            updatedAt
          }
          nextToken
        }
        route
        integrations {
          items {
            id
            artistID
            serviceName
            serviceApiKey
            serviceAccountId
            serviceAccountFriendlyName
            serviceApiUrl
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
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
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const createEnduser = /* GraphQL */ `
  mutation CreateEnduser(
    $input: CreateEnduserInput!
    $condition: ModelEnduserConditionInput
  ) {
    createEnduser(input: $input, condition: $condition) {
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
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
      tags {
        items {
          id
          enduserID
          tagID
          tag {
            id
            tag
            artistID
            createdAt
            updatedAt
          }
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
            createdAt
            updatedAt
            owner
          }
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
          facebookPageScopedId
          enduserTotalPoints
          enduserRanking
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
            createdAt
            updatedAt
            owner
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
            createdAt
            updatedAt
            owner
          }
          actionPage {
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
          }
          owner
          enduserPageSubscriptionCompletedActions {
            nextToken
          }
        }
        nextToken
      }
      referredSubscribers {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          facebookPageScopedId
          enduserTotalPoints
          enduserRanking
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
            createdAt
            updatedAt
            owner
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
            createdAt
            updatedAt
            owner
          }
          actionPage {
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
          }
          owner
          enduserPageSubscriptionCompletedActions {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const updateEnduser = /* GraphQL */ `
  mutation UpdateEnduser(
    $input: UpdateEnduserInput!
    $condition: ModelEnduserConditionInput
  ) {
    updateEnduser(input: $input, condition: $condition) {
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
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
      tags {
        items {
          id
          enduserID
          tagID
          tag {
            id
            tag
            artistID
            createdAt
            updatedAt
          }
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
            createdAt
            updatedAt
            owner
          }
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
          facebookPageScopedId
          enduserTotalPoints
          enduserRanking
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
            createdAt
            updatedAt
            owner
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
            createdAt
            updatedAt
            owner
          }
          actionPage {
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
          }
          owner
          enduserPageSubscriptionCompletedActions {
            nextToken
          }
        }
        nextToken
      }
      referredSubscribers {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          facebookPageScopedId
          enduserTotalPoints
          enduserRanking
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
            createdAt
            updatedAt
            owner
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
            createdAt
            updatedAt
            owner
          }
          actionPage {
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
          }
          owner
          enduserPageSubscriptionCompletedActions {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const deleteEnduser = /* GraphQL */ `
  mutation DeleteEnduser(
    $input: DeleteEnduserInput!
    $condition: ModelEnduserConditionInput
  ) {
    deleteEnduser(input: $input, condition: $condition) {
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
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
      tags {
        items {
          id
          enduserID
          tagID
          tag {
            id
            tag
            artistID
            createdAt
            updatedAt
          }
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
            createdAt
            updatedAt
            owner
          }
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
          facebookPageScopedId
          enduserTotalPoints
          enduserRanking
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
            createdAt
            updatedAt
            owner
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
            createdAt
            updatedAt
            owner
          }
          actionPage {
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
          }
          owner
          enduserPageSubscriptionCompletedActions {
            nextToken
          }
        }
        nextToken
      }
      referredSubscribers {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          facebookPageScopedId
          enduserTotalPoints
          enduserRanking
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
            createdAt
            updatedAt
            owner
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
            createdAt
            updatedAt
            owner
          }
          actionPage {
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
          }
          owner
          enduserPageSubscriptionCompletedActions {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const createArtistUser = /* GraphQL */ `
  mutation CreateArtistUser(
    $input: CreateArtistUserInput!
    $condition: ModelArtistUserConditionInput
  ) {
    createArtistUser(input: $input, condition: $condition) {
      id
      username
      firstName
      lastName
      email
      phoneNumber
      artistID
      facebookUserID
      facebookLongLivedUserAccessToken
      createdAt
      updatedAt
      artist {
        id
        artistName
        genre
        profilePicture
        tags {
          items {
            id
            tag
            artistID
            createdAt
            updatedAt
          }
          nextToken
        }
        route
        integrations {
          items {
            id
            artistID
            serviceName
            serviceApiKey
            serviceAccountId
            serviceAccountFriendlyName
            serviceApiUrl
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
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
          }
          nextToken
        }
      }
      owner
      actionPages {
        items {
          id
          artistID
          creatorUserID
          creatorUser {
            id
            username
            firstName
            lastName
            email
            phoneNumber
            artistID
            facebookUserID
            facebookLongLivedUserAccessToken
            createdAt
            updatedAt
            owner
          }
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
        nextToken
      }
    }
  }
`;
export const updateArtistUser = /* GraphQL */ `
  mutation UpdateArtistUser(
    $input: UpdateArtistUserInput!
    $condition: ModelArtistUserConditionInput
  ) {
    updateArtistUser(input: $input, condition: $condition) {
      id
      username
      firstName
      lastName
      email
      phoneNumber
      artistID
      facebookUserID
      facebookLongLivedUserAccessToken
      createdAt
      updatedAt
      artist {
        id
        artistName
        genre
        profilePicture
        tags {
          items {
            id
            tag
            artistID
            createdAt
            updatedAt
          }
          nextToken
        }
        route
        integrations {
          items {
            id
            artistID
            serviceName
            serviceApiKey
            serviceAccountId
            serviceAccountFriendlyName
            serviceApiUrl
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
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
          }
          nextToken
        }
      }
      owner
      actionPages {
        items {
          id
          artistID
          creatorUserID
          creatorUser {
            id
            username
            firstName
            lastName
            email
            phoneNumber
            artistID
            facebookUserID
            facebookLongLivedUserAccessToken
            createdAt
            updatedAt
            owner
          }
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
        nextToken
      }
    }
  }
`;
export const deleteArtistUser = /* GraphQL */ `
  mutation DeleteArtistUser(
    $input: DeleteArtistUserInput!
    $condition: ModelArtistUserConditionInput
  ) {
    deleteArtistUser(input: $input, condition: $condition) {
      id
      username
      firstName
      lastName
      email
      phoneNumber
      artistID
      facebookUserID
      facebookLongLivedUserAccessToken
      createdAt
      updatedAt
      artist {
        id
        artistName
        genre
        profilePicture
        tags {
          items {
            id
            tag
            artistID
            createdAt
            updatedAt
          }
          nextToken
        }
        route
        integrations {
          items {
            id
            artistID
            serviceName
            serviceApiKey
            serviceAccountId
            serviceAccountFriendlyName
            serviceApiUrl
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
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
          }
          nextToken
        }
      }
      owner
      actionPages {
        items {
          id
          artistID
          creatorUserID
          creatorUser {
            id
            username
            firstName
            lastName
            email
            phoneNumber
            artistID
            facebookUserID
            facebookLongLivedUserAccessToken
            createdAt
            updatedAt
            owner
          }
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
        nextToken
      }
    }
  }
`;
export const createActionPage = /* GraphQL */ `
  mutation CreateActionPage(
    $input: CreateActionPageInput!
    $condition: ModelActionPageConditionInput
  ) {
    createActionPage(input: $input, condition: $condition) {
      id
      artistID
      creatorUserID
      creatorUser {
        id
        username
        firstName
        lastName
        email
        phoneNumber
        artistID
        facebookUserID
        facebookLongLivedUserAccessToken
        createdAt
        updatedAt
        artist {
          id
          artistName
          genre
          profilePicture
          tags {
            nextToken
          }
          route
          integrations {
            nextToken
          }
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
        }
        owner
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
          }
          nextToken
        }
      }
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
        tags {
          items {
            id
            tag
            artistID
            createdAt
            updatedAt
          }
          nextToken
        }
        route
        integrations {
          items {
            id
            artistID
            serviceName
            serviceApiKey
            serviceAccountId
            serviceAccountFriendlyName
            serviceApiUrl
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
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
          }
          nextToken
        }
      }
      owner
      subscribers {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          facebookPageScopedId
          enduserTotalPoints
          enduserRanking
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
            createdAt
            updatedAt
            owner
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
            createdAt
            updatedAt
            owner
          }
          actionPage {
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
          }
          owner
          enduserPageSubscriptionCompletedActions {
            nextToken
          }
        }
        nextToken
      }
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
          actionpage {
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
          }
          owner
          enduserPageSubscriptionCompletedActions {
            nextToken
          }
        }
        nextToken
      }
      picture {
        id
        publicUrl
        name
        owner
        visibility
        createdAt
        file {
          bucket
          region
          key
        }
        updatedAt
      }
    }
  }
`;
export const updateActionPage = /* GraphQL */ `
  mutation UpdateActionPage(
    $input: UpdateActionPageInput!
    $condition: ModelActionPageConditionInput
  ) {
    updateActionPage(input: $input, condition: $condition) {
      id
      artistID
      creatorUserID
      creatorUser {
        id
        username
        firstName
        lastName
        email
        phoneNumber
        artistID
        facebookUserID
        facebookLongLivedUserAccessToken
        createdAt
        updatedAt
        artist {
          id
          artistName
          genre
          profilePicture
          tags {
            nextToken
          }
          route
          integrations {
            nextToken
          }
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
        }
        owner
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
          }
          nextToken
        }
      }
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
        tags {
          items {
            id
            tag
            artistID
            createdAt
            updatedAt
          }
          nextToken
        }
        route
        integrations {
          items {
            id
            artistID
            serviceName
            serviceApiKey
            serviceAccountId
            serviceAccountFriendlyName
            serviceApiUrl
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
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
          }
          nextToken
        }
      }
      owner
      subscribers {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          facebookPageScopedId
          enduserTotalPoints
          enduserRanking
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
            createdAt
            updatedAt
            owner
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
            createdAt
            updatedAt
            owner
          }
          actionPage {
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
          }
          owner
          enduserPageSubscriptionCompletedActions {
            nextToken
          }
        }
        nextToken
      }
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
          actionpage {
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
          }
          owner
          enduserPageSubscriptionCompletedActions {
            nextToken
          }
        }
        nextToken
      }
      picture {
        id
        publicUrl
        name
        owner
        visibility
        createdAt
        file {
          bucket
          region
          key
        }
        updatedAt
      }
    }
  }
`;
export const deleteActionPage = /* GraphQL */ `
  mutation DeleteActionPage(
    $input: DeleteActionPageInput!
    $condition: ModelActionPageConditionInput
  ) {
    deleteActionPage(input: $input, condition: $condition) {
      id
      artistID
      creatorUserID
      creatorUser {
        id
        username
        firstName
        lastName
        email
        phoneNumber
        artistID
        facebookUserID
        facebookLongLivedUserAccessToken
        createdAt
        updatedAt
        artist {
          id
          artistName
          genre
          profilePicture
          tags {
            nextToken
          }
          route
          integrations {
            nextToken
          }
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
        }
        owner
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
          }
          nextToken
        }
      }
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
        tags {
          items {
            id
            tag
            artistID
            createdAt
            updatedAt
          }
          nextToken
        }
        route
        integrations {
          items {
            id
            artistID
            serviceName
            serviceApiKey
            serviceAccountId
            serviceAccountFriendlyName
            serviceApiUrl
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
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
          }
          nextToken
        }
      }
      owner
      subscribers {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          facebookPageScopedId
          enduserTotalPoints
          enduserRanking
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
            createdAt
            updatedAt
            owner
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
            createdAt
            updatedAt
            owner
          }
          actionPage {
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
          }
          owner
          enduserPageSubscriptionCompletedActions {
            nextToken
          }
        }
        nextToken
      }
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
          actionpage {
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
          }
          owner
          enduserPageSubscriptionCompletedActions {
            nextToken
          }
        }
        nextToken
      }
      picture {
        id
        publicUrl
        name
        owner
        visibility
        createdAt
        file {
          bucket
          region
          key
        }
        updatedAt
      }
    }
  }
`;
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
      facebookPageScopedId
      enduserTotalPoints
      enduserRanking
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
            owner
          }
          nextToken
        }
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
            owner
          }
          nextToken
        }
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      actionPage {
        id
        artistID
        creatorUserID
        creatorUser {
          id
          username
          firstName
          lastName
          email
          phoneNumber
          artistID
          facebookUserID
          facebookLongLivedUserAccessToken
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
          actionPages {
            nextToken
          }
        }
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
          tags {
            nextToken
          }
          route
          integrations {
            nextToken
          }
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
        }
        owner
        subscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
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
          enduserPageSubscription {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
export const updateEnduserPageSubscription = /* GraphQL */ `
  mutation UpdateEnduserPageSubscription(
    $input: UpdateEnduserPageSubscriptionInput!
    $condition: ModelEnduserPageSubscriptionConditionInput
  ) {
    updateEnduserPageSubscription(input: $input, condition: $condition) {
      id
      actionPageID
      enduserID
      referralEnduserID
      facebookPageScopedId
      enduserTotalPoints
      enduserRanking
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
            owner
          }
          nextToken
        }
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
            owner
          }
          nextToken
        }
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      actionPage {
        id
        artistID
        creatorUserID
        creatorUser {
          id
          username
          firstName
          lastName
          email
          phoneNumber
          artistID
          facebookUserID
          facebookLongLivedUserAccessToken
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
          actionPages {
            nextToken
          }
        }
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
          tags {
            nextToken
          }
          route
          integrations {
            nextToken
          }
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
        }
        owner
        subscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
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
          enduserPageSubscription {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
export const deleteEnduserPageSubscription = /* GraphQL */ `
  mutation DeleteEnduserPageSubscription(
    $input: DeleteEnduserPageSubscriptionInput!
    $condition: ModelEnduserPageSubscriptionConditionInput
  ) {
    deleteEnduserPageSubscription(input: $input, condition: $condition) {
      id
      actionPageID
      enduserID
      referralEnduserID
      facebookPageScopedId
      enduserTotalPoints
      enduserRanking
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
            owner
          }
          nextToken
        }
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
            owner
          }
          nextToken
        }
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      actionPage {
        id
        artistID
        creatorUserID
        creatorUser {
          id
          username
          firstName
          lastName
          email
          phoneNumber
          artistID
          facebookUserID
          facebookLongLivedUserAccessToken
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
          actionPages {
            nextToken
          }
        }
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
          tags {
            nextToken
          }
          route
          integrations {
            nextToken
          }
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
        }
        owner
        subscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
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
          enduserPageSubscription {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
export const createActionPageButton = /* GraphQL */ `
  mutation CreateActionPageButton(
    $input: CreateActionPageButtonInput!
    $condition: ModelActionPageButtonConditionInput
  ) {
    createActionPageButton(input: $input, condition: $condition) {
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
        creatorUserID
        creatorUser {
          id
          username
          firstName
          lastName
          email
          phoneNumber
          artistID
          facebookUserID
          facebookLongLivedUserAccessToken
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
          actionPages {
            nextToken
          }
        }
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
          tags {
            nextToken
          }
          route
          integrations {
            nextToken
          }
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
        }
        owner
        subscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
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
          enduserPageSubscription {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
export const updateActionPageButton = /* GraphQL */ `
  mutation UpdateActionPageButton(
    $input: UpdateActionPageButtonInput!
    $condition: ModelActionPageButtonConditionInput
  ) {
    updateActionPageButton(input: $input, condition: $condition) {
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
        creatorUserID
        creatorUser {
          id
          username
          firstName
          lastName
          email
          phoneNumber
          artistID
          facebookUserID
          facebookLongLivedUserAccessToken
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
          actionPages {
            nextToken
          }
        }
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
          tags {
            nextToken
          }
          route
          integrations {
            nextToken
          }
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
        }
        owner
        subscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
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
          enduserPageSubscription {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
export const deleteActionPageButton = /* GraphQL */ `
  mutation DeleteActionPageButton(
    $input: DeleteActionPageButtonInput!
    $condition: ModelActionPageButtonConditionInput
  ) {
    deleteActionPageButton(input: $input, condition: $condition) {
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
        creatorUserID
        creatorUser {
          id
          username
          firstName
          lastName
          email
          phoneNumber
          artistID
          facebookUserID
          facebookLongLivedUserAccessToken
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
          actionPages {
            nextToken
          }
        }
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
          tags {
            nextToken
          }
          route
          integrations {
            nextToken
          }
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
        }
        owner
        subscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
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
          enduserPageSubscription {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
        facebookPageScopedId
        enduserTotalPoints
        enduserRanking
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
          integrations {
            nextToken
          }
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
          integrations {
            nextToken
          }
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
          creatorUserID
          creatorUser {
            id
            username
            firstName
            lastName
            email
            phoneNumber
            artistID
            facebookUserID
            facebookLongLivedUserAccessToken
            createdAt
            updatedAt
            owner
          }
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
          creatorUserID
          creatorUser {
            id
            username
            firstName
            lastName
            email
            phoneNumber
            artistID
            facebookUserID
            facebookLongLivedUserAccessToken
            createdAt
            updatedAt
            owner
          }
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
export const updateEnduserPageSubscriptionCompletedActions = /* GraphQL */ `
  mutation UpdateEnduserPageSubscriptionCompletedActions(
    $input: UpdateEnduserPageSubscriptionCompletedActionsInput!
    $condition: ModelEnduserPageSubscriptionCompletedActionsConditionInput
  ) {
    updateEnduserPageSubscriptionCompletedActions(
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
        facebookPageScopedId
        enduserTotalPoints
        enduserRanking
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
          integrations {
            nextToken
          }
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
          integrations {
            nextToken
          }
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
          creatorUserID
          creatorUser {
            id
            username
            firstName
            lastName
            email
            phoneNumber
            artistID
            facebookUserID
            facebookLongLivedUserAccessToken
            createdAt
            updatedAt
            owner
          }
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
          creatorUserID
          creatorUser {
            id
            username
            firstName
            lastName
            email
            phoneNumber
            artistID
            facebookUserID
            facebookLongLivedUserAccessToken
            createdAt
            updatedAt
            owner
          }
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
export const deleteEnduserPageSubscriptionCompletedActions = /* GraphQL */ `
  mutation DeleteEnduserPageSubscriptionCompletedActions(
    $input: DeleteEnduserPageSubscriptionCompletedActionsInput!
    $condition: ModelEnduserPageSubscriptionCompletedActionsConditionInput
  ) {
    deleteEnduserPageSubscriptionCompletedActions(
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
        facebookPageScopedId
        enduserTotalPoints
        enduserRanking
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
          integrations {
            nextToken
          }
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
          integrations {
            nextToken
          }
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
          creatorUserID
          creatorUser {
            id
            username
            firstName
            lastName
            email
            phoneNumber
            artistID
            facebookUserID
            facebookLongLivedUserAccessToken
            createdAt
            updatedAt
            owner
          }
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
          creatorUserID
          creatorUser {
            id
            username
            firstName
            lastName
            email
            phoneNumber
            artistID
            facebookUserID
            facebookLongLivedUserAccessToken
            createdAt
            updatedAt
            owner
          }
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
export const createEnduserArtistSubscription = /* GraphQL */ `
  mutation CreateEnduserArtistSubscription(
    $input: CreateEnduserArtistSubscriptionInput!
    $condition: ModelEnduserArtistSubscriptionConditionInput
  ) {
    createEnduserArtistSubscription(input: $input, condition: $condition) {
      id
      artistID
      enduserID
      referralEnduserID
      createdAt
      updatedAt
      artist {
        id
        artistName
        genre
        profilePicture
        tags {
          items {
            id
            tag
            artistID
            createdAt
            updatedAt
          }
          nextToken
        }
        route
        integrations {
          items {
            id
            artistID
            serviceName
            serviceApiKey
            serviceAccountId
            serviceAccountFriendlyName
            serviceApiUrl
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
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
          }
          nextToken
        }
      }
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
            owner
          }
          nextToken
        }
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
            owner
          }
          nextToken
        }
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
export const updateEnduserArtistSubscription = /* GraphQL */ `
  mutation UpdateEnduserArtistSubscription(
    $input: UpdateEnduserArtistSubscriptionInput!
    $condition: ModelEnduserArtistSubscriptionConditionInput
  ) {
    updateEnduserArtistSubscription(input: $input, condition: $condition) {
      id
      artistID
      enduserID
      referralEnduserID
      createdAt
      updatedAt
      artist {
        id
        artistName
        genre
        profilePicture
        tags {
          items {
            id
            tag
            artistID
            createdAt
            updatedAt
          }
          nextToken
        }
        route
        integrations {
          items {
            id
            artistID
            serviceName
            serviceApiKey
            serviceAccountId
            serviceAccountFriendlyName
            serviceApiUrl
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
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
          }
          nextToken
        }
      }
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
            owner
          }
          nextToken
        }
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
            owner
          }
          nextToken
        }
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
export const deleteEnduserArtistSubscription = /* GraphQL */ `
  mutation DeleteEnduserArtistSubscription(
    $input: DeleteEnduserArtistSubscriptionInput!
    $condition: ModelEnduserArtistSubscriptionConditionInput
  ) {
    deleteEnduserArtistSubscription(input: $input, condition: $condition) {
      id
      artistID
      enduserID
      referralEnduserID
      createdAt
      updatedAt
      artist {
        id
        artistName
        genre
        profilePicture
        tags {
          items {
            id
            tag
            artistID
            createdAt
            updatedAt
          }
          nextToken
        }
        route
        integrations {
          items {
            id
            artistID
            serviceName
            serviceApiKey
            serviceAccountId
            serviceAccountFriendlyName
            serviceApiUrl
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
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
          }
          nextToken
        }
      }
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
            owner
          }
          nextToken
        }
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
            owner
          }
          nextToken
        }
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
export const createEnduserTag = /* GraphQL */ `
  mutation CreateEnduserTag(
    $input: CreateEnduserTagInput!
    $condition: ModelEnduserTagConditionInput
  ) {
    createEnduserTag(input: $input, condition: $condition) {
      id
      tag
      artistID
      endusers {
        items {
          id
          enduserID
          tagID
          tag {
            id
            tag
            artistID
            createdAt
            updatedAt
          }
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
            createdAt
            updatedAt
            owner
          }
        }
        nextToken
      }
      createdAt
      updatedAt
      artist {
        items {
          id
          artistName
          genre
          profilePicture
          tags {
            nextToken
          }
          route
          integrations {
            nextToken
          }
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const updateEnduserTag = /* GraphQL */ `
  mutation UpdateEnduserTag(
    $input: UpdateEnduserTagInput!
    $condition: ModelEnduserTagConditionInput
  ) {
    updateEnduserTag(input: $input, condition: $condition) {
      id
      tag
      artistID
      endusers {
        items {
          id
          enduserID
          tagID
          tag {
            id
            tag
            artistID
            createdAt
            updatedAt
          }
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
            createdAt
            updatedAt
            owner
          }
        }
        nextToken
      }
      createdAt
      updatedAt
      artist {
        items {
          id
          artistName
          genre
          profilePicture
          tags {
            nextToken
          }
          route
          integrations {
            nextToken
          }
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const deleteEnduserTag = /* GraphQL */ `
  mutation DeleteEnduserTag(
    $input: DeleteEnduserTagInput!
    $condition: ModelEnduserTagConditionInput
  ) {
    deleteEnduserTag(input: $input, condition: $condition) {
      id
      tag
      artistID
      endusers {
        items {
          id
          enduserID
          tagID
          tag {
            id
            tag
            artistID
            createdAt
            updatedAt
          }
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
            createdAt
            updatedAt
            owner
          }
        }
        nextToken
      }
      createdAt
      updatedAt
      artist {
        items {
          id
          artistName
          genre
          profilePicture
          tags {
            nextToken
          }
          route
          integrations {
            nextToken
          }
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const createTagEnduserConnector = /* GraphQL */ `
  mutation CreateTagEnduserConnector(
    $input: CreateTagEnduserConnectorInput!
    $condition: ModelTagEnduserConnectorConditionInput
  ) {
    createTagEnduserConnector(input: $input, condition: $condition) {
      id
      enduserID
      tagID
      tag {
        id
        tag
        artistID
        endusers {
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
        artist {
          items {
            id
            artistName
            genre
            profilePicture
            route
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
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
            owner
          }
          nextToken
        }
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
    }
  }
`;
export const updateTagEnduserConnector = /* GraphQL */ `
  mutation UpdateTagEnduserConnector(
    $input: UpdateTagEnduserConnectorInput!
    $condition: ModelTagEnduserConnectorConditionInput
  ) {
    updateTagEnduserConnector(input: $input, condition: $condition) {
      id
      enduserID
      tagID
      tag {
        id
        tag
        artistID
        endusers {
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
        artist {
          items {
            id
            artistName
            genre
            profilePicture
            route
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
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
            owner
          }
          nextToken
        }
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
    }
  }
`;
export const deleteTagEnduserConnector = /* GraphQL */ `
  mutation DeleteTagEnduserConnector(
    $input: DeleteTagEnduserConnectorInput!
    $condition: ModelTagEnduserConnectorConditionInput
  ) {
    deleteTagEnduserConnector(input: $input, condition: $condition) {
      id
      enduserID
      tagID
      tag {
        id
        tag
        artistID
        endusers {
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
        artist {
          items {
            id
            artistName
            genre
            profilePicture
            route
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
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
            owner
          }
          nextToken
        }
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
    }
  }
`;
export const createEnduserIntegrations = /* GraphQL */ `
  mutation CreateEnduserIntegrations(
    $input: CreateEnduserIntegrationsInput!
    $condition: ModelEnduserIntegrationsConditionInput
  ) {
    createEnduserIntegrations(input: $input, condition: $condition) {
      id
      enduserID
      serviceName
      serviceApiKey
      serviceAccountId
      serviceAccountFriendlyName
      serviceApiUrl
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
            owner
          }
          nextToken
        }
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
export const updateEnduserIntegrations = /* GraphQL */ `
  mutation UpdateEnduserIntegrations(
    $input: UpdateEnduserIntegrationsInput!
    $condition: ModelEnduserIntegrationsConditionInput
  ) {
    updateEnduserIntegrations(input: $input, condition: $condition) {
      id
      enduserID
      serviceName
      serviceApiKey
      serviceAccountId
      serviceAccountFriendlyName
      serviceApiUrl
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
            owner
          }
          nextToken
        }
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
export const deleteEnduserIntegrations = /* GraphQL */ `
  mutation DeleteEnduserIntegrations(
    $input: DeleteEnduserIntegrationsInput!
    $condition: ModelEnduserIntegrationsConditionInput
  ) {
    deleteEnduserIntegrations(input: $input, condition: $condition) {
      id
      enduserID
      serviceName
      serviceApiKey
      serviceAccountId
      serviceAccountFriendlyName
      serviceApiUrl
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
            owner
          }
          nextToken
        }
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
            facebookPageScopedId
            enduserTotalPoints
            enduserRanking
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
export const createPicture = /* GraphQL */ `
  mutation CreatePicture(
    $input: CreatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    createPicture(input: $input, condition: $condition) {
      id
      publicUrl
      name
      owner
      visibility
      createdAt
      file {
        bucket
        region
        key
      }
      updatedAt
    }
  }
`;
export const updatePicture = /* GraphQL */ `
  mutation UpdatePicture(
    $input: UpdatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    updatePicture(input: $input, condition: $condition) {
      id
      publicUrl
      name
      owner
      visibility
      createdAt
      file {
        bucket
        region
        key
      }
      updatedAt
    }
  }
`;
export const deletePicture = /* GraphQL */ `
  mutation DeletePicture(
    $input: DeletePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    deletePicture(input: $input, condition: $condition) {
      id
      publicUrl
      name
      owner
      visibility
      createdAt
      file {
        bucket
        region
        key
      }
      updatedAt
    }
  }
`;
