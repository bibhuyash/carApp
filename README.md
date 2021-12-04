## Task

Build a simple web app that allows a user to select their car from a directory of registered cars.
This data will be provided by the api server in this repo.
The api provides a list of available makes, models of each make and specific cars for each model with horsepower and engine capacity info.

## Local dev setup guide

1. Clone repo
2. cd your-car/
3. install dependencies: **yarn**
4. start local server and react dev server: **yarn start-with-local-server**
   or manually start local server: **node apiserver/server.js** and start react dev server: **yarn start**
5. open **http://localhost:3000** in your browser(Google Chrome, Mozilla Firefox, Safari, Microsoft Edge)

## Local build setup guide

1. Clone repo
2. cd your-car/
3. install dependencies: **yarn**
4. **npm install -g serve** or **yarn global add serve**
5. start local server: **node apiserver/server.js**
6. build app: **yarn build**
7. serve build locally: **serve -s build**
8. open **localhost:5000** in your browser(Google Chrome, Mozilla Firefox, Safari, Microsoft Edge)

## Setup tests

1. Clone repo
2. cd your-car/
3. install dependencies: **yarn**
4. to run all available tests: **yarn test**

## Main Dependencies

- **react** - main library
- **react-scripts** - helps with project setup: development, builds, linters, scripts and etc.
- **@testing-library** - library for testing react component with jest
- **redux** - application state management
- **@reduxjs/toolkit** - usefull toolkit for better redux store setup and configuration(immer and etc.)
- **react-icons** - library with icon components for better UX
- **react-router** - routes control in application
- **react-virtualized-auto-sizer** - HOC that caclulate width and height for children. Is necessary for virtualizing data(vehicles)
- **react-window** - component for virtualizing data(vehicles)

## Main Features (Proof of concept)

- **vehicle id generation**: needed for react to identify element. We can get multiple vehicles with the same params, that's why i decided to identify them
- **routing for models and vehicles**: needed for better UX, so the user doesn't need to select make and model every time the page is reloaded
- added **responsive layout** to get better view on small screens(mobiles and tablets)
- added **virtual scroll** on vehicles data list because we potentially we can receive very large lists of data and especially on weak computers get glitches. Virtual scroll helps application to prevent glitches in such cases
- added **ability to try again** when we get error from server
- added **ability to filter makes, models and vehicles** to make it easier for users to find needed item
- added debounce on search to prevent application from unnecessary processes
- added a **special loader** to match the application theme
- added **appearance animation** for sections
- added **basic unit tests** for several component
- added custom **font**
