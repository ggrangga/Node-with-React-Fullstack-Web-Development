module.exports = {
	/*googleClientID: '876172634348-ejfde19u0k33cg78hra9nqih4enf2i8l.apps.googleusercontent.com',
	googleClientSecret: '7IVSNonryZ2sZba0iIf8HPqI',
	mongoURI: 'mongodb://root:dbroot9@ds113732.mlab.com:13732/emaily-dev',
	cookieKey: 'zdgvdsgfsgfdsgsdfhsertrsegrsegrse'*/
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
	mongoURI: process.env.MONGO_URI,
	cookieKey: process.env.COOKIE_KEY
};