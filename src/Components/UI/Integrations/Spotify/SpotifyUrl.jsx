const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "2ea63c9a55e94fba9fc23fa994a26bf6"; // this is our dev clientId

// build the current url to be used for oauth redirect (should probably use env variables... but this is quicker right now)
const currentUrl = window.location.href;
// takes the current url root, and adds the login route (which should get us back to the right page)
const redirectUri = currentUrl.split('/').slice(0, 3).join('/') + '/login/spotify'; // spotify here is a dynamic service parameter

//for scope definition, see https://developer.spotify.com/documentation/general/guides/authorization/scopes/
const scopes = [
    "user-read-email",
    "user-read-private",
    //spotify connect 
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-modify-playback-state",
    //user playback
    "streaming",
    "app-remote-control",
    // user library
    "user-library-read",
    "user-library-modify",
    // user follow
    "user-follow-modify",
    "user-follow-read",
    // listening history
    "user-read-playback-position",
    "user-top-read",
    "user-read-recently-played"
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}`;

// loginUrl = "https://accounts.spotify.com/authorize?client_id=YourClientId&response_type=code&redirect_uri=https://localhost:3000/&scope=streaming%20user-read-email%20user-read-private"
