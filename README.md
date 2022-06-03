### to see the production (master) web app -- https://app.modern-musician.com/whosah

## To Get Started...

# you'll need git and npm installed to run this locally.

 git clone https://github.com/spencer-grimes/street-team-app.git

 cd street-team-app
 
 ## install node packages and run the react app
 npm install

 npm run start

This should run locally on http://localhost:3000/ by default

## working with the FB integration
# if you're working on the facebook integration, or need to be using authenticated FB SDK requests, you'll need to use a tool called ngrok to tunnel in
Request view access to https://docs.google.com/document/d/1mkPqpG5LMIT5IO-VRl8b2j6lx8cI1sRhnVG0_H47L00/ if you need to do this
 
## working with the backend
# if you're working on the backend, you'll need aws-amplify/cli tools
 npm install -g @aws-amplify/cli
 
 amplify configure ## follow the prompts
> Close the console browser window that gets opened. Back in the terminal, press "Enter" <br>
> region: us-east-1 <br>
> username: type your aws console username for the modern-musician environment <br>
> Close the console browser window that gets opened. Back in the terminal press "Enter" <br>
> accessKeyId: enter your access key from the csv file you were sent by the system admin <br>
> secretAccessKey: enter the secret access key from the csv file you were sent by the system admin <br>
> profile: enter whatever name you want your local profile to be stored under on your machine <br>
> should get the message "Successfully set up the new user" <br>

 amplify env checkout dev 
> pulls the dev backend environment into your local environment <br>

 amplify pull 
> pulls the latest backend into your local environment <br>


### NOTE: using AWS Amplify CI/CD, anything pushed to dev branch becomes available at dev.modern-musician.com and any thing pushed to the master branch will automatically be deployed to production
