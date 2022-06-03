import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

// To federated sign in from Facebook
export const AddPageMessagingWithFacebookSignIn = () => {
    const [facebookPages, setFacebookPages] = useState();

    useEffect(() => {
        if (!window.FB) createScript();
    }, [])

    const signIn = () => {
        const fb = window.FB;
        fb.getLoginStatus(response => {
            if (response.status === 'connected') {
                getAWSCredentials(response.authResponse);
            } 
            else {
                fb.login(
                    response => {
                        if (!response || !response.authResponse) {
                            return;
                        }
                        getAWSCredentials(response.authResponse);
                    },
                    {
                        // the authorized scopes
                        scope: 'email,public_profile,pages_messaging'
                        // scope: 'public_profile,email,pages_show_list,public_profile,pages_messaging'
                    }
                );
            }
        });
    }

    const addPageMessagingPermission = async () => {
        const fb = window.FB;
        fb.login(
            response => {
                if (!response || !response.authResponse) {
                    return;
                }
                console.log(`got the following response`,response.authResponse)
            },
            {
                // the authorized scopes
                scope: 'email,public_profile,pages_messaging,pages_show_list',
                return_scopes: true,
                // scope: 'public_profile,email,pages_show_list,public_profile,pages_messaging'
            }
        );
        return await getFBPageList();
    }

    const getFBPageList = async () => {
        const fb = window.FB;
        const fbpages = await fb.api('/me/accounts', function(response){
            console.log(response);
            setFacebookPages(response?.data);
        });

    }

    const getAWSCredentials = (response) => {
            const { accessToken, expiresIn } = response;
            const date = new Date();
            const expires_at = expiresIn * 1000 + date.getTime();
            if (!accessToken) {
                return;
            }

            const fb = window.FB;
            fb.api('/me', { fields: 'name,email' }, response => {
                const user = {
                    name: response.name,
                    email: response.email
                };
                
                Auth.federatedSignIn('facebook', { token: accessToken, expires_at }, user)
                .then(cred => {
                    // If success, you will get the AWS credentials
                    console.log(`credentials`, cred);
                    return Auth.currentAuthenticatedUser();
                }).then(user => {
                    // If success, the user object you passed in Auth.federatedSignIn
                    console.log(`user is`, user);
                }).catch(e => {
                    console.log(e)
                });
            });
        }
    
    const getCurrentUser = () => {
        Auth.currentAuthenticatedUser({
            bypassCache: true,
          })
            .then(user => {
              console.log(`current AuthenticatedUser response`,user)
            })
            .catch(err => console.error(err));
        Auth.currentUserInfo({
            bypassCache: true,
          }).then(info => {
            console.log(`current user info`, info);
        })
        Auth.currentSession().then(info => {
            console.log(`current session info`, info);
        })
        Auth.currentUserPoolUser().then(info=>{
            console.log(`current userpooluser`,info);
        })
        
    }

    const createScript = () => {
        // load the sdk
        window.fbAsyncInit = fbAsyncInit;
        const script = document.createElement('script');
        script.src = 'https://connect.facebook.net/en_US/sdk.js';
        script.async = true;
        script.onload = initFB;
        document.body.appendChild(script);
    }

    const initFB = () => {
        const fb = window.FB;
        console.log('FB SDK initialized');
    }

    const fbAsyncInit = () => {
        // init the fb sdk client
        const fb = window.FB;
        fb.init({
            appId   : '1889301381171290',
            cookie  : true,
            xfbml   : true,
            version : 'v2.11'
        });
    }
   
    return (
        <div>
            <button onClick={signIn}>Sign in with Facebook</button>
            <button onClick={addPageMessagingPermission}>Add FB Messanger Integration</button>
            <button onClick={getCurrentUser}>Check User</button>
            <button onClick={getFBPageList}>Check Page List</button>
            {facebookPages && facebookPages.map((item, i) => {
                return (<h1 key={item?.id || i}>{item.name}</h1>)
            })}
        </div>
    );
}