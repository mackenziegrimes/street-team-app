import { getBackendApiUrl } from '../../../../../utils/sharedUtils';

export const getBillingSessionUrl = async (artistId) => {
    const params = {
      artistID: artistId
    };
    // todo this should be done using environment variables, but for now this works -2021-11-11 SG
    let createUrl = `${getBackendApiUrl()}/create-stripe-session`;
    console.log(`STRIPE params are`, params);
    try{
        const responseData = await fetch(createUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
        })
        .then(rsp => rsp.json())
        .then(json => {
            if (json.error && json.error.message) {
            console.error(json.error.message);
            return {errorMessage: json.error.message};
            } else {
            console.log(`stripe session results are`, json);
            return json
            }
        });
        return {url: responseData?.url}
    }
    catch(err){
      console.error(`creating stripe session failed due to error:`);
      console.error(err);
    }
  };