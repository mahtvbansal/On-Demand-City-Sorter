
# Project Link

[City Sorter](https://ondemandsorter.netlify.app/)

[![Screenshot-452.png](https://i.postimg.cc/fWK4JpGb/Screenshot-452.png)](https://postimg.cc/t7YvcSC0)
# City Sorter

This is an app used when we have data of cities and their respective rents along with a few attributes, and now we need to find all possible combinations of cities that satisfy the given total max rent and other attributes. 

## Steps to use this App 

### Step 1

You must have an excel data where you have these 4 columns: Place, Monthly_Rent, Category, Sub_Category.

[![Screenshot-454.png](https://i.postimg.cc/fbC9pw3d/Screenshot-454.png)](https://postimg.cc/d773TcjQ)

### Step 2

You need to convert it into json format. You can simply do it with a google search for an excel to json converter.

**Sample Given Below** [You can copy it for a trial]

```javascript
[
    {
        "Place": "Mumbai",
        "Monthly_Rent": "142000",
        "Category": "I",
        "Sub_Category": "A"
    },
    {
        "Place": "Delhi",
        "Monthly_Rent": "117000",
        "Category": "I",
        "Sub_Category": "B"
    },
    {
        "Place": "Bangalore",
        "Monthly_Rent": "110000",
        "Category": "II",
        "Sub_Category": "A"
    },
    {
        "Place": "Hyderabad",
        "Monthly_Rent": "105000",
        "Category": "II",
        "Sub_Category": "A"
    },
    {
        "Place": "Ahmedabad",
        "Monthly_Rent": "92000",
        "Category": "II",
        "Sub_Category": "A"
    },
    {
        "Place": "Chennai",
        "Monthly_Rent": "102000",
        "Category": "II",
        "Sub_Category": "B"
    },
    {
        "Place": "Kolkata",
        "Monthly_Rent": "99000",
        "Category": "II",
        "Sub_Category": "B"
    },
    {
        "Place": "Gurgaon",
        "Monthly_Rent": "114000",
        "Category": "II",
        "Sub_Category": "B"
    },
    {
        "Place": "Faridabad",
        "Monthly_Rent": "90000",
        "Category": "III",
        "Sub_Category": "A"
    },
    {
        "Place": "Surat",
        "Monthly_Rent": "105000",
        "Category": "III",
        "Sub_Category": "A"
    },
    {
        "Place": "Pune",
        "Monthly_Rent": "110000",
        "Category": "III",
        "Sub_Category": "A"
    }
]
```
### Step 3

- Copy the above data and paste it in the app.
- Enter the rest of the fields.

**For example:** 

if you have 6 cities in your data and you want to get all the combinations possible of 3 cities with a certain Maximum Rent.

The Maximum number of combinations you will get 6C3, which is 20. And it will keep decreasing if you decrease the maxRent.

You can also filter the combinations based on the number of categories and Sub_Categories you want in your result.

### Result will look like...

[![Screenshot-455.png](https://i.postimg.cc/5yk4C2Pw/Screenshot-455.png)](https://postimg.cc/YLYBcMB9)





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
