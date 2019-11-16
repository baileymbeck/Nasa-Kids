const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const User = require('../db/models/user')

//take in user_id and store in database
passport.serializeUser((user, done) => {
	console.log('=== serialize ... called ===')
	console.log(user) // the whole raw user object!
	console.log('---------')
	done(null, { _id: user._id })
})

//going to take userID out of the database
passport.deserializeUser((id, done) => {
	console.log('DEserialize ... called')
	User.findOne(
		{ _id: id },
		'local.userName local.email local.password local.date',
		(err, user) => {
			console.log('======= DESERILAIZE USER CALLED ======')
			console.log(user)
			console.log('--------------')
			done(null, user)
		}
	)
})

// ==== Register Strategies ====
passport.use(LocalStrategy)

module.exports = passport;