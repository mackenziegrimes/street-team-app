export const selectActionsConfig = [
  {
    id: 'vipGroup',
    label: 'Join the Community',
    subText: 'Get more followers...',
    icon: 'MdGroup',
    inputPlaceholder: 'Enter Street Team Group URL',
  },
  {
    id: 'followMusic',
    label: 'Follow My Music',
    subText: 'Get more music followers...',
    icon: 'MdLibraryMusic',
    inputPlaceholder: 'Enter Follow Music URL',
  },
  {
    id: 'scheduleMeeting',
    label: 'Book a Meet and Greet',
    subText: 'Setup one-on-ones with your fans...',
    icon: 'FaCalendarCheck',
    inputPlaceholder: 'Enter Meet & Greet URL',
  },
  {
    id: 'email',
    label: 'Send Me An Email',
    subText: 'Get Emails From Fans...',
    icon: 'MdEmail',
    inputPlaceholder: 'Enter Your Email Address',
  },
];

export const apiActionsConfig = {
  email: {
    // actionPageID: actionPageId,
    buttonIcon: 'Email',
    // targetURL: newTargetUrl,
    backgroundColor: '#FED93E',
    pointValue: 10,
    position: 4,
    preActionText: 'Send Me an Email',
    postActionText: 'Email Sent!',
    textColor: 'black',
    serviceAction: 'EmailLink',
  },
  vipGroup: {
    // actionPageID: actionPageId,
    buttonIcon: 'Group',
    // targetURL: newTargetUrl,
    serviceAction: 'link',
    backgroundColor: '#FED93E',
    pointValue: 10,
    position: 1,
    preActionText: 'Join the Community',
    postActionText: 'Community Joined',
    textColor: 'black',
    serviceAction: 'JoinLink',
  },
  starterPack: {
    // actionPageID: actionPageId,
    buttonIcon: 'Gift',
    // targetURL: inputValues.starterPackUrl,
    backgroundColor: '#43C052',
    pointValue: 50,
    position: 5,
    preActionText: 'Claim Your Free Gift',
    postActionText: 'Gift Claimed',
    textColor: 'white',
    serviceAction: 'StarterPackLink',
  },
  followMusic: {
    // actionPageID: actionPageId,
    buttonIcon: 'Music',
    // targetURL: newTargetUrl,
    backgroundColor: '#974FF8',
    pointValue: 10,
    position: 2,
    preActionText: 'Follow My Music',
    postActionText: 'Music Followed',
    textColor: 'white',
    serviceAction: 'FollowLink',
  },
  scheduleMeeting: {
    // actionPageID: actionPageId,
    buttonIcon: 'FaCalendarCheck',
    // targetURL: newTargetUrl,
    backgroundColor: '#481EAA',
    pointValue: 100,
    position: 3,
    preActionText: 'Book a Meet & Greet',
    postActionText: 'Meet & Greet Booked',
    textColor: 'white',
    serviceAction: 'ScheduleLink',
  },
};
