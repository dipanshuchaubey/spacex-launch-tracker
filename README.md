## Technical Description

The application is built and deployed using these technologies:

- React.js
- Netlify

All the data displayed on the website is fetched from SpaceX API. To fetch data from the the public API `axios` is used as a dependency which allows us to easily make HTTP requests.

### Applications Specs

```
<App>

 <Filter/>
 ...
 <Launch />
 <Launch />
 <Launch />
 ...

</App>
```

There are two major components that are responsible for rendering whole application: <br />
`<Filter />` <br />
`<Launch />`

- The `Filter` component contains hard coded filters that helps in sorting out required information

- The `Launch` component contains the boiler plate details for rendering each launch detail. When a reponse is received from the API the data is maped through using a looper function. Which renders the `Launch` components multiple times but with different data.

## Available Scripts

In the project directory, to install the required dependencies:

### `npm install`

Then

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
