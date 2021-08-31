### to see the production (master) web app -- https://app.modern-musician.com/whosah

## To Get Started...

# you'll need git, npm, and aws-cli tools installed to run this locally.

 npm install -g @aws-amplify/cli

 git clone https://github.com/spencer-grimes/street-team-app.git

 cd street-team-app
## setting up the backend
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

## install node and run the react app
 npm install

 npm run start

This should run locally on http://localhost:3000/ by default

### NOTE: using AWS Amplify CI/CD, pushed to master branch with automatically be deployed to production
