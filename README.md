## Considerations

### visual elements

- styles (colors and fonts) spinner, input elements can be exported into a component library and styled in a better way

### data storage

- instead of having currentForecast and weeklyForecast, we can combine those into a single forecast object

### missing data

- pollen information was not found with current set of data, so I've used UV (but if we need another call to get it, can be done)

### search options

- Using the [https://www.api.weatherbit.io](https://www.api.weatherbit.io). The search only current works within australia. A proper select component needs to be created and inject the full meta from [https://www.weatherbit.io/api/meta](https://www.weatherbit.io/api/meta) with something like react-select

### testing issues

- coverage not working with current react create app version [https://github.com/testing-library/react-testing-library/issues/663](https://github.com/testing-library/react-testing-library/issues/663) so, sorry, need more time to investigate

- testing can be improved but components are "almost" dumb and stateless so snapshot is covering a lot and tests for utils (which are the really functional/unit) tests are at 100%.

### better code quality

- husky (pre commits) could be added

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Created by [Fred](http://frederico.com.au)
