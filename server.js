const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const dbConnection = require('./Server/db') // loads our connection to the mongo database
const passport = require('./Server/passport')


const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ===== Middleware ====
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
app.use(
	session({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false,
		saveUninitialized: false
	})
)

// ===== Passport ====
app.use(passport.initialize())
app.use(passport.session()) // will call the deserializeUser


// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

/* Express app ROUTING */
app.use('/auth', require('./Server/auth'))

// ====== Error handler ====
app.use(function(err, req, res, next) {
	console.log('====== ERROR =======')
	console.error(err.stack)
	res.status(500)
})



// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nasaUser");


// If the request does not match any other route, serve the matching file out
// of the build directory
if (process.env.NODE_ENV === 'production') {
	app.use('/static', express.static(path.join(__dirname, 'client', 'build', 'static')));
	app.use('/', (_, res) => {
		res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
	});
	app.use('/img', (_, res) => {
		res.sendFile(path.join(__dirname, 'client', 'build', 'img'));
	});
} else {
	app.use('/', express.static(path.join(__dirname, 'client', 'public')))
}


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});