
## Welcome to PlentyofThyme

<img width="200" align = "center" alt="PlentyofThyme" src="https://plenty-of-thyme.herokuapp.com/">

## Project Description

PlentyofThyme is the newest healthy eating app in the marketplace! Our motto is to go healthy and be happy! Similar to Epicurious, PlentyofThyme is a react-based single-page application which allows users to pin ingredients to their pantry and save receipes that they find interesting, healthy, and unique to help them prepare for their weekly meals. 

After pinning a receipe to your board, it will show up in the pantry with all the ingredients. This allows users to save those ingredients for later planning and meal prepping! 
Bon Appétit! 



# Create React Express App

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.

### Project Instructions/Requirements
Your project must:
* Must use ReactJS in some way (even if minimal)
* Must use a Node and Express Web Server
* Must be backed by a MySQL or MongoDB Database with a Sequelize or Mongoose ORM
* Be deployed using Heroku (with Data);
* Must have both GET and POST routes for retrieving and adding new data
* Must utlize at least two libraries, packages, or technologies that we haven't discussed
* Must allow for or involve the authentication of users in some way
* Have a polished frontend / UI
* Have folder structure that meets MVC Paradigm
* Meet good quality coding standards (indentation, scoping, naming)
* Must not expose sensitive API key information on the server, see Protecting-API-Keys-In-Node.md

