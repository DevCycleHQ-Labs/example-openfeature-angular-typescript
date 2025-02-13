# DevCycle Angular SDK Example App (TypeScript)

An example app built using the [DevCycle Angular SDK](https://docs.devcycle.com/sdk/client-side-sdks/angular/) and TypeScript

## Creating a Demo Feature
This example app requires that your project has a feature with the expected variables, as well as some simple targeting rules. 

#### ⇨ [Click here](https://app.devcycle.com/r/create?resource=feature&key=hello-togglebot) to automatically create the feature in your project ⇦

When you run the example app and switch your identity between users, you'll be able to see the feature's different variations.

## Running the Example
### Setup

* Run `npm install` in the project directory to install dependencies
* Create a `.env` file and set `DEVCYCLE_CLIENT_SDK_KEY` to the SDK Key for your environment.\
You can find this under [Settings > Environments](https://app.devcycle.com/r/environments) on the DevCycle dashboard. [Learn more about environments](https://docs.devcycle.com/essentials/environments).

### Development

`npm run start`

Runs the app in development mode.\
Open [http://localhost:4200](http://localhost:4200) to view it in your browser.

The application will automatically reload if you change any of the source files.

### Build

`npm run build`

Builds the app for production to the `dist` folder.\
The build is minified and the filenames include the hashes.

### Testing

`npm run test`

Executes the unit tests via [Karma](https://karma-runner.github.io).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Documentation
For more information about using the DevCycle Angular SDK, see [the documentation](https://docs.devcycle.com/sdk/client-side-sdks/angular/)

