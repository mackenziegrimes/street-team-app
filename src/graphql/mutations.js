/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createArtist = /* GraphQL */ `
  mutation CreateArtist(
    $input: CreateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    createArtist(input: $input, condition: $condition) {
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
export const updateArtist = /* GraphQL */ `
  mutation UpdateArtist(
    $input: UpdateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    updateArtist(input: $input, condition: $condition) {
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
export const deleteArtist = /* GraphQL */ `
  mutation DeleteArtist(
    $input: DeleteArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    deleteArtist(input: $input, condition: $condition) {
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
export const createActionPage = /* GraphQL */ `
  mutation CreateActionPage(
    $input: CreateActionPageInput!
    $condition: ModelActionPageConditionInput
  ) {
    createActionPage(input: $input, condition: $condition) {
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
export const updateActionPage = /* GraphQL */ `
  mutation UpdateActionPage(
    $input: UpdateActionPageInput!
    $condition: ModelActionPageConditionInput
  ) {
    updateActionPage(input: $input, condition: $condition) {
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
export const deleteActionPage = /* GraphQL */ `
  mutation DeleteActionPage(
    $input: DeleteActionPageInput!
    $condition: ModelActionPageConditionInput
  ) {
    deleteActionPage(input: $input, condition: $condition) {
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
export const createActionPageSubscriptions = /* GraphQL */ `
  mutation CreateActionPageSubscriptions(
    $input: CreateActionPageSubscriptionsInput!
    $condition: ModelActionPageSubscriptionsConditionInput
  ) {
    createActionPageSubscriptions(input: $input, condition: $condition) {
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
export const updateActionPageSubscriptions = /* GraphQL */ `
  mutation UpdateActionPageSubscriptions(
    $input: UpdateActionPageSubscriptionsInput!
    $condition: ModelActionPageSubscriptionsConditionInput
  ) {
    updateActionPageSubscriptions(input: $input, condition: $condition) {
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
export const deleteActionPageSubscriptions = /* GraphQL */ `
  mutation DeleteActionPageSubscriptions(
    $input: DeleteActionPageSubscriptionsInput!
    $condition: ModelActionPageSubscriptionsConditionInput
  ) {
    deleteActionPageSubscriptions(input: $input, condition: $condition) {
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
export const createContest = /* GraphQL */ `
  mutation CreateContest(
    $input: CreateContestInput!
    $condition: ModelContestConditionInput
  ) {
    createContest(input: $input, condition: $condition) {
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
export const updateContest = /* GraphQL */ `
  mutation UpdateContest(
    $input: UpdateContestInput!
    $condition: ModelContestConditionInput
  ) {
    updateContest(input: $input, condition: $condition) {
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
export const deleteContest = /* GraphQL */ `
  mutation DeleteContest(
    $input: DeleteContestInput!
    $condition: ModelContestConditionInput
  ) {
    deleteContest(input: $input, condition: $condition) {
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
export const createContestAction = /* GraphQL */ `
  mutation CreateContestAction(
    $input: CreateContestActionInput!
    $condition: ModelContestActionConditionInput
  ) {
    createContestAction(input: $input, condition: $condition) {
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
export const updateContestAction = /* GraphQL */ `
  mutation UpdateContestAction(
    $input: UpdateContestActionInput!
    $condition: ModelContestActionConditionInput
  ) {
    updateContestAction(input: $input, condition: $condition) {
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
export const deleteContestAction = /* GraphQL */ `
  mutation DeleteContestAction(
    $input: DeleteContestActionInput!
    $condition: ModelContestActionConditionInput
  ) {
    deleteContestAction(input: $input, condition: $condition) {
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
export const createActionType = /* GraphQL */ `
  mutation CreateActionType(
    $input: CreateActionTypeInput!
    $condition: ModelActionTypeConditionInput
  ) {
    createActionType(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateActionType = /* GraphQL */ `
  mutation UpdateActionType(
    $input: UpdateActionTypeInput!
    $condition: ModelActionTypeConditionInput
  ) {
    updateActionType(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteActionType = /* GraphQL */ `
  mutation DeleteActionType(
    $input: DeleteActionTypeInput!
    $condition: ModelActionTypeConditionInput
  ) {
    deleteActionType(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createContestSubscription = /* GraphQL */ `
  mutation CreateContestSubscription(
    $input: CreateContestSubscriptionInput!
    $condition: ModelContestSubscriptionConditionInput
  ) {
    createContestSubscription(input: $input, condition: $condition) {
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
export const updateContestSubscription = /* GraphQL */ `
  mutation UpdateContestSubscription(
    $input: UpdateContestSubscriptionInput!
    $condition: ModelContestSubscriptionConditionInput
  ) {
    updateContestSubscription(input: $input, condition: $condition) {
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
export const deleteContestSubscription = /* GraphQL */ `
  mutation DeleteContestSubscription(
    $input: DeleteContestSubscriptionInput!
    $condition: ModelContestSubscriptionConditionInput
  ) {
    deleteContestSubscription(input: $input, condition: $condition) {
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
export const createEnduserContestActions = /* GraphQL */ `
  mutation CreateEnduserContestActions(
    $input: CreateEnduserContestActionsInput!
    $condition: ModelEnduserContestActionsConditionInput
  ) {
    createEnduserContestActions(input: $input, condition: $condition) {
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
export const updateEnduserContestActions = /* GraphQL */ `
  mutation UpdateEnduserContestActions(
    $input: UpdateEnduserContestActionsInput!
    $condition: ModelEnduserContestActionsConditionInput
  ) {
    updateEnduserContestActions(input: $input, condition: $condition) {
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
export const deleteEnduserContestActions = /* GraphQL */ `
  mutation DeleteEnduserContestActions(
    $input: DeleteEnduserContestActionsInput!
    $condition: ModelEnduserContestActionsConditionInput
  ) {
    deleteEnduserContestActions(input: $input, condition: $condition) {
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
