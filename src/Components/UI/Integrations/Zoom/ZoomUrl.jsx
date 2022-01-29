const authEndpoint = 'https://zoom.us/oauth/authorize';
const clientId = '0QgLw4cgQOSmrxY6hdfnFw'; // this is our dev clientId

// build the current url to be used for oauth redirect (should probably use env variables... but this is quicker right now)
const currentUrl = window.location.href;
// takes the current url root, and adds the login route (which should get us back to the right page)
const redirectUri = currentUrl.split('/').slice(0, 3).join('/') + '/login/zoom'; // zoom here is a dynamic service parameter

//for scope definition, see https://developer.zoom.com/documentation/general/guides/authorization/scopes/
const scopes = [
  "meeting:write:admin",
  "meeting:read:admin"
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}`;

// loginUrl = "https://zoom.us/oauth/authorize?response_type=code&client_id=0QgLw4cgQOSmrxY6hdfnFw&redirect_uri=https://dev.modern-musician.com/login/zoom"
