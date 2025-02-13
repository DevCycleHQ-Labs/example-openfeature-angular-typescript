# DevCycle Angular SDK Example App (TypeScript)

An example app built using the [OpenFeature Angular SDK](https://openfeature.dev/docs/reference/technologies/client/web/angular) and TypeScript

## Creating a Demo Feature
This example app requires that your project has a feature with the expected variables, as well as some simple targeting rules. 

#### ⇨ [Click here](https://app.devcycle.com/r/create?resource=feature&key=hello-togglebot) to automatically create the feature in your project ⇦

When you run the example app and switch your identity between users, you'll be able to see the feature's different variations.

## Running the Example
### Setup

* Run `npm install` in the project directory to install dependencies
* Edit the `DEVCYCLE_CLIENT_SDK_KEY` in the `src/environments/environment.ts` file to the SDK Key for your environment.\
You can find this under [Settings > Environments](https://app.devcycle.com/r/environments) on the DevCycle dashboard. [Learn more about environments](https://docs.devcycle.com/essentials/environments).

### Development

`npm run start`

Runs the app in development mode.\
Open [http://localhost:4200](http://localhost:4200) to view it in your browser.

The application will automatically reload if you change any of the source files.

## Documentation
For more information about using the DevCycle Angular SDK, see [the documentation](https://docs.devcycle.com/sdk/client-side-sdks/angular/)
