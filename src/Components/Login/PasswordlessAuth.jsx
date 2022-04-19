import React, { useEffect, useState } from "react";
import Auth from "@aws-amplify/auth";
import { useParams, Redirect, useHistory } from "react-router-dom";
import { getBackendApiUrl, useQueryParams } from "../../utils/sharedUtils";

export default () => {
    let history = useHistory();
    const { userRole, challenge } = useParams();
    
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const finishSignin = async(challenge) => {
        try {
            const [email, code] = challenge.split(',');
            const user = await Auth.signIn(email);
            await Auth.sendCustomChallengeAnswer(user, code);
            await Auth.currentSession();
            setSuccess(true);
        } catch (e) {
            setError(e);
        }
    };

    useEffect(() => {
        if(challenge){
            finishSignin(challenge)
        };
    }, [challenge]);

    if (error) {
        return (
            <>
                <h1>Failed finishing sign-in</h1>
                <pre>{JSON.stringify(error, null, 2)}</pre>
            </>
        );
    }

    if (success) {
        console.log(`success`);
        history.push('/login');
        window.location.reload();
    }

    return (<p>Signing you in...</p>);
}