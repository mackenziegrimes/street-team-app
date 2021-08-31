/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listArtists = /* GraphQL */ `
  query ListArtists(
    $filter: ModelArtistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArtists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        route
        createdAt
        updatedAt
        owner
        actionPages {
          items{ id }
          nextToken
        }
        contests {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getArtist = /* GraphQL */ `
  query GetArtist($id: ID!) {
    getArtist(id: $id) {
      id
      name
      route
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
      contests {
        items {
          id
          headline
          description
          encouragementHeadline
          encouragementDescription
          landingButtonText
          deadline
          artistID
          pictureID
          testPictureUrl
          streetTeamUrl
          spotifyPlayUrl
          spotifyFollowPlaylistUrl
          spotifyFollowArtistUrl
          spotifySaveUrl
          createdAt
          updatedAt
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
        username
        firstName
        lastName
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
          nextToken
        }
        contestSubscriptions {
          nextToken
        }
        contestActions {
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
      createdAt
      updatedAt
      owner
      actionPageSubscriptions {
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
      contestSubscriptions {
        items {
          id
          contestID
          enduserID
          referralEnduserID
          enduserPoints
          completeStreetTeamJoin
          completeSpotifyFollow
          completeSpotifySave
          completeSpotifyPlay
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      contestActions {
        items {
          id
          enduserID
          actionID
          status
          createdAt
          updatedAt
          owner
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
        artistID
        createdAt
        updatedAt
        artist {
          id
          name
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
  }
`;
export const getArtistUser = /* GraphQL */ `
  query GetArtistUser($id: ID!) {
    getArtistUser(id: $id) {
      id
      username
      firstName
      lastName
      artistID
      createdAt
      updatedAt
      artist {
        id
        name
        route
        createdAt
        updatedAt
        owner
        actionPages {
          nextToken
        }
        contests {
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
          name
          route
          createdAt
          updatedAt
          owner
        }
        creatorUser {
          id
          username
          firstName
          lastName
          artistID
          createdAt
          updatedAt
          owner
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
        owner
        subscribers {
          nextToken
        }
        actionButtons {
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
        name
        route
        createdAt
        updatedAt
        owner
        actionPages {
          nextToken
        }
        contests {
          nextToken
        }
      }
      creatorUser {
        id
        username
        firstName
        lastName
        artistID
        createdAt
        updatedAt
        artist {
          id
          name
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
      owner
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
    }
  }
`;
export const getActionPageSubscriptions = /* GraphQL */ `
  query GetActionPageSubscriptions($id: ID!) {
    getActionPageSubscriptions(id: $id) {
      id
      actionPageID
      enduserID
      referralEnduserID
      enduserPoints
      completedActionButtonIDs
      createdAt
      updatedAt
      enduser {
        id
        username
        firstName
        lastName
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
          nextToken
        }
        contestSubscriptions {
          nextToken
        }
        contestActions {
          nextToken
        }
      }
      referralEnduser {
        id
        username
        firstName
        lastName
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
          nextToken
        }
        contestSubscriptions {
          nextToken
        }
        contestActions {
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
          name
          route
          createdAt
          updatedAt
          owner
        }
        creatorUser {
          id
          username
          firstName
          lastName
          artistID
          createdAt
          updatedAt
          owner
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
        owner
        subscribers {
          nextToken
        }
        actionButtons {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listActionPageSubscriptionss = /* GraphQL */ `
  query ListActionPageSubscriptionss(
    $filter: ModelActionPageSubscriptionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActionPageSubscriptionss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        actionPageID
        enduserID
        referralEnduserID
        enduserPoints
        completedActionButtonIDs
        createdAt
        updatedAt
        enduser {
          id
          username
          firstName
          lastName
          createdAt
          updatedAt
          owner
        }
        referralEnduser {
          id
          username
          firstName
          lastName
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
          name
          route
          createdAt
          updatedAt
          owner
        }
        creatorUser {
          id
          username
          firstName
          lastName
          artistID
          createdAt
          updatedAt
          owner
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
        owner
        subscribers {
          nextToken
        }
        actionButtons {
          nextToken
        }
      }
      owner
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
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const listContests = /* GraphQL */ `
  query ListContests(
    $filter: ModelContestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        headline
        description
        encouragementHeadline
        encouragementDescription
        landingButtonText
        deadline
        artistID
        pictureID
        testPictureUrl
        streetTeamUrl
        spotifyPlayUrl
        spotifyFollowPlaylistUrl
        spotifyFollowArtistUrl
        spotifySaveUrl
        createdAt
        updatedAt
        artist {
          id
          name
          route
          createdAt
          updatedAt
          owner
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
        owner
        actions {
          nextToken
        }
        subscribers {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getContest = /* GraphQL */ `
  query GetContest($id: ID!) {
    getContest(id: $id) {
      id
      headline
      description
      encouragementHeadline
      encouragementDescription
      landingButtonText
      deadline
      artistID
      pictureID
      testPictureUrl
      streetTeamUrl
      spotifyPlayUrl
      spotifyFollowPlaylistUrl
      spotifyFollowArtistUrl
      spotifySaveUrl
      createdAt
      updatedAt
      artist {
        id
        name
        route
        createdAt
        updatedAt
        owner
        actionPages {
          nextToken
        }
        contests {
          nextToken
        }
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
      owner
      actions {
        items {
          id
          preActionText
          postActionText
          pointValue
          contestID
          url
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      subscribers {
        items {
          id
          contestID
          enduserID
          referralEnduserID
          enduserPoints
          completeStreetTeamJoin
          completeSpotifyFollow
          completeSpotifySave
          completeSpotifyPlay
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const getContestAction = /* GraphQL */ `
  query GetContestAction($id: ID!) {
    getContestAction(id: $id) {
      id
      preActionText
      postActionText
      pointValue
      contestID
      actionType {
        id
        value
        createdAt
        updatedAt
        owner
      }
      url
      createdAt
      updatedAt
      contest {
        id
        headline
        description
        encouragementHeadline
        encouragementDescription
        landingButtonText
        deadline
        artistID
        pictureID
        testPictureUrl
        streetTeamUrl
        spotifyPlayUrl
        spotifyFollowPlaylistUrl
        spotifyFollowArtistUrl
        spotifySaveUrl
        createdAt
        updatedAt
        artist {
          id
          name
          route
          createdAt
          updatedAt
          owner
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
        owner
        actions {
          nextToken
        }
        subscribers {
          nextToken
        }
      }
      owner
      enduserActions {
        items {
          id
          enduserID
          actionID
          status
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listContestActions = /* GraphQL */ `
  query ListContestActions(
    $filter: ModelContestActionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContestActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        preActionText
        postActionText
        pointValue
        contestID
        actionType {
          id
          value
          createdAt
          updatedAt
          owner
        }
        url
        createdAt
        updatedAt
        contest {
          id
          headline
          description
          encouragementHeadline
          encouragementDescription
          landingButtonText
          deadline
          artistID
          pictureID
          testPictureUrl
          streetTeamUrl
          spotifyPlayUrl
          spotifyFollowPlaylistUrl
          spotifyFollowArtistUrl
          spotifySaveUrl
          createdAt
          updatedAt
          owner
        }
        owner
        enduserActions {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getActionType = /* GraphQL */ `
  query GetActionType($id: ID!) {
    getActionType(id: $id) {
      id
      value
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listActionTypes = /* GraphQL */ `
  query ListActionTypes(
    $filter: ModelActionTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActionTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        value
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getContestSubscription = /* GraphQL */ `
  query GetContestSubscription($id: ID!) {
    getContestSubscription(id: $id) {
      id
      contestID
      enduserID
      referralEnduserID
      enduserPoints
      completeStreetTeamJoin
      completeSpotifyFollow
      completeSpotifySave
      completeSpotifyPlay
      createdAt
      updatedAt
      enduser {
        id
        username
        firstName
        lastName
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
          nextToken
        }
        contestSubscriptions {
          nextToken
        }
        contestActions {
          nextToken
        }
      }
      referralEnduser {
        id
        username
        firstName
        lastName
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
          nextToken
        }
        contestSubscriptions {
          nextToken
        }
        contestActions {
          nextToken
        }
      }
      contest {
        id
        headline
        description
        encouragementHeadline
        encouragementDescription
        landingButtonText
        deadline
        artistID
        pictureID
        testPictureUrl
        streetTeamUrl
        spotifyPlayUrl
        spotifyFollowPlaylistUrl
        spotifyFollowArtistUrl
        spotifySaveUrl
        createdAt
        updatedAt
        artist {
          id
          name
          route
          createdAt
          updatedAt
          owner
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
        owner
        actions {
          nextToken
        }
        subscribers {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listContestSubscriptions = /* GraphQL */ `
  query ListContestSubscriptions(
    $filter: ModelContestSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContestSubscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        contestID
        enduserID
        referralEnduserID
        enduserPoints
        completeStreetTeamJoin
        completeSpotifyFollow
        completeSpotifySave
        completeSpotifyPlay
        createdAt
        updatedAt
        enduser {
          id
          username
          firstName
          lastName
          createdAt
          updatedAt
          owner
        }
        referralEnduser {
          id
          username
          firstName
          lastName
          createdAt
          updatedAt
          owner
        }
        contest {
          id
          headline
          description
          encouragementHeadline
          encouragementDescription
          landingButtonText
          deadline
          artistID
          pictureID
          testPictureUrl
          streetTeamUrl
          spotifyPlayUrl
          spotifyFollowPlaylistUrl
          spotifyFollowArtistUrl
          spotifySaveUrl
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const getEnduserContestActions = /* GraphQL */ `
  query GetEnduserContestActions($id: ID!) {
    getEnduserContestActions(id: $id) {
      id
      enduserID
      enduser {
        id
        username
        firstName
        lastName
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
          nextToken
        }
        contestSubscriptions {
          nextToken
        }
        contestActions {
          nextToken
        }
      }
      actionID
      action {
        id
        preActionText
        postActionText
        pointValue
        contestID
        actionType {
          id
          value
          createdAt
          updatedAt
          owner
        }
        url
        createdAt
        updatedAt
        contest {
          id
          headline
          description
          encouragementHeadline
          encouragementDescription
          landingButtonText
          deadline
          artistID
          pictureID
          testPictureUrl
          streetTeamUrl
          spotifyPlayUrl
          spotifyFollowPlaylistUrl
          spotifyFollowArtistUrl
          spotifySaveUrl
          createdAt
          updatedAt
          owner
        }
        owner
        enduserActions {
          nextToken
        }
      }
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listEnduserContestActionss = /* GraphQL */ `
  query ListEnduserContestActionss(
    $filter: ModelEnduserContestActionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnduserContestActionss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        enduserID
        enduser {
          id
          username
          firstName
          lastName
          createdAt
          updatedAt
          owner
        }
        actionID
        action {
          id
          preActionText
          postActionText
          pointValue
          contestID
          url
          createdAt
          updatedAt
          owner
        }
        status
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
