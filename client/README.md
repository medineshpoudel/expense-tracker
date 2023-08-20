# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Working with local db/api

For UI development and to test with full REST API we use [json server](https://www.npmjs.com/package/json-server#getting-started).

Instead of adding `json-server` into the project itself, let's just use it separately through [NPX](https://www.npmjs.com/package/npx).

Steps to use local db for REST API:

1. Make sure you have a `db.json` file inside the `data` folder in the project.
2. In a new terminal, run `npx json-server -p 3300 -w data/db.json`
3. Test by visiting `localhost:3300/users`. Should receive a list of users, based on `db.json` entry.
4. You should be able to use REST API using [`axios`](https://axios-http.com/docs/intro) and `localhost:3300` as api base url.

For more info on getting started with `json-server`, visit [Getting Started](https://www.npmjs.com/package/json-server#getting-started)

NOTE: Do not install `json-server` into the project. Install using `npx`.
NOTE: Can be used with different port than `3300`. Make sure it does not conflict with other apps, including react.

## App Dependencies

### Kendo React

KendoReact is a commercial UI library designed and built for developing business applications with React. Every UI component in the KendoReact suite has been built from the ground-up specifically for React.

The KendoReact library contains UI components that range from advanced components including the data grid, charts and gauges, rich text editor, and scheduler – to form elements such as date pickers, dropdowns, and various inputs. There are also helper libraries such as PDF and Excel processing packages.

For a full list of all available UI components, helper utilities, and accompanying documentation articles please refer to the [KendoReact components list](https://www.telerik.com/kendo-react-ui/components/)

For installing and using kendo react, refer to the [Getting Started with KendoReact](https://www.telerik.com/kendo-react-ui/components/getting-started/).

### Storybook

Storybook is a JavaScript tool that allows developers to create organized UI systems making both the building process and documentation more efficient and easier to use. By isolating components, it accelerates and simplifies development. This enables you to focus on one element at once. Without having to launch a complicated development stack, force specific data into your database, or use your application's navigation, you may create full user interfaces.

#### Installing Storybook

Use the Storybook CLI to install it in a single command. Run this inside your existing project’s root directory:

`npx storybook init`

#### Running Storybook

Use the Storybook CLI to run it in a single command. Run this inside your existing project’s root directory:

`npm run storybook`

#### Testing UI withs Storybook

Storybook provides a clean-room environment for testing components in isolation. Stories make it easy to explore a component in all its variations, no matter how complex.

That means stories are a pragmatic starting point for your UI testing strategy. You already write stories as a natural part of UI development, testing those stories is a low-effort way to prevent UI bugs over time.

You can learn more about UI testing in the [How to test UIs with Storybook](https://storybook.js.org/docs/react/writing-tests/introduction).

You can learn more about storybook in the[Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction).

### Playwright

Playwright is an open-source library for automating web browsers and testing web applications. It allows developers to write scripts that simulate user interactions with web pages, and assert that the pages behave as expected. Playwright is similar to other web automation tools such as Selenium, but it also provides additional features like automatic waiting for page elements to load, and the ability to run scripts in multiple browsers. Basically, Playwright is used to perform End To End Testing

End-to-end tests are created to test how a user would probably use the program by simulating actual user behaviors. E2E testing in React enables you to find flaws in your code before publishing your app and helps to guarantee that the code you wrote is functional and your app functions as intended.

While there are many testing frameworks available for React like `cypress` ,`jest` ,`puppeteer` , `selenium`, we perform E2E testing in our app using `playwright`.

#### Installing Playwright

Run the following command on your CLI:

`npm init playwright@latest`

#### Running Playwright Test

Run the following command on your CLI:

`npx playwright test`

### Running Playwright Test on Chrome Browser

Run the following command on your CLI:

`npx playwright test project=chromium --headed`

You can learn more in the [Playwright Documentation](https://playwright.dev/docs/intro).
