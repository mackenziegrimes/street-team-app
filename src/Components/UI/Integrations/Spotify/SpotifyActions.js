import { getBackendApiUrl } from "../../../../utils/sharedUtils";

export const trackPlays = async ({userId, pageId, additionalParams}) => {
    if(!userId || !pageId){
        console.error('called track plays with missing pageId or userId');
        return
    }
    const params = {
      "enduserId": userId,
      "service": "SPOTIFY",
      "pageId": pageId,
    }
    const trackUrl = getBackendApiUrl() + `/track-plays`;
    const response = await fetch(trackUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    });
    if(response.ok){
        const json = await response.json();
        return json?.loggedListensToday;
    }
  }