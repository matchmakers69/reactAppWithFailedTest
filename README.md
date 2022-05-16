# TME React App

The front-end React app for the transformational member experience

## Setup

### Setting Up Cognito User Pool

To setup your Cognito user pool, open the .env file and update the following to match your user pool:

REACT_APP_AMPLIFY_USER_POOL_ID=<Your_User_Pool_ID> REACT_APP_AMPLIFY_APP_CLIENT_ID=<Your_Client_ID>

## Development

In the root directory run: `npm start` to run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to
view it in the browser.

## Commit

You cannot push directly to the master branch. To commit:

1. Create, commit and push to a feature branch
1. [In the AWS console](https://eu-west-2.console.aws.amazon.com/codesuite/codecommit/repositories/reactApp/pull-requests/new?region=eu-west-2)
   , create a pull request to merge from your feature branch into master
1. Find someone to approve your pull request
1. Once approved,
   - If you have lots of commits then use a 'Squash and Merge'
   - If you only have one commit then you can do a 'Fast Merge'

## Deploy

1. Run
   the [tme-app-build](https://eu-west-2.console.aws.amazon.com/codesuite/codepipeline/pipelines/tme-app-build/view?region=eu-west-2)
   pipeline by clicking 'Release Changes'. This will automatically deploy to dev
2. If you want to deploy to QA then you need to manually approve the deploy to QA step in the pipeline

##Note

Axios is currently used for asynchronous calls
