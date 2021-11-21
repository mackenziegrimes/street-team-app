export const compareId = (key, order = 'asc') => {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === 'desc' ? comparison * -1 : comparison;
  };
};

export const cleanUrl = urlString => {
  var link = '';
  if (urlString != null) {
    //if the link is a mailto link, don't add HTTP to it
    if (urlString.toUpperCase().includes('MAILTO:')) {
      link = urlString;
    } else {
      link =
        urlString.indexOf('://') === -1 ? 'http://' + urlString : urlString;
    }
  }
  return link;
};

export const isProduction = () => {
  // build the current url to be used for oauth redirect (should probably use env variables... but this is quicker right now)
  const currentUrl = window.location.href;
  // gets the current url root from the href
  const frontEndUrl = currentUrl.split('/').slice(0, 3).join('/');
  console.log(`test1`,frontEndUrl);
  if(frontEndUrl==='https://app.modern-musician.com'){
    return true;
  }
  else{
    return false;
  }
}

export const isDev = () => {
  // build the current url to be used for oauth redirect (should probably use env variables... but this is quicker right now)
  const currentUrl = window.location.href;
  // gets the current url root from the href
  const frontEndUrl = currentUrl.split('/').slice(0, 3).join('/');
  console.log(`test1`,frontEndUrl);
  if(frontEndUrl==='https://dev.modern-musician.com'){
    return true;
  }
  else{
    return false;
  }
}

export const isLocal = () => {
  if(isProduction() || isDev()){
    return false
  } else {
    return true
  }
}


export const getBackendApiUrl = () => {
  const devUrl = `https://qk9qdxpz3f.execute-api.us-east-1.amazonaws.com/dev`;
  const productionUrl = `https://ntboexei3e.execute-api.us-east-1.amazonaws.com/production`;
  return  isProduction() ? productionUrl  : devUrl;
}

const productionFacebookAppId = `1889301381171290`;
const devFacebookAppId = '871609296874018';
export const facebookAppId = isProduction() ? productionFacebookAppId : devFacebookAppId


export const trackInAmplitude = async (eventName, deviceId, userId, artistId, additionalParams) => {
  if(!eventName || !deviceId || !artistId){
    return
  }
  const params = { "artistID": artistId,
  "platform": "Amplitude",
  "event": {
      "event_type": eventName,
      "device_id": deviceId, 
  }}
  if(userId){
    // this is an optional parameter
    params['event']['user_id']=userId;
  }
  if(additionalParams && typeof(additionalParams)==='object'){
    //if additional params are passed in, jsut append them to the object
    params.event = Object.assign(params.event,additionalParams);
  }
  const trackUrl = getBackendApiUrl() + `/track-event`;
  const response = await fetch(trackUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  })
    .then(rsp => rsp.json())
    .then(json => {
      if (json.error && json.error.message) {
        console.error(json.error.message);
      } else {
        console.log(`results are`, json);
        return json
      }
    });
}