/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArtistIntegrations = /* GraphQL */ `
  subscription OnCreateArtistIntegrations($owner: String!) {
    onCreateArtistIntegrations(owner: $owner) {
      id
      artistID
      serviceName
      serviceApiKey
      serviceAccountId
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
export const onUpdateArtistIntegrations = /* GraphQL */ `
  subscription OnUpdateArtistIntegrations($owner: String!) {
    onUpdateArtistIntegrations(owner: $owner) {
      id
      artistID
      serviceName
      serviceApiKey
      serviceAccountId
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
export const onDeleteArtistIntegrations = /* GraphQL */ `
  subscription OnDeleteArtistIntegrations($owner: String!) {
    onDeleteArtistIntegrations(owner: $owner) {
      id
      artistID
      serviceName
      serviceApiKey
      serviceAccountId
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
export const onCreateArtistUser = /* GraphQL */ `
  subscription OnCreateArtistUser($owner: String!) {
    onCreateArtistUser(owner: $owner) {
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
export const onUpdateArtistUser = /* GraphQL */ `
  subscription OnUpdateArtistUser($owner: String!) {
    onUpdateArtistUser(owner: $owner) {
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
export const onDeleteArtistUser = /* GraphQL */ `
  subscription OnDeleteArtistUser($owner: String!) {
    onDeleteArtistUser(owner: $owner) {
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
export const onCreateEnduserTag = /* GraphQL */ `
  subscription OnCreateEnduserTag {
    onCreateEnduserTag {
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
export const onUpdateEnduserTag = /* GraphQL */ `
  subscription OnUpdateEnduserTag {
    onUpdateEnduserTag {
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
export const onDeleteEnduserTag = /* GraphQL */ `
  subscription OnDeleteEnduserTag {
    onDeleteEnduserTag {
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
export const onCreateTagEnduserConnector = /* GraphQL */ `
  subscription OnCreateTagEnduserConnector {
    onCreateTagEnduserConnector {
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
    }
  }
`;
export const onUpdateTagEnduserConnector = /* GraphQL */ `
  subscription OnUpdateTagEnduserConnector {
    onUpdateTagEnduserConnector {
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
    }
  }
`;
export const onDeleteTagEnduserConnector = /* GraphQL */ `
  subscription OnDeleteTagEnduserConnector {
    onDeleteTagEnduserConnector {
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
    }
  }
`;
export const onCreateArtist = /* GraphQL */ `
  subscription OnCreateArtist($owner: String) {
    onCreateArtist(owner: $owner) {
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
export const onUpdateArtist = /* GraphQL */ `
  subscription OnUpdateArtist($owner: String) {
    onUpdateArtist(owner: $owner) {
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
export const onDeleteArtist = /* GraphQL */ `
  subscription OnDeleteArtist($owner: String) {
    onDeleteArtist(owner: $owner) {
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
export const onCreateEnduser = /* GraphQL */ `
  subscription OnCreateEnduser($owner: String) {
    onCreateEnduser(owner: $owner) {
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
export const onUpdateEnduser = /* GraphQL */ `
  subscription OnUpdateEnduser($owner: String) {
    onUpdateEnduser(owner: $owner) {
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
export const onDeleteEnduser = /* GraphQL */ `
  subscription OnDeleteEnduser($owner: String) {
    onDeleteEnduser(owner: $owner) {
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
export const onCreateActionPage = /* GraphQL */ `
  subscription OnCreateActionPage($owner: String) {
    onCreateActionPage(owner: $owner) {
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
export const onUpdateActionPage = /* GraphQL */ `
  subscription OnUpdateActionPage($owner: String) {
    onUpdateActionPage(owner: $owner) {
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
export const onDeleteActionPage = /* GraphQL */ `
  subscription OnDeleteActionPage($owner: String) {
    onDeleteActionPage(owner: $owner) {
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
export const onCreateEnduserPageSubscription = /* GraphQL */ `
  subscription OnCreateEnduserPageSubscription($owner: String) {
    onCreateEnduserPageSubscription(owner: $owner) {
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
            enduserTotalPoints
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
export const onUpdateEnduserPageSubscription = /* GraphQL */ `
  subscription OnUpdateEnduserPageSubscription($owner: String) {
    onUpdateEnduserPageSubscription(owner: $owner) {
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
            enduserTotalPoints
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
export const onDeleteEnduserPageSubscription = /* GraphQL */ `
  subscription OnDeleteEnduserPageSubscription($owner: String) {
    onDeleteEnduserPageSubscription(owner: $owner) {
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
            enduserTotalPoints
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
            enduserTotalPoints
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
            enduserTotalPoints
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
            enduserTotalPoints
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
export const onCreateEnduserArtistSubscription = /* GraphQL */ `
  subscription OnCreateEnduserArtistSubscription($owner: String) {
    onCreateEnduserArtistSubscription(owner: $owner) {
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
