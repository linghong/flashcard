
## Flashcard 

### Techniques included
#### 1.This project's client side was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Techniques used in the front end: React, Redux, react-bootstrap.
#### 2.This project also has a Node.js serverside with MongoDB. Techniques includes node.js express.js, Google Auth2.0., mLab, passport.
#### 3.Jest/Enzyme, Jest Snapshot are used for test.
#### 4.Travis CI is used for continuous deployment.

### dev.js File
register a google OAuth2 API in your google account for your development server and production server, make a file called dev.js and add the following code into the file: 
module.exports={
	googleClientID: <your API's google client id>,
	googleClientSecret: <your API's google client secret>,
	mongoURI: <your DB address>,	
	cookieKey: <your cookieKey>
};
save the file in the config folder.


### For production site
Also register a google OAuth2 API in your google account for production site, and add your google API crediential on the hosting server.

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

### Test Client Side
```javascript
cd client
npm test
```

