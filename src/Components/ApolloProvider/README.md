### This is not the ideal way to be doing this
## last updated 2021-08-25 by Spencer Grimes (SG)
## Trying to use AWS APPSYNC with mutliple authentication types is tricky
What we're trying to accomplish here is being able to support both private and public routes with different auth 
We are currently using AWS Amplify to build our GraphQL database so we're using two types of authentiction:
IAM - an aws defined user, in this case we have a single IAM user described as "everybody" this is essentially our public or open "auth"
COGNITO - this is our authentication tool (an AWS tool) that houses the users username and password. 

# how we're using apollo
As described here https://medium.com/open-graphql/apollo-multiple-clients-with-react-b34b571210a5
We can specify a custom client for a specific query. So what we're doing here is at the top level (see App.js) we're using the secure client and wrapping our application in that apollo context. Then for specific public queries, we're specifying the PublicClient in the query itself (see LandingPage.jsx).

This is a documented option in the apollo documentation - https://www.apollographql.com/docs/react/v2/data/queries/

# the problem 
The issue here is that we are technically using two different graphQL clients, which means we lose all the benefits of caching, data optimism, and consistent data information. What would be better is to use a single client and switch authentication modes based on the requirements of the 

# What we probably SHOULD be doing probably is using Apollo's setContext to dynamically choose with auth type to use based on the credentials of the user
See this comment: https://github.com/awslabs/aws-mobile-appsync-sdk-js/issues/531#issuecomment-623046725

Or maybe federation, but that seems like it's all in one auth type... ?
https://www.apollographql.com/blog/backend/auth/setting-up-authentication-and-authorization-apollo-federation/


