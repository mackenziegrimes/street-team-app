/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getArtist = /* GraphQL */ `
  query GetArtist($id: ID!) {
    getArtist(id: $id) {
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
export const listArtists = /* GraphQL */ `
  query ListArtists(
    $filter: ModelArtistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArtists(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const artistByRoute = /* GraphQL */ `
  query ArtistByRoute(
    $route: String
    $sortDirection: ModelSortDirection
    $filter: ModelArtistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ArtistByRoute(
      route: $route
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const getArtistIntegrations = /* GraphQL */ `
  query GetArtistIntegrations($id: ID!) {
    getArtistIntegrations(id: $id) {
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
export const listArtistIntegrationss = /* GraphQL */ `
  query ListArtistIntegrationss(
    $filter: ModelArtistIntegrationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArtistIntegrationss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      }
      nextToken
    }
  }
`;
export const getEnduser = /* GraphQL */ `
  query GetEnduser($id: ID!) {
    getEnduser(id: $id) {
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
export const listEndusers = /* GraphQL */ `
  query ListEndusers(
    $filter: ModelEnduserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEndusers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const enduserByEmail = /* GraphQL */ `
  query EnduserByEmail(
    $email: String
    $sortDirection: ModelSortDirection
    $filter: ModelEnduserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EnduserByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const enduserByGlobalId = /* GraphQL */ `
  query EnduserByGlobalId(
    $globalId: String
    $sortDirection: ModelSortDirection
    $filter: ModelEnduserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EnduserByGlobalId(
      globalId: $globalId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const getArtistUser = /* GraphQL */ `
  query GetArtistUser($id: ID!) {
    getArtistUser(id: $id) {
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
export const listArtistUsers = /* GraphQL */ `
  query ListArtistUsers(
    $filter: ModelArtistUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArtistUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getActionPage = /* GraphQL */ `
  query GetActionPage($id: ID!) {
    getActionPage(id: $id) {
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
export const listActionPages = /* GraphQL */ `
  query ListActionPages(
    $filter: ModelActionPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActionPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const actionPagesByArtist = /* GraphQL */ `
  query ActionPagesByArtist(
    $artistID: ID
    $heading: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelActionPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ActionPagesByArtist(
      artistID: $artistID
      heading: $heading
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const actionPagesByRoute = /* GraphQL */ `
  query ActionPagesByRoute(
    $pageRoute: String
    $sortDirection: ModelSortDirection
    $filter: ModelActionPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ActionPagesByRoute(
      pageRoute: $pageRoute
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const getEnduserPageSubscription = /* GraphQL */ `
  query GetEnduserPageSubscription($id: ID!) {
    getEnduserPageSubscription(id: $id) {
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
export const listEnduserPageSubscriptions = /* GraphQL */ `
  query ListEnduserPageSubscriptions(
    $filter: ModelEnduserPageSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnduserPageSubscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const enduserPageSubscriptionByActionPage = /* GraphQL */ `
  query EnduserPageSubscriptionByActionPage(
    $actionPageID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelEnduserPageSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EnduserPageSubscriptionByActionPage(
      actionPageID: $actionPageID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const enduserPageSubscriptionByEnduser = /* GraphQL */ `
  query EnduserPageSubscriptionByEnduser(
    $enduserID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelEnduserPageSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EnduserPageSubscriptionByEnduser(
      enduserID: $enduserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const enduserPageSubscriptionByFacebookPageScopedId = /* GraphQL */ `
  query EnduserPageSubscriptionByFacebookPageScopedId(
    $facebookPageScopedId: String
    $sortDirection: ModelSortDirection
    $filter: ModelEnduserPageSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EnduserPageSubscriptionByFacebookPageScopedId(
      facebookPageScopedId: $facebookPageScopedId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const getActionPageButton = /* GraphQL */ `
  query GetActionPageButton($id: ID!) {
    getActionPageButton(id: $id) {
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
export const listActionPageButtons = /* GraphQL */ `
  query ListActionPageButtons(
    $filter: ModelActionPageButtonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActionPageButtons(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const getEnduserPageSubscriptionCompletedActions = /* GraphQL */ `
  query GetEnduserPageSubscriptionCompletedActions($id: ID!) {
    getEnduserPageSubscriptionCompletedActions(id: $id) {
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
export const listEnduserPageSubscriptionCompletedActionss = /* GraphQL */ `
  query ListEnduserPageSubscriptionCompletedActionss(
    $filter: ModelEnduserPageSubscriptionCompletedActionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnduserPageSubscriptionCompletedActionss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
            owner
          }
          owner
          enduserPageSubscriptionCompletedActions {
            nextToken
          }
        }
        owner
      }
      nextToken
    }
  }
`;
export const enduserCompletedActionsByActionButton = /* GraphQL */ `
  query EnduserCompletedActionsByActionButton(
    $actionID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelEnduserPageSubscriptionCompletedActionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EnduserCompletedActionsByActionButton(
      actionID: $actionID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
            owner
          }
          owner
          enduserPageSubscriptionCompletedActions {
            nextToken
          }
        }
        owner
      }
      nextToken
    }
  }
`;
export const enduserCompletedActionsByEnduserPageSubscription = /* GraphQL */ `
  query EnduserCompletedActionsByEnduserPageSubscription(
    $enduserPageSubscriptionID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelEnduserPageSubscriptionCompletedActionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EnduserCompletedActionsByEnduserPageSubscription(
      enduserPageSubscriptionID: $enduserPageSubscriptionID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
            owner
          }
          owner
          enduserPageSubscriptionCompletedActions {
            nextToken
          }
        }
        owner
      }
      nextToken
    }
  }
`;
export const getEnduserArtistSubscription = /* GraphQL */ `
  query GetEnduserArtistSubscription($id: ID!) {
    getEnduserArtistSubscription(id: $id) {
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
export const listEnduserArtistSubscriptions = /* GraphQL */ `
  query ListEnduserArtistSubscriptions(
    $filter: ModelEnduserArtistSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnduserArtistSubscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        owner
      }
      nextToken
    }
  }
`;
export const enduserArtistSubscriptionsByArtist = /* GraphQL */ `
  query EnduserArtistSubscriptionsByArtist(
    $artistID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelEnduserArtistSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EnduserArtistSubscriptionsByArtist(
      artistID: $artistID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        owner
      }
      nextToken
    }
  }
`;
export const enduserArtistSubscriptionsByEnduser = /* GraphQL */ `
  query EnduserArtistSubscriptionsByEnduser(
    $enduserID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelEnduserArtistSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EnduserArtistSubscriptionsByEnduser(
      enduserID: $enduserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        owner
      }
      nextToken
    }
  }
`;
export const enduserPageSubscriptionByAnonymousId = /* GraphQL */ `
  query EnduserPageSubscriptionByAnonymousId(
    $anonymousID: String
    $sortDirection: ModelSortDirection
    $filter: ModelEnduserPageSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EnduserPageSubscriptionByAnonymousID(
      anonymousID: $anonymousID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const enduserPageSubscriptionByReferralEnduser = /* GraphQL */ `
  query EnduserPageSubscriptionByReferralEnduser(
    $referralEnduserID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelEnduserPageSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EnduserPageSubscriptionByReferralEnduser(
      referralEnduserID: $referralEnduserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
            owner
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
            owner
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
            owner
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
            owner
          }
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
export const eventByArtistSubscription = /* GraphQL */ `
  query EventByArtistSubscription(
    $artistSubscriptionID: ID
    $type: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EventByArtistSubscription(
      artistSubscriptionID: $artistSubscriptionID
      type: $type
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
            owner
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
            owner
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
            owner
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
            owner
          }
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
export const eventByPageSubscription = /* GraphQL */ `
  query EventByPageSubscription(
    $pageSubscriptionID: ID
    $eventName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EventByPageSubscription(
      pageSubscriptionID: $pageSubscriptionID
      eventName: $eventName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
            owner
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
            owner
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
            owner
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
            owner
          }
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
export const eventByEnduser = /* GraphQL */ `
  query EventByEnduser(
    $enduserID: ID
    $type: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EventByEnduser(
      enduserID: $enduserID
      type: $type
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
            owner
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
            owner
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
            owner
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
            owner
          }
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
export const eventByArtistUser = /* GraphQL */ `
  query EventByArtistUser(
    $artistUserID: ID
    $type: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EventByArtistUser(
      artistUserID: $artistUserID
      type: $type
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
            owner
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
            owner
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
            owner
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
            owner
          }
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
export const eventByArtist = /* GraphQL */ `
  query EventByArtist(
    $artistID: ID
    $eventName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EventByArtist(
      artistID: $artistID
      eventName: $eventName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
            owner
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
            owner
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
            owner
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
            owner
          }
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
export const eventByPage = /* GraphQL */ `
  query EventByPage(
    $pageID: ID
    $type: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EventByPage(
      pageID: $pageID
      type: $type
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
            owner
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
            owner
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
            owner
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
            owner
          }
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
export const getEnduserTag = /* GraphQL */ `
  query GetEnduserTag($id: ID!) {
    getEnduserTag(id: $id) {
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
export const listEnduserTags = /* GraphQL */ `
  query ListEnduserTags(
    $filter: ModelEnduserTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnduserTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const tagsByArtist = /* GraphQL */ `
  query TagsByArtist(
    $artistID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelEnduserTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    TagsByArtist(
      artistID: $artistID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const tagsByArtistAndTagName = /* GraphQL */ `
  query TagsByArtistAndTagName(
    $artistID: ID
    $tagName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEnduserTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    TagsByArtistAndTagName(
      artistID: $artistID
      tagName: $tagName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getEnduserIntegrations = /* GraphQL */ `
  query GetEnduserIntegrations($id: ID!) {
    getEnduserIntegrations(id: $id) {
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
export const listEnduserIntegrationss = /* GraphQL */ `
  query ListEnduserIntegrationss(
    $filter: ModelEnduserIntegrationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnduserIntegrationss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        owner
      }
      nextToken
    }
  }
`;
export const enduserIntegrationsByEnduser = /* GraphQL */ `
  query EnduserIntegrationsByEnduser(
    $enduserID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelEnduserIntegrationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EnduserIntegrationsByEnduser(
      enduserID: $enduserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        owner
      }
      nextToken
    }
  }
`;
export const getStreetTeamSummaryData = /* GraphQL */ `
  query GetStreetTeamSummaryData($id: ID!) {
    getStreetTeamSummaryData(id: $id) {
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
export const listStreetTeamSummaryDatas = /* GraphQL */ `
  query ListStreetTeamSummaryDatas(
    $filter: ModelStreetTeamSummaryDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStreetTeamSummaryDatas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      }
      nextToken
    }
  }
`;
export const summaryDataByArtist = /* GraphQL */ `
  query SummaryDataByArtist(
    $artistID: ID
    $timeFrameStartTimeFrameEnd: ModelStreetTeamSummaryDataByArtistCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelStreetTeamSummaryDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    summaryDataByArtist(
      artistID: $artistID
      timeFrameStartTimeFrameEnd: $timeFrameStartTimeFrameEnd
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      }
      nextToken
    }
  }
`;
export const summaryDataByArtistOnly = /* GraphQL */ `
  query SummaryDataByArtistOnly(
    $artistID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelStreetTeamSummaryDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    summaryDataByArtistOnly(
      artistID: $artistID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      }
      nextToken
    }
  }
`;
export const getPicture = /* GraphQL */ `
  query GetPicture($id: ID!) {
    getPicture(id: $id) {
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
export const listPictures = /* GraphQL */ `
  query ListPictures(
    $filter: ModelPictureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
