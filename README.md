# In this concept we will see that how we can use Bearer Token for authorizing users
<br> 
- in case suppose we want to restrict user or to limit any condition in api , that after 24 hrs api will be disabled automatically so in that case we can use Bearer tokens which is in JSON format 

- previously we have made a Small Project mainly a login fomrm in react and connected wiith strapi to store all data .
<br>
- now let's see that how can we authorize it 

- There are two types of API'S 
  - Open api(no token required)
  - Restricted Api(Token required)
<br>
- now playing with strapi and authorization 
- make another collection type and fill entries accordingly
-   now go to settings and roles inside user authentication and select permissions for collection 
- create new api token  name and type full access or read only 
- copy that api and paste in postman 
- but first in postman paste url of the api then go to authorization and select bearer token paste and send with method GET
- In case you have set the roles as authenticated and you have not given the token then you will get the error as forbidden .
- These token are JWT token defined as JSON web tokens 
- these tokens are for particular time only then they expire so we can set the time limit for them weather one hour month or year ....in case i want to recieve my no of registrations 

- Now after copying the bearer token go to my Login project fork it and check the things first ...there i have used the public api ...now you have to use authorized one so go to app.js and inside fetch inside header write this 

'Authorization':'Bearer (yha token ayega)'
'Accept':'application/json'

- now token is applied and check in the network tab oflogin page on submitting 
- make sure if you are using the live server of strapi then the link must contain https else in local env it is http only .....dhyan rkhna ye 

- now clone the project and try this adding into fetch api

- good Luck 

* Mark a Star Please
<br>
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
