import React from "react";
import { useLocation } from "react-router-dom";

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

export const currentLocationDomainUrl = window.location.href.split('/').slice(0, 3).join('/');

export const isProduction = () => {
  // build the current url to be used for oauth redirect (should probably use env variables... but this is quicker right now)
  const currentUrl = window.location.href;
  // gets the current url root from the href
  const frontEndUrl = currentUrl.split('/').slice(0, 3).join('/');
  if(frontEndUrl==='https://app.modern-musician.com' || frontEndUrl==='https://platform.modern-musician.link'){
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
  if(frontEndUrl==='https://dev.modern-musician.com' || frontEndUrl==='https://dev-platform.modern-musician.link'){
    return true;
  }
  else{
    return false;
  }
}

export const isTest = () => {
  // build the current url to be used for oauth redirect (should probably use env variables... but this is quicker right now)
  const currentUrl = window.location.href;
  // gets the current url root from the href
  const frontEndUrl = currentUrl.split('/').slice(0, 3).join('/');
  if(frontEndUrl==='https://test.modern-musician.com' || frontEndUrl === 'https://test-platform.modern-musician.link'){
    return true;
  }
  else{
    return false;
  }
}

export const isLocal = isProduction() || isDev() ? false : true;


export const getBackendApiUrl = () => {
  const devUrl = `https://dev.modern-musician.link`;
  const productionUrl = `https://ntboexei3e.execute-api.us-east-1.amazonaws.com/production`;
  const testUrl = `https://test.modern-musician.link`;
  return  isProduction() ? productionUrl  : isTest() ? testUrl : devUrl;
}

const productionFacebookAppId = `1889301381171290`;
const devFacebookAppId = '871609296874018';
export const facebookAppId = isProduction() ? productionFacebookAppId : devFacebookAppId

export const tagInActiveCampaign = async (eventName, userId, artistId, additionalParams) => {
  if(!eventName || !userId || !artistId || isLocal){
    return
  }
  const params = {
    "artistID": artistId,
    "platform": "ActiveCampaign",
    "event": {
        "tagName": eventName,
        "enduserId":userId
    }
  }
  const trackUrl = getBackendApiUrl() + `/track-event`;
  try{
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
  catch(err){
    console.error(`unable to fetch track-event request for params`,params);
    console.log(err);
  }
}

export const trackInAmplitude = async (eventName, deviceId, userId, artistId, additionalParams) => {
  if(!eventName || !deviceId || !artistId || isLocal){
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
  try{
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
  catch(err){
    console.error(`unable to fetch track-event request for params`,params);
    console.error(err);
  }

}

export const timeAgoHoursFromString = (timestampString ) => {
  let timestamp = Date.parse(timestampString);
  var seconds = Math.floor((new Date() - timestamp) / 1000); //time since in seconds
  const hoursPast = (seconds)/3600;
  return hoursPast
}

  // A custom hook that builds on useLocation to parse
// the query string for you.
export const useQueryParams = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
