/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      nextToken
    }
  }
`;
export const getEnduserTag = /* GraphQL */ `
  query GetEnduserTag($id: ID!) {
    getEnduserTag(id: $id) {
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
export const listEnduserTags = /* GraphQL */ `
  query ListEnduserTags(
    $filter: ModelEnduserTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnduserTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        owner
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
        owner
      }
      nextToken
    }
  }
`;
export const getArtist = /* GraphQL */ `
  query GetArtist($id: ID!) {
    getArtist(id: $id) {
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
      nextToken
    }
  }
`;
export const getEnduser = /* GraphQL */ `
  query GetEnduser($id: ID!) {
    getEnduser(id: $id) {
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
export const listEndusers = /* GraphQL */ `
  query ListEndusers(
    $filter: ModelEnduserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEndusers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        owner
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
