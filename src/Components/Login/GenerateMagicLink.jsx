import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { getBackendApiUrl, useQueryParams } from "../../utils/sharedUtils";

export const GenerateMagicLink = async (location_id) => {
    const getMagicLink = async(location_id) => {
        const url = getBackendApiUrl() + `/login`;
        const params = { location_id: location_id };
        try{
            const response = await fetch(url, {
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
            return response?.data?.loggedInUrl;
        }
        catch(err){
          console.error(`unable to post login request for params`,params);
          console.error(err);
        }
    }

    const newLink = await getMagicLink(location_id);
    return newLink;
}