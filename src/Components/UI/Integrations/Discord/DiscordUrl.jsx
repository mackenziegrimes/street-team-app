const authEndpoint = 'https://discord.com/api/oauth2/authorize';
const clientId = '886234811616882699'; // this is our clientId

// build the current url to be used for oauth redirect (should probably use env variables... but this is quicker right now)
const currentUrl = window.location.href;
// takes the current url root, and adds the login route (which should get us back to the right page)
const redirectUri = currentUrl.split('/').slice(0, 3).join('/') + '/login/discord'; // discord here is a dynamic service parameter

//for scope definition, see https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes
const scopes = [
  "guilds.join",
  "guilds",
  "guilds.members.read",
  "bot",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&permissions=8&redirect_uri=${redirectUri}&response_type=code&scope=${scopes}`;



// loginUrl = "https://zoom.us/oauth/authorize?response_type=code&client_id=0QgLw4cgQOSmrxY6hdfnFw&redirect_uri=https://dev.modern-musician.com/login/zoom"
