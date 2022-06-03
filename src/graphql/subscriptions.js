/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArtist = /* GraphQL */ `
  subscription OnCreateArtist($owner: String) {
    onCreateArtist(owner: $owner) {
      id
      artistName
      genre
      profilePicture
      route
      createdAt
      updatedAt
      owner
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
          creatorUser {
            id
            username
            globalId
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
      tags {
        items {
          id
          tagName
          artistID
          createdAt
          updatedAt
          artist {
            nextToken
          }
          owner
          endusers {
            nextToken
          }
        }
        nextToken
      }
      summaryData {
        items {
          id
          artistID
          timeFrameStart
          timeFrameEnd
          type
          properties
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
    }
  }
`;
export const onUpdateArtist = /* GraphQL */ `
  subscription OnUpdateArtist($owner: String) {
    onUpdateArtist(owner: $owner) {
      id
      artistName
      genre
      profilePicture
      route
      createdAt
      updatedAt
      owner
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
          creatorUser {
            id
            username
            globalId
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
      tags {
        items {
          id
          tagName
          artistID
          createdAt
          updatedAt
          artist {
            nextToken
          }
          owner
          endusers {
            nextToken
          }
        }
        nextToken
      }
      summaryData {
        items {
          id
          artistID
          timeFrameStart
          timeFrameEnd
          type
          properties
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
    }
  }
`;
export const onDeleteArtist = /* GraphQL */ `
  subscription OnDeleteArtist($owner: String) {
    onDeleteArtist(owner: $owner) {
      id
      artistName
      genre
      profilePicture
      route
      createdAt
      updatedAt
      owner
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
          creatorUser {
            id
            username
            globalId
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
      tags {
        items {
          id
          tagName
          artistID
          createdAt
          updatedAt
          artist {
            nextToken
          }
          owner
          endusers {
            nextToken
          }
        }
        nextToken
      }
      summaryData {
        items {
          id
          artistID
          timeFrameStart
          timeFrameEnd
          type
          properties
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
    }
  }
`;
export const onCreateArtistIntegrations = /* GraphQL */ `
  subscription OnCreateArtistIntegrations($owner: String) {
    onCreateArtistIntegrations(owner: $owner) {
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
        tags {
          items {
            id
            tagName
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        summaryData {
          items {
            id
            artistID
            timeFrameStart
            timeFrameEnd
            type
            properties
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
export const onUpdateArtistIntegrations = /* GraphQL */ `
  subscription OnUpdateArtistIntegrations($owner: String) {
    onUpdateArtistIntegrations(owner: $owner) {
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
        tags {
          items {
            id
            tagName
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        summaryData {
          items {
            id
            artistID
            timeFrameStart
            timeFrameEnd
            type
            properties
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
export const onDeleteArtistIntegrations = /* GraphQL */ `
  subscription OnDeleteArtistIntegrations($owner: String) {
    onDeleteArtistIntegrations(owner: $owner) {
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
        tags {
          items {
            id
            tagName
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        summaryData {
          items {
            id
            artistID
            timeFrameStart
            timeFrameEnd
            type
            properties
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
export const onCreateEnduser = /* GraphQL */ `
  subscription OnCreateEnduser($owner: String) {
    onCreateEnduser(owner: $owner) {
      id
      globalId
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
      EnduserPageSubscription {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          facebookPageScopedId
          anonymousID
          enduserTotalPoints
          enduserRanking
          createdAt
          updatedAt
          enduser {
            id
            globalId
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
            globalId
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
          anonymousID
          enduserTotalPoints
          enduserRanking
          createdAt
          updatedAt
          enduser {
            id
            globalId
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
            globalId
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
      tags {
        items {
          id
          enduserID
          tagID
          artistID
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
          enduser {
            id
            globalId
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
          tag {
            id
            tagName
            artistID
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
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
            globalId
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
    }
  }
`;
export const onUpdateEnduser = /* GraphQL */ `
  subscription OnUpdateEnduser($owner: String) {
    onUpdateEnduser(owner: $owner) {
      id
      globalId
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
      EnduserPageSubscription {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          facebookPageScopedId
          anonymousID
          enduserTotalPoints
          enduserRanking
          createdAt
          updatedAt
          enduser {
            id
            globalId
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
            globalId
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
          anonymousID
          enduserTotalPoints
          enduserRanking
          createdAt
          updatedAt
          enduser {
            id
            globalId
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
            globalId
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
      tags {
        items {
          id
          enduserID
          tagID
          artistID
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
          enduser {
            id
            globalId
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
          tag {
            id
            tagName
            artistID
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
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
            globalId
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
    }
  }
`;
export const onDeleteEnduser = /* GraphQL */ `
  subscription OnDeleteEnduser($owner: String) {
    onDeleteEnduser(owner: $owner) {
      id
      globalId
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
      EnduserPageSubscription {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          facebookPageScopedId
          anonymousID
          enduserTotalPoints
          enduserRanking
          createdAt
          updatedAt
          enduser {
            id
            globalId
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
            globalId
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
          anonymousID
          enduserTotalPoints
          enduserRanking
          createdAt
          updatedAt
          enduser {
            id
            globalId
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
            globalId
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
      tags {
        items {
          id
          enduserID
          tagID
          artistID
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
          enduser {
            id
            globalId
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
          tag {
            id
            tagName
            artistID
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
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
            globalId
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
    }
  }
`;
export const onCreateArtistUser = /* GraphQL */ `
  subscription OnCreateArtistUser($owner: String) {
    onCreateArtistUser(owner: $owner) {
      id
      username
      globalId
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
        tags {
          items {
            id
            tagName
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        summaryData {
          items {
            id
            artistID
            timeFrameStart
            timeFrameEnd
            type
            properties
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
          creatorUser {
            id
            username
            globalId
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
export const onUpdateArtistUser = /* GraphQL */ `
  subscription OnUpdateArtistUser($owner: String) {
    onUpdateArtistUser(owner: $owner) {
      id
      username
      globalId
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
        tags {
          items {
            id
            tagName
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        summaryData {
          items {
            id
            artistID
            timeFrameStart
            timeFrameEnd
            type
            properties
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
          creatorUser {
            id
            username
            globalId
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
export const onDeleteArtistUser = /* GraphQL */ `
  subscription OnDeleteArtistUser($owner: String) {
    onDeleteArtistUser(owner: $owner) {
      id
      username
      globalId
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
        tags {
          items {
            id
            tagName
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        summaryData {
          items {
            id
            artistID
            timeFrameStart
            timeFrameEnd
            type
            properties
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
          creatorUser {
            id
            username
            globalId
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
export const onCreateActionPage = /* GraphQL */ `
  subscription OnCreateActionPage($owner: String) {
    onCreateActionPage(owner: $owner) {
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
      artist {
        id
        artistName
        genre
        profilePicture
        route
        createdAt
        updatedAt
        owner
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
        tags {
          items {
            id
            tagName
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        summaryData {
          items {
            id
            artistID
            timeFrameStart
            timeFrameEnd
            type
            properties
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      creatorUser {
        id
        username
        globalId
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
          integrations {
            nextToken
          }
          actionPages {
            nextToken
          }
          tags {
            nextToken
          }
          summaryData {
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
      owner
      subscribers {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          facebookPageScopedId
          anonymousID
          enduserTotalPoints
          enduserRanking
          createdAt
          updatedAt
          enduser {
            id
            globalId
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
            globalId
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
export const onUpdateActionPage = /* GraphQL */ `
  subscription OnUpdateActionPage($owner: String) {
    onUpdateActionPage(owner: $owner) {
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
      artist {
        id
        artistName
        genre
        profilePicture
        route
        createdAt
        updatedAt
        owner
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
        tags {
          items {
            id
            tagName
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        summaryData {
          items {
            id
            artistID
            timeFrameStart
            timeFrameEnd
            type
            properties
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      creatorUser {
        id
        username
        globalId
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
          integrations {
            nextToken
          }
          actionPages {
            nextToken
          }
          tags {
            nextToken
          }
          summaryData {
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
      owner
      subscribers {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          facebookPageScopedId
          anonymousID
          enduserTotalPoints
          enduserRanking
          createdAt
          updatedAt
          enduser {
            id
            globalId
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
            globalId
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
export const onDeleteActionPage = /* GraphQL */ `
  subscription OnDeleteActionPage($owner: String) {
    onDeleteActionPage(owner: $owner) {
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
      artist {
        id
        artistName
        genre
        profilePicture
        route
        createdAt
        updatedAt
        owner
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
        tags {
          items {
            id
            tagName
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        summaryData {
          items {
            id
            artistID
            timeFrameStart
            timeFrameEnd
            type
            properties
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      creatorUser {
        id
        username
        globalId
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
          integrations {
            nextToken
          }
          actionPages {
            nextToken
          }
          tags {
            nextToken
          }
          summaryData {
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
      owner
      subscribers {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          facebookPageScopedId
          anonymousID
          enduserTotalPoints
          enduserRanking
          createdAt
          updatedAt
          enduser {
            id
            globalId
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
            globalId
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
export const onCreateEnduserPageSubscription = /* GraphQL */ `
  subscription OnCreateEnduserPageSubscription($owner: String) {
    onCreateEnduserPageSubscription(owner: $owner) {
      id
      actionPageID
      enduserID
      referralEnduserID
      facebookPageScopedId
      anonymousID
      enduserTotalPoints
      enduserRanking
      createdAt
      updatedAt
      enduser {
        id
        globalId
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
        EnduserPageSubscription {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            anonymousID
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
            anonymousID
            enduserTotalPoints
            enduserRanking
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
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
      }
      referralEnduser {
        id
        globalId
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
        EnduserPageSubscription {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            anonymousID
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
            anonymousID
            enduserTotalPoints
            enduserRanking
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
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
        artist {
          id
          artistName
          genre
          profilePicture
          route
          createdAt
          updatedAt
          owner
          integrations {
            nextToken
          }
          actionPages {
            nextToken
          }
          tags {
            nextToken
          }
          summaryData {
            nextToken
          }
        }
        creatorUser {
          id
          username
          globalId
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
        owner
        subscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            anonymousID
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
            anonymousID
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
export const onUpdateEnduserPageSubscription = /* GraphQL */ `
  subscription OnUpdateEnduserPageSubscription($owner: String) {
    onUpdateEnduserPageSubscription(owner: $owner) {
      id
      actionPageID
      enduserID
      referralEnduserID
      facebookPageScopedId
      anonymousID
      enduserTotalPoints
      enduserRanking
      createdAt
      updatedAt
      enduser {
        id
        globalId
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
        EnduserPageSubscription {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            anonymousID
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
            anonymousID
            enduserTotalPoints
            enduserRanking
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
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
      }
      referralEnduser {
        id
        globalId
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
        EnduserPageSubscription {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            anonymousID
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
            anonymousID
            enduserTotalPoints
            enduserRanking
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
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
        artist {
          id
          artistName
          genre
          profilePicture
          route
          createdAt
          updatedAt
          owner
          integrations {
            nextToken
          }
          actionPages {
            nextToken
          }
          tags {
            nextToken
          }
          summaryData {
            nextToken
          }
        }
        creatorUser {
          id
          username
          globalId
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
        owner
        subscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            anonymousID
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
            anonymousID
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
export const onDeleteEnduserPageSubscription = /* GraphQL */ `
  subscription OnDeleteEnduserPageSubscription($owner: String) {
    onDeleteEnduserPageSubscription(owner: $owner) {
      id
      actionPageID
      enduserID
      referralEnduserID
      facebookPageScopedId
      anonymousID
      enduserTotalPoints
      enduserRanking
      createdAt
      updatedAt
      enduser {
        id
        globalId
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
        EnduserPageSubscription {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            anonymousID
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
            anonymousID
            enduserTotalPoints
            enduserRanking
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
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
      }
      referralEnduser {
        id
        globalId
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
        EnduserPageSubscription {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            anonymousID
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
            anonymousID
            enduserTotalPoints
            enduserRanking
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
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
        artist {
          id
          artistName
          genre
          profilePicture
          route
          createdAt
          updatedAt
          owner
          integrations {
            nextToken
          }
          actionPages {
            nextToken
          }
          tags {
            nextToken
          }
          summaryData {
            nextToken
          }
        }
        creatorUser {
          id
          username
          globalId
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
        owner
        subscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            anonymousID
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
            anonymousID
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
export const onCreateActionPageButton = /* GraphQL */ `
  subscription OnCreateActionPageButton($owner: String) {
    onCreateActionPageButton(owner: $owner) {
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
        artist {
          id
          artistName
          genre
          profilePicture
          route
          createdAt
          updatedAt
          owner
          integrations {
            nextToken
          }
          actionPages {
            nextToken
          }
          tags {
            nextToken
          }
          summaryData {
            nextToken
          }
        }
        creatorUser {
          id
          username
          globalId
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
        owner
        subscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            anonymousID
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
            anonymousID
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
export const onUpdateActionPageButton = /* GraphQL */ `
  subscription OnUpdateActionPageButton($owner: String) {
    onUpdateActionPageButton(owner: $owner) {
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
        artist {
          id
          artistName
          genre
          profilePicture
          route
          createdAt
          updatedAt
          owner
          integrations {
            nextToken
          }
          actionPages {
            nextToken
          }
          tags {
            nextToken
          }
          summaryData {
            nextToken
          }
        }
        creatorUser {
          id
          username
          globalId
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
        owner
        subscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            anonymousID
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
            anonymousID
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
export const onDeleteActionPageButton = /* GraphQL */ `
  subscription OnDeleteActionPageButton($owner: String) {
    onDeleteActionPageButton(owner: $owner) {
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
        artist {
          id
          artistName
          genre
          profilePicture
          route
          createdAt
          updatedAt
          owner
          integrations {
            nextToken
          }
          actionPages {
            nextToken
          }
          tags {
            nextToken
          }
          summaryData {
            nextToken
          }
        }
        creatorUser {
          id
          username
          globalId
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
        owner
        subscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            anonymousID
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
            anonymousID
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
export const onCreateEnduserPageSubscriptionCompletedActions = /* GraphQL */ `
  subscription OnCreateEnduserPageSubscriptionCompletedActions($owner: String) {
    onCreateEnduserPageSubscriptionCompletedActions(owner: $owner) {
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
        anonymousID
        enduserTotalPoints
        enduserRanking
        createdAt
        updatedAt
        enduser {
          id
          globalId
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
          EnduserPageSubscription {
            nextToken
          }
          referredSubscribers {
            nextToken
          }
          tags {
            nextToken
          }
          integrations {
            nextToken
          }
        }
        referralEnduser {
          id
          globalId
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
          EnduserPageSubscription {
            nextToken
          }
          referredSubscribers {
            nextToken
          }
          tags {
            nextToken
          }
          integrations {
            nextToken
          }
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
          creatorUser {
            id
            username
            globalId
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
          creatorUser {
            id
            username
            globalId
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
export const onUpdateEnduserPageSubscriptionCompletedActions = /* GraphQL */ `
  subscription OnUpdateEnduserPageSubscriptionCompletedActions($owner: String) {
    onUpdateEnduserPageSubscriptionCompletedActions(owner: $owner) {
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
        anonymousID
        enduserTotalPoints
        enduserRanking
        createdAt
        updatedAt
        enduser {
          id
          globalId
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
          EnduserPageSubscription {
            nextToken
          }
          referredSubscribers {
            nextToken
          }
          tags {
            nextToken
          }
          integrations {
            nextToken
          }
        }
        referralEnduser {
          id
          globalId
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
          EnduserPageSubscription {
            nextToken
          }
          referredSubscribers {
            nextToken
          }
          tags {
            nextToken
          }
          integrations {
            nextToken
          }
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
          creatorUser {
            id
            username
            globalId
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
          creatorUser {
            id
            username
            globalId
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
export const onDeleteEnduserPageSubscriptionCompletedActions = /* GraphQL */ `
  subscription OnDeleteEnduserPageSubscriptionCompletedActions($owner: String) {
    onDeleteEnduserPageSubscriptionCompletedActions(owner: $owner) {
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
        anonymousID
        enduserTotalPoints
        enduserRanking
        createdAt
        updatedAt
        enduser {
          id
          globalId
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
          EnduserPageSubscription {
            nextToken
          }
          referredSubscribers {
            nextToken
          }
          tags {
            nextToken
          }
          integrations {
            nextToken
          }
        }
        referralEnduser {
          id
          globalId
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
          EnduserPageSubscription {
            nextToken
          }
          referredSubscribers {
            nextToken
          }
          tags {
            nextToken
          }
          integrations {
            nextToken
          }
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
          creatorUser {
            id
            username
            globalId
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
          creatorUser {
            id
            username
            globalId
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
export const onCreateEnduserArtistSubscription = /* GraphQL */ `
  subscription OnCreateEnduserArtistSubscription($owner: String) {
    onCreateEnduserArtistSubscription(owner: $owner) {
      id
      artistID
      enduserID
      referralEnduserID
      facebookPageScopedId
      anonymousID
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
        tags {
          items {
            id
            tagName
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        summaryData {
          items {
            id
            artistID
            timeFrameStart
            timeFrameEnd
            type
            properties
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      enduser {
        id
        globalId
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
        EnduserPageSubscription {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            anonymousID
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
            anonymousID
            enduserTotalPoints
            enduserRanking
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
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
      }
      referralEnduser {
        id
        globalId
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
        EnduserPageSubscription {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            anonymousID
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
            anonymousID
            enduserTotalPoints
            enduserRanking
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
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
      }
      owner
    }
  }
`;
export const onUpdateEnduserArtistSubscription = /* GraphQL */ `
  subscription OnUpdateEnduserArtistSubscription($owner: String) {
    onUpdateEnduserArtistSubscription(owner: $owner) {
      id
      artistID
      enduserID
      referralEnduserID
      facebookPageScopedId
      anonymousID
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
        tags {
          items {
            id
            tagName
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        summaryData {
          items {
            id
            artistID
            timeFrameStart
            timeFrameEnd
            type
            properties
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      enduser {
        id
        globalId
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
        EnduserPageSubscription {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            anonymousID
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
            anonymousID
            enduserTotalPoints
            enduserRanking
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
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
      }
      referralEnduser {
        id
        globalId
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
        EnduserPageSubscription {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            anonymousID
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
            anonymousID
            enduserTotalPoints
            enduserRanking
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
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
      }
      owner
    }
  }
`;
export const onDeleteEnduserArtistSubscription = /* GraphQL */ `
  subscription OnDeleteEnduserArtistSubscription($owner: String) {
    onDeleteEnduserArtistSubscription(owner: $owner) {
      id
      artistID
      enduserID
      referralEnduserID
      facebookPageScopedId
      anonymousID
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
        tags {
          items {
            id
            tagName
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        summaryData {
          items {
            id
            artistID
            timeFrameStart
            timeFrameEnd
            type
            properties
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      enduser {
        id
        globalId
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
        EnduserPageSubscription {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            anonymousID
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
            anonymousID
            enduserTotalPoints
            enduserRanking
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
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
      }
      referralEnduser {
        id
        globalId
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
        EnduserPageSubscription {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            anonymousID
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
            anonymousID
            enduserTotalPoints
            enduserRanking
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
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
      }
      owner
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($owner: String) {
    onCreateEvent(owner: $owner) {
      id
      eventName
      artistSubscriptionID
      pageSubscriptionID
      enduserID
      artistUserID
      artistID
      pageID
      friendlyName
      source
      platform
      isExpired
      revenue
      points
      type
      properties
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
          integrations {
            nextToken
          }
          actionPages {
            nextToken
          }
          tags {
            nextToken
          }
          summaryData {
            nextToken
          }
        }
        nextToken
      }
      enduser {
        items {
          id
          globalId
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
          EnduserPageSubscription {
            nextToken
          }
          referredSubscribers {
            nextToken
          }
          tags {
            nextToken
          }
          integrations {
            nextToken
          }
        }
        nextToken
      }
      artistUser {
        items {
          id
          username
          globalId
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
        nextToken
      }
      pageSubscription {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          facebookPageScopedId
          anonymousID
          enduserTotalPoints
          enduserRanking
          createdAt
          updatedAt
          enduser {
            id
            globalId
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
            globalId
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
      page {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          facebookPageScopedId
          anonymousID
          enduserTotalPoints
          enduserRanking
          createdAt
          updatedAt
          enduser {
            id
            globalId
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
            globalId
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
      artistSubscription {
        items {
          id
          artistID
          enduserID
          referralEnduserID
          facebookPageScopedId
          anonymousID
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
          enduser {
            id
            globalId
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
            globalId
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
      owner
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($owner: String) {
    onUpdateEvent(owner: $owner) {
      id
      eventName
      artistSubscriptionID
      pageSubscriptionID
      enduserID
      artistUserID
      artistID
      pageID
      friendlyName
      source
      platform
      isExpired
      revenue
      points
      type
      properties
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
          integrations {
            nextToken
          }
          actionPages {
            nextToken
          }
          tags {
            nextToken
          }
          summaryData {
            nextToken
          }
        }
        nextToken
      }
      enduser {
        items {
          id
          globalId
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
          EnduserPageSubscription {
            nextToken
          }
          referredSubscribers {
            nextToken
          }
          tags {
            nextToken
          }
          integrations {
            nextToken
          }
        }
        nextToken
      }
      artistUser {
        items {
          id
          username
          globalId
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
        nextToken
      }
      pageSubscription {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          facebookPageScopedId
          anonymousID
          enduserTotalPoints
          enduserRanking
          createdAt
          updatedAt
          enduser {
            id
            globalId
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
            globalId
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
      page {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          facebookPageScopedId
          anonymousID
          enduserTotalPoints
          enduserRanking
          createdAt
          updatedAt
          enduser {
            id
            globalId
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
            globalId
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
      artistSubscription {
        items {
          id
          artistID
          enduserID
          referralEnduserID
          facebookPageScopedId
          anonymousID
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
          enduser {
            id
            globalId
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
            globalId
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
      owner
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($owner: String) {
    onDeleteEvent(owner: $owner) {
      id
      eventName
      artistSubscriptionID
      pageSubscriptionID
      enduserID
      artistUserID
      artistID
      pageID
      friendlyName
      source
      platform
      isExpired
      revenue
      points
      type
      properties
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
          integrations {
            nextToken
          }
          actionPages {
            nextToken
          }
          tags {
            nextToken
          }
          summaryData {
            nextToken
          }
        }
        nextToken
      }
      enduser {
        items {
          id
          globalId
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
          EnduserPageSubscription {
            nextToken
          }
          referredSubscribers {
            nextToken
          }
          tags {
            nextToken
          }
          integrations {
            nextToken
          }
        }
        nextToken
      }
      artistUser {
        items {
          id
          username
          globalId
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
        nextToken
      }
      pageSubscription {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          facebookPageScopedId
          anonymousID
          enduserTotalPoints
          enduserRanking
          createdAt
          updatedAt
          enduser {
            id
            globalId
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
            globalId
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
      page {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          facebookPageScopedId
          anonymousID
          enduserTotalPoints
          enduserRanking
          createdAt
          updatedAt
          enduser {
            id
            globalId
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
            globalId
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
      artistSubscription {
        items {
          id
          artistID
          enduserID
          referralEnduserID
          facebookPageScopedId
          anonymousID
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
          enduser {
            id
            globalId
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
            globalId
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
      owner
    }
  }
`;
export const onCreateEnduserTag = /* GraphQL */ `
  subscription OnCreateEnduserTag($owner: String) {
    onCreateEnduserTag(owner: $owner) {
      id
      tagName
      artistID
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
          integrations {
            nextToken
          }
          actionPages {
            nextToken
          }
          tags {
            nextToken
          }
          summaryData {
            nextToken
          }
        }
        nextToken
      }
      owner
      endusers {
        items {
          id
          enduserID
          tagID
          artistID
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
          enduser {
            id
            globalId
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
          tag {
            id
            tagName
            artistID
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
export const onUpdateEnduserTag = /* GraphQL */ `
  subscription OnUpdateEnduserTag($owner: String) {
    onUpdateEnduserTag(owner: $owner) {
      id
      tagName
      artistID
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
          integrations {
            nextToken
          }
          actionPages {
            nextToken
          }
          tags {
            nextToken
          }
          summaryData {
            nextToken
          }
        }
        nextToken
      }
      owner
      endusers {
        items {
          id
          enduserID
          tagID
          artistID
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
          enduser {
            id
            globalId
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
          tag {
            id
            tagName
            artistID
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
export const onDeleteEnduserTag = /* GraphQL */ `
  subscription OnDeleteEnduserTag($owner: String) {
    onDeleteEnduserTag(owner: $owner) {
      id
      tagName
      artistID
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
          integrations {
            nextToken
          }
          actionPages {
            nextToken
          }
          tags {
            nextToken
          }
          summaryData {
            nextToken
          }
        }
        nextToken
      }
      owner
      endusers {
        items {
          id
          enduserID
          tagID
          artistID
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
          enduser {
            id
            globalId
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
          tag {
            id
            tagName
            artistID
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
export const onCreateTagEnduserConnector = /* GraphQL */ `
  subscription OnCreateTagEnduserConnector($owner: String) {
    onCreateTagEnduserConnector(owner: $owner) {
      id
      enduserID
      tagID
      artistID
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
        tags {
          items {
            id
            tagName
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        summaryData {
          items {
            id
            artistID
            timeFrameStart
            timeFrameEnd
            type
            properties
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      enduser {
        id
        globalId
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
        EnduserPageSubscription {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            anonymousID
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
            anonymousID
            enduserTotalPoints
            enduserRanking
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
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
      }
      tag {
        id
        tagName
        artistID
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
        owner
        endusers {
          items {
            id
            enduserID
            tagID
            artistID
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
export const onUpdateTagEnduserConnector = /* GraphQL */ `
  subscription OnUpdateTagEnduserConnector($owner: String) {
    onUpdateTagEnduserConnector(owner: $owner) {
      id
      enduserID
      tagID
      artistID
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
        tags {
          items {
            id
            tagName
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        summaryData {
          items {
            id
            artistID
            timeFrameStart
            timeFrameEnd
            type
            properties
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      enduser {
        id
        globalId
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
        EnduserPageSubscription {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            anonymousID
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
            anonymousID
            enduserTotalPoints
            enduserRanking
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
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
      }
      tag {
        id
        tagName
        artistID
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
        owner
        endusers {
          items {
            id
            enduserID
            tagID
            artistID
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
export const onDeleteTagEnduserConnector = /* GraphQL */ `
  subscription OnDeleteTagEnduserConnector($owner: String) {
    onDeleteTagEnduserConnector(owner: $owner) {
      id
      enduserID
      tagID
      artistID
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
        tags {
          items {
            id
            tagName
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        summaryData {
          items {
            id
            artistID
            timeFrameStart
            timeFrameEnd
            type
            properties
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      enduser {
        id
        globalId
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
        EnduserPageSubscription {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            anonymousID
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
            anonymousID
            enduserTotalPoints
            enduserRanking
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
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
      }
      tag {
        id
        tagName
        artistID
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
        owner
        endusers {
          items {
            id
            enduserID
            tagID
            artistID
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
export const onCreateEnduserIntegrations = /* GraphQL */ `
  subscription OnCreateEnduserIntegrations($owner: String) {
    onCreateEnduserIntegrations(owner: $owner) {
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
        globalId
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
        EnduserPageSubscription {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            anonymousID
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
            anonymousID
            enduserTotalPoints
            enduserRanking
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
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
      }
      owner
    }
  }
`;
export const onUpdateEnduserIntegrations = /* GraphQL */ `
  subscription OnUpdateEnduserIntegrations($owner: String) {
    onUpdateEnduserIntegrations(owner: $owner) {
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
        globalId
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
        EnduserPageSubscription {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            anonymousID
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
            anonymousID
            enduserTotalPoints
            enduserRanking
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
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
      }
      owner
    }
  }
`;
export const onDeleteEnduserIntegrations = /* GraphQL */ `
  subscription OnDeleteEnduserIntegrations($owner: String) {
    onDeleteEnduserIntegrations(owner: $owner) {
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
        globalId
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
        EnduserPageSubscription {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            facebookPageScopedId
            anonymousID
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
            anonymousID
            enduserTotalPoints
            enduserRanking
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
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
      }
      owner
    }
  }
`;
export const onCreateStreetTeamSummaryData = /* GraphQL */ `
  subscription OnCreateStreetTeamSummaryData($owner: String) {
    onCreateStreetTeamSummaryData(owner: $owner) {
      id
      artistID
      timeFrameStart
      timeFrameEnd
      type
      properties
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
        tags {
          items {
            id
            tagName
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        summaryData {
          items {
            id
            artistID
            timeFrameStart
            timeFrameEnd
            type
            properties
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
export const onUpdateStreetTeamSummaryData = /* GraphQL */ `
  subscription OnUpdateStreetTeamSummaryData($owner: String) {
    onUpdateStreetTeamSummaryData(owner: $owner) {
      id
      artistID
      timeFrameStart
      timeFrameEnd
      type
      properties
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
        tags {
          items {
            id
            tagName
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        summaryData {
          items {
            id
            artistID
            timeFrameStart
            timeFrameEnd
            type
            properties
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
export const onDeleteStreetTeamSummaryData = /* GraphQL */ `
  subscription OnDeleteStreetTeamSummaryData($owner: String) {
    onDeleteStreetTeamSummaryData(owner: $owner) {
      id
      artistID
      timeFrameStart
      timeFrameEnd
      type
      properties
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
        tags {
          items {
            id
            tagName
            artistID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        summaryData {
          items {
            id
            artistID
            timeFrameStart
            timeFrameEnd
            type
            properties
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
export const onCreatePicture = /* GraphQL */ `
  subscription OnCreatePicture($owner: String) {
    onCreatePicture(owner: $owner) {
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
export const onUpdatePicture = /* GraphQL */ `
  subscription OnUpdatePicture($owner: String) {
    onUpdatePicture(owner: $owner) {
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
export const onDeletePicture = /* GraphQL */ `
  subscription OnDeletePicture($owner: String) {
    onDeletePicture(owner: $owner) {
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
