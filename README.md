
## Flashcard 

### Techniques 
#### 1.This project's client side was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Techniques used in the front end: React, Redux, react-bootstrap, run at port 3000.
#### 2.This project also has a Node.js serverside with MongoDB. Techniques includes node.js, express.js, mLab, passport, and run at port 5000.
#### 3. Google Auth2.0. is used for authorization. In development environment, a proxy is also set up for derecting the http://localhost:3000/auth/google/callback to http:localhost:5000/auth/google/callback 
#### 4. Jest/Enzyme, Jest Snapshot are used for test.
#### 5. Travis CI is used for continuous deployment.

### Prepare for development site
#### Register Google OAuth2
register a google OAuth2 API in your google account for your development server, be sure to list http://localhost:5000 under Authorized origins and 
the below two links under the Authorized redirect URIs:
http://localhost:5000/auth/google/callback
http://localhost:3000/auth/google/callback
#### Set up your MongoDB database in mLab for your local development site
#### dev.js File
make a file called dev.js and add the following code into the file: 
module.exports={
	googleClientID: <your API's google client id>,
	googleClientSecret: <your API's google client secret>,
	mongoURI: <your DB address>,	
	cookieKey: <your cookieKey>
};
save the file in the config folder.

### Start
install node_modules in serverside:
```javascript
npm install 
```
then install node_modules in Client Side: 
```javascript
cd client
npm install 
```

then run the development servers:
```javascript
npm run dev
```

It will start both client side and sever side servers. client side port:3000; server side port: 5000

### Run test for client side
```javascript
cd client
npm test
```
### Prepare for production site
#### Register A Google OAuth2 API for your production site
#### Set up your MongoDB database in mLab for your production site
#### Add your google API crediential on the hosting server.

### Deploy 
#### Deploy to Heroku
```javascript
heroku create 
```
If you create the heroku app on your heroku site, you can run the following code to add the heroku app to you  git repo
```javascript
git remote add heroku https://git.heroku.com/<youherokuappname>.git
```
Then run the following code to deploy your code
```javascript
git add .
git commit -m "something new"
git push heroku master
```
### View
#### Local 
Go to http://localhost:3000
#### OnLine
Go To https://flash-card-pro.herokuapp.com